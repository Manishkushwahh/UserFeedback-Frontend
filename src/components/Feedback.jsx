import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../utils/constants';
const Feedback = () => {

const [feedback, setFeedback] = useState("");
const [username, setUsername] = useState("");
const [emailId, setEmailId] = useState("");
const [usernameError, setUsernameError] = useState("");
const [emailIdError, setEmailIdError] = useState("");
const [feedbackError, setFeedbackError] = useState("");

const [isSubmit, setIsSubmit] = useState(false);



const handleSubmit = async () => {
  try {
    const data = await axios.post(
      BASE_URL + "/feedback",
      {
        username,
        emailId,
        feedback,
      },
    );
    console.log(data.data.data);
    setEmailId(""); 
    setUsername("");
    setFeedback("");
    setIsSubmit(true);

    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);

  }catch (err) {
    setUsernameError(err?.response?.data?.username?.message);
    setEmailIdError(err?.response?.data?.emailId?.message);
    setFeedbackError(err?.response?.data?.feedback?.message);
    console.log(err?.response?.data);
  }
}


  return (
    <div className='flex flex-col items-center gap-3'>
        <div className='font-bold text-2xl mt-10 mb-5'>Feedback</div>
        <div >
        <div>
            <textarea 
            cols={100}
            rows={10}
            className='border border-black p-2 outline-none rounded-sm'
            placeholder='type your feedback....'
            value={feedback}
            onChange={(e)=> setFeedback(e.target.value)}
            />
            <p className='text-red-600'>{feedbackError}</p>
        </div>
        <div className='flex justify-between'>
            <div className='username'>
              <label>Username :</label>
              <input 
              className='p-1 ml-2 border border-black outline-none rounded-sm w-2xs'
              type='text' 
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              placeholder='username' />
              <p className='text-red-600'>{usernameError}</p>
            </div>

            <div className='email'>
              <label>EmailId :</label>
              <input 
              className='p-1 ml-2 border border-black outline-none rounded-sm w-2xs'
              type='text' 
              value={emailId}
              onChange={(e)=> setEmailId(e.target.value)}
              placeholder='email' />
              <p className='text-red-600'>{emailIdError}</p>
            </div>
        </div>
        <div className='text-center mt-5'>
            <button 
            type='button'
            className='py-2 px-4 bg-green-400 rounded-sm cursor-pointer'
            onClick={handleSubmit}
            >Submit</button>
            {isSubmit && 
              <div className='text-sm font-bold text-green-700 mt-2'>
              Feedback Submitted Successfully!
              </div>
            }
        </div>
        </div>
    </div>
  );
};

export default Feedback;