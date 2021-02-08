
import React from 'react';


const SelectClinic = ({ clinic, onClinicChange }) => {

  return (
    <div className="question-card">
      <h3 className="question-header" tabIndex="0"> Which clinic are your reviewing?</h3>
      <select aria-label="clinic_name" tabIndex="0"
        value={clinic}
        onChange={e => onClinicChange(e.target.value)} >
        <option value="clinic-option" name="clinic" >Choose clinic</option>
        <option value="sodervarn" name="clinic" >Vårdcentralen Södervärn</option>
        <option value="mollevang" name="clinic" >Möllevångs Vårdcentral</option>
        <option value="eden" name="clinic">Vårdcentralen Eden</option>
        <option value="fagelbacken" name="clinic">Fågelbacken vårdcentral</option>
        <option value="capio_city" name="clinic">Capio City Clinic Center</option>
      </select>
    </div>

  );
};

export default SelectClinic;

import React from 'react';
import { useForm } from 'react-hook-form';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const handleSubmit = e => {
    e.preventDefault();
  }
  
  return (
  <>
    <form onSubmit={handleSubmit}>
      <select name="Clinics" required>
        <option value="Vårdcentralen Södervärn">Vårdcentralen Södervärn</option>
        <option value=" Möllevångs Vårdcentral"> Möllevångs Vårdcentral</option>
        <option value=" Vårdcentralen Eden"> Vårdcentralen Eden</option>
        <option value=" Fågelbacken vårdcentral "> Fågelbacken vårdcentral </option>
      </select>
      <select name="Reception">
        <option value="Professional">Professional</option>
        <option value=" Neutral"> Neutral</option>
        <option value=" Uninterested"> Uninterested</option>
      </select>

      <input name="Timely" type="radio" value="Yes, Somewhat, Nope" />
      <input type="checkbox" placeholder="Helpful" name="Helpful" />

      <input name="Recommendation" type="radio" value="Yes, Maybe, No" required/>


      <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>
      <input type="submit" />
      </form>
  </>
  );
}