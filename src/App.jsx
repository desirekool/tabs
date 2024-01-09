import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  // const { isLoading, setIsLoading } = useState(true);
  // const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const { isLoading, isError, data:jobs } = useFetch(url);

  // const fetchJobs = async () => {
  //   const response = await fetch(url);
  //   const newJobs = await response.json();
  //   setJobs(newJobs);
  //   console.log(newJobs);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  const getItemWithOrder = (items, order) => {
    return items.filter(item => item.order===order)[0];
  }

  return (jobs && jobs.length > 0) ? 
    (
    <section className="jobs-center">
      <ButtonContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo job={getItemWithOrder(jobs, currentItem)} /> 
    </section>
    ) : (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
};
export default App;
