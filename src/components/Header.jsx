import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../utils/feedbackSlice';

const Header = ({filterBtn, setFilterBtn}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFilter = () => {
    setIsFilterOpen(prev => !prev);
  }

  const handleFilterUsername = async () => {
    const data =  await axios.get(
      BASE_URL + "/feedback/username"
    );
    dispatch(addFeedback(data?.data?.data));
    // console.log(data?.data?.data);
    setIsFilterOpen(false);
  }

  const handleFilterDate = async () => {
    const data =  await axios.get(
      BASE_URL + "/feedback/date"
    );
    dispatch(addFeedback(data?.data?.data));
    // console.log(data?.data?.data);
    setIsFilterOpen(false);
  }

  return (
    <div className='bg-green-300 px-5 py-3 flex justify-between'>
        <div>
            <Link to="/feedback">
                <h1 
                className='cursor-pointer font-bold'
                onClick={()=> setFilterBtn(false)}
                >Submit Feedback</h1>
            </Link>
            <Link to="/dashboard">
                <h1 
                className='cursor-pointer font-bold'
                onClick={()=> setFilterBtn(true)}
                >Dashboard</h1>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div>
            {filterBtn && 
              <button 
              type='button'
              className='bg-gray-500 py-1 px-2 rounded-sm text-white ml-10'
              onClick={handleFilter}
              >Filter</button>
            }
            {isFilterOpen && 
              <div className='absolute shadow-md text-sm bg-gray-200 text-black px-1 py-3'>
              <ul className='space-y-1'>
                <li className="cursor-pointer" onClick={handleFilterUsername}>By Username</li>
                <li className="cursor-pointer" onClick={handleFilterDate}>By Date</li>
              </ul>
            </div>
            }
          </div>
        </div>
    </div>
  )
}

export default Header