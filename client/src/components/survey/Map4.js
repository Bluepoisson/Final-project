import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Search } from '../../components/map/Search.js';



export const GoogleReviews = () => {

  const { placeId } = useParams();

  const API_KEY = `process.env.GOOGLE_API_KEY`; 
  const URL_DETAILS = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${API_KEY}`;
  const URL_PLACE_ID = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJbwPMRv2jU0YRqDo208_biaM&fields=name,rating,reviews,formatted_address,formatted_phone_number&key=AIzaSyACJfjPuQmyXP6d7nzc2THb5Vo942xw1JE`
 
  const [reviewDetails, setReviewDetails] = useState({})

  useEffect(() => {
    fetch(URL_DETAILS)
    .then(res => res.json())
    .then(data => {
      setReviewDetails(data)
  });
  }, [URL_DETAILS, placeId]);


  // Ensure we have details to paint. If not, do not paint anything. I could have loading hereIn order to avoid "404 error undefined" in console during fetch.
  if (!reviewDetails.backdrop_path) {
    return null;
  }
  
  return (
    <>
    <Search />
    <article className="details_page">
      <div className="details_background">
        style={{ backgroundImage: 'url()'}}
      </div>

    </article>
    </>
  )
      
  }

