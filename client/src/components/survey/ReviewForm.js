import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './reviewForm.css'

import RadioTime from './testimonials/questions/RadioNeeds'
import RadioRec from './testimonials/questions/RadioRec'
import SelectClinic from './testimonials/questions/RadioRec'
// import RadioTime from './testimonials/questions/RadioTime'

const ReviewForm = () => {

  const [clinic, setClinicInput] = useState([]);
  const [reception, setReception] = useState([]);
  const [time, setTimeInput] = useState('');
  const [helpful, setHelpful] = useState('');
  const [recommendation, setRecInput] = useState('');


  const handleOnClinicInput = (data) => {
    setClinicInput(data);
}

const handleOnTimeInput = (data) => {
      setTimeInput(data);
}

const handleOnRecInput = (data) => {
      setRecInput(data);
}
  
    const handleSubmit = e => {
      e.preventDefault();
    }
    
    return (
    <>
      <form className="review" onSubmit={handleSubmit}>
      {/* <h3 className="question-header" tabIndex="0"> Which clinic are your reviewing?</h3> */}
      {/* <div>
       <select id="Clinics" aria-label="select-menu" tabIndex="0"  
              value={clinic}
              required 
              onChange={(e) => setClinic(e.target.value)} >
          <option value="Clinic Option">Choose your clinic...</option>
          <option value="Vårdcentralen Södervärn">Vårdcentralen Södervärn</option>
          <option value=" Möllevångs Vårdcentral"> Möllevångs Vårdcentral</option>
          <option value=" Vårdcentralen Eden"> Vårdcentralen Eden</option>
          <option value=" Fågelbacken vårdcentral "> Fågelbacken vårdcentral </option>
        </select>
        </div> */}
        <SelectClinic onClinicInput={handleOnClinicInput}/>
        <RadioTime onTimeInput={handleOnTimeInput}/>
        {/* <RadioRec onRecInput={handleOnRecInput}/> */}
        <div>
        <h3 className="question-header" tabIndex="0">How did you experience the reception?</h3>
        <select id="Reception"
                value={reception}
                required
                onChange={(e) => setReception(e.target.value)} >
          <option value="Professional">Professional</option>
          <option value=" Neutral"> Neutral</option>
          <option value=" Uninterested"> Uninterested</option>
        </select>
        </div>
        {/* <div>
        <h3 className="question-header" tabIndex="0">
          Was your appointment-time respected?</h3>
          <input name="Timely" type="radio" 
                  id="yes" 
                  value="Yes" 
                  onChange={(e) => setTimely(e.target.value)}/>
          <input name="Timely" type="radio" value=" Somewhat" />
          <input name="Timely" type="radio" value=" Nope" />
          </div> */}
  
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>
    );
  }

  export default ReviewForm;