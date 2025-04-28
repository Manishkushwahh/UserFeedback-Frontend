import React, { useEffect, useState } from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../utils/feedbackSlice';

const Body = () => {

  const [filterBtn, setFilterBtn] = useState(false);
  const dispatch = useDispatch();

  const getFeedbacks = async () => {
    try {
      const data = await axios.get(
        BASE_URL + "/feedback",
      );
      dispatch(addFeedback(data?.data?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFeedbacks();
  }, []);


  return (
    <>
        <Header filterBtn={filterBtn} setFilterBtn={setFilterBtn}/>
        <Outlet />
    </>
  );
};

export default Body;