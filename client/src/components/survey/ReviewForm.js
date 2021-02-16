import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


import './reviewForm.css';


const Review = () => {
  
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const [reception, setReception] = useState('');
  const [time, setTime] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [clinic, setClinic] = useState('');
  const [clinicList, setClinicList] = useState('');
 

  const getClinic = () => {
    const CLINIC_URL = `http://localhost:8080/clinics/`; 

    fetch(CLINIC_URL, { 
      method: 'GET',
      headers: { "Content-Type": "application/json"}
    })
      .then(res => res.json())
      .then(data => setClinicList(data))
      .catch(err => console.log("Caught an error:", err))
  } 

  useEffect(() => {
    getClinic(clinicList);
  }, [clinicList]);

  const postReview = () => {
    const REVIEW_URL = `http://localhost:8080/reviews/${clinic}`

 
        fetch(REVIEW_URL, {
          method: 'POST',
          body: JSON.stringify({ reception, time, recommendation }),
          headers: { 'Content-Type': 'application/json', Authorization: accessToken},
        })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Posting review failed');
          }
          else {
            return res.json();
          }
        })
            .catch(err => console.log("Caught an error:", err)) 
        } 
 

    const handleSubmit = (e) => {
      e.preventDefault();
      postReview();
    }

      return (
        <>
   
        <form className="review-container" 
              onSubmit={handleSubmit}
              >
              <h1 className="review-title">Review your recent health care experience</h1>
              <fieldset>
                <div className="question-card">
                  <h3 className="question-header" tabIndex="0">Select clinic</h3>
                      <select
                        className="select-input"
                        name="clinicId"
                        id="clinicId"
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        required
                        >
                         { clinicList && clinicList.map(clinic => (
                          <option 
                            key={clinic._id}
                            value={clinic._id}>
                            {clinic.name}
                            </option>
                         )) 
                         };
                         
                      </select>
                    </div>
                </fieldset>
              <fieldset>
                <div className="question-card">
                  <h3 className="question-header" tabIndex="0">How did you experience the reception?</h3>
                      <select
                        className="select-input"
                        value={reception}
                        onChange={(e) => setReception(e.target.value)}
                        required
                        >
                          <option value="">Select</option>
                          <option value="Professional">Professional</option>
                          <option value="Neutral">Neutral</option>
                          <option value="Poor">Poor</option>
                      </select>
                    </div>
                </fieldset>

                <fieldset>
                <div className="question-card">
                  <h3 className="question-header" tabIndex="0">Was your appointment time respected?</h3>
                    <select
                        className="select-input"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="Somewhat">Somewhat</option>
                          <option value="Nope">Nope</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                <div className="question-card">
                  <h3 className="question-header" tabIndex="0">Would you recommend this clinic?</h3>
                    <select
                        className="select-input"
                        value={recommendation}
                        onChange={(e) => setRecommendation(e.target.value)}
                        required
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="Maybe">Maybe</option>
                          <option value="No">Nope</option>
                        </select>
                    </div>
                  </fieldset>
                    <input className="submit-btn" type="submit" value="Submit"/>
          </form>
        </>
    );
  }

  export default Review;