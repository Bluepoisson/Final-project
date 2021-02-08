import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const ReviewForm = () => {

  const [clinic, setClinic] = useState([]);
  const [waitingTime, setWaitingTime] = useState([]);
  const [needs, setNeeds] = useState('');


  const handleClinicChange = newClinic => {
    setClinic(newClinic)
  }


  const handleNeedsChange = needsValue => {
    needs.includes(needsValue)
    ? setNeeds(needs.filter(item => item !== needsValue))
    : setNeeds([...needs, needsValue]);
  }

  const handleTimeChange = timeValue => {
    waitingTime.includes(timeValue)
    ? setWaitingTime(waitingTime.filter(item => item !== timeValue))
    : setWaitingTime([...waitingTime, timeValue]);
  }
 
  
    const handleSubmit = e => {
      e.preventDefault();
    }
    
    return (
    <>
      <form onSubmit={handleSubmit}>
      <h3 className="question-header" tabIndex="0"> Which clinic are your reviewing?</h3>
       <select aria-label="clinic_name" tabIndex="0"  name="Clinics" required>
          <option value="Vårdcentralen Södervärn">Vårdcentralen Södervärn</option>
          <option value=" Möllevångs Vårdcentral"> Möllevångs Vårdcentral</option>
          <option value=" Vårdcentralen Eden"> Vårdcentralen Eden</option>
          <option value=" Fågelbacken vårdcentral "> Fågelbacken vårdcentral </option>
        </select>
        <h3 className="question-header" tabIndex="0">How did you experience the reception?</h3>
        <select name="Reception">
          <option value="Professional">Professional</option>
          <option value=" Neutral"> Neutral</option>
          <option value=" Uninterested"> Uninterested</option>
        </select>
        <h3 className="question-header" tabIndex="0">Was your appointment-time respected?</h3>
          <input name="Timely" type="radio" value="Yes" />
          <input name="Timely" type="radio" value=" Somewhat" />
          <input name="Timely" type="radio" value=" Nope" />
        <h3 className="question-header" tabIndex="0">Where your needs met?</h3>
          <input name="Helpful" type="radio" value="Yes" />
          <input name="Helpful" type="radio" value=" Somewhat" />
          <input name="Helpful" type="radio" value=" Nope" />
        <h3 className="question-header" tabIndex="0">Would you recommend this clinic?</h3>
        <input name="Recommendation" type="checkbox" value="Yes" required/>
        <input name="Recommendation" type="checkbox" value="Maybe" required/>
        <input name="Recommendation" type="checkbox" value="No" required/>
        <button type="submit" />
        </form>
    </>
    );
  }

  export default ReviewForm;