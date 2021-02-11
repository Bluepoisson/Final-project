// import React, {useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const REVIEW_URL = 'http://localhost:8080/reviews';

//   const Reviews = () => {
//   const [review, setReview] = useState('');
//   const [reviewList,setReviewList] = useState([]);

//   const accessToken = useSelector((store) => store.user.login.accessToken);

//   const handleReview = (e) => {
//     e.preventDefault();
//     setReview();
  
//   try {
//   fetch(REVIEW_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Authorization: accessToken },
//     body: JSON.stringify({ description: review }),

//   })
//   .then((res) => {
//     if(!res.ok) {
//       throw new Error ('Can not save review')
//     }
//     return res.json
//   })
//   } catch(err) {
//     console.log(err.errors)
//   }
// }

// useEffect(() => {
//   setReview();
// }, []) 




//   const handleReviewList = () => {
//     fetch(REVIEW_URL, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json', Authorization: accessToken },
//     })
//     .then((res) => {
//       if(!res.ok) {
//         throw new Error ('Can not retrieve review')
//       }
//       return res.json();
//     })
//     .then(data => setReviewList(data))
//     .catch(error => console.error(error))
//   }

//   useEffect(() => {
//     handleReviewList();
//   }, ) 

//   return (
//     <div>
//       <form>
//         <h1>Review</h1>
//         <p>test test testing</p>
//         <textarea
//           required
//           rows="10"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         >
//       </textarea>
//       <button
//         type="submit"
//         onClick={handleReview}
//         >
//       </button>
//     </form>
//     </div>
//     )
// };

// export default Reviews;