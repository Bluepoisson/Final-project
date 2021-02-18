import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

import BackArrow from '../lib/BackArrow';

 const MyReviews = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const MYREVIEWS_URL = 'http://localhost:8080/reviews';
  const [myReviews, setMyReviews] = useState('');

  useEffect(() => {
  fetch(MYREVIEWS_URL, { 
    method: 'GET',
    headers: { "Content-Type": "application/json", Authorization: accessToken}
  })
    .then(res => res.json())
    .then(data => setMyReviews(data))
    .catch(err => console.log("Caught an error:", err))
  }, )


    return (
      <>
      <Link className="backLink" to={`/`}>
		    <BackArrow />
		  </Link>
      
      { myReviews && myReviews.map(review => (
       <p> {review.recommendation} </p>
      ))};
        
      </>
    )
  
} 
export default MyReviews;