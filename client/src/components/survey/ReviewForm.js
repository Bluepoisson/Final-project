import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './reviewForm.css'

import RadioTime from './testimonials/questions/RadioTime'
import RadioRec from './testimonials/questions/RadioRec'
import RadioNeeds from './testimonials/questions/RadioNeeds'


const ReviewForm = () => {

  const handleSubmit = e => {
    e.preventDefault();
    }
      return (
      <>
     
        <form className="review-container" 
          onSubmit={handleSubmit}>
             <h1>Review your recent health care experience</h1>
              <div className="review">
                <RadioNeeds />
                  <RadioTime />
                    <RadioRec />
                      <button className="btn" type="submit">Submit</button>
              </div>
        </form>
      </>
      );
  }

  export default ReviewForm;