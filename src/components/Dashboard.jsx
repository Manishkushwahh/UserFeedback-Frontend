import React from 'react';
import { BASE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const allFeedback = useSelector((store) => store.feedback);

    if(!allFeedback) return;
    return(
        <div className='flex flex-col items-center'>
            <h1 className='text-center font-bold text-2xl mt-10 mb-3'>Dashboard</h1>
            {allFeedback.map((data) => {
                const {username, emailId, feedback, _id, createdAt} = data;
                return(
                    <div key={_id} className='border border-black p-2 w-[70%] my-3'>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>Username -</h1>
                        <p>{username}</p>
                    </div>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>EmailId -</h1>
                        <p>{emailId}</p>
                    </div>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>Feedback -</h1>
                        <p>{feedback}</p>
                    </div>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>Posted -</h1>
                        <p>{createdAt}</p>
                    </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Dashboard;