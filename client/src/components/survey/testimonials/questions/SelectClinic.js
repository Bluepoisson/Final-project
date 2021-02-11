
import React from 'react';


const SelectClinic = ({ clinic, onClinicInput }) => {

  return (
    <div className="question-card">
      <h3 className="question-header" tabIndex="0"> Which clinic are your reviewing?</h3>
      <select aria-label="Select clinic" tabIndex="0"
        value={clinic}
        required
        onChange={(e) => onClinicInput(e.target.value)} 
        >
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
