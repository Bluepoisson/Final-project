import React from 'react';
import { useSelector } from 'react-redux';


 const MyReviews = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const MYREVIEWS_URL = 'http://localhost:8080/reviews';

    
  fetch(MYREVIEWS_URL, { 
    method: 'GET',
    headers: { "Content-Type": "application/json", Authorization: accessToken}
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Caught an error:", err))






    return (
      <>
      <div>Myreviews</div>
      </>
    )
  
} 








export default MyReviews;