const ButtonContainer = ({jobs, currentItem, setCurrentItem}) => {
    return (
        <div className='btn-container'>
            {jobs.map(job =>
                <button 
                    key={job.id} type="button" 
                    onClick={() => {setCurrentItem(job.order)}}
                    className={job.order === currentItem ? 'job-btn active-btn' : 'job-btn'}
                >
                    {job.company}
                </button>) 
            }            
        </div>
    )
};

export default ButtonContainer;