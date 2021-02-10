import React from 'react';

const RadioTime = ({ onTimeInput }) => {

  return (
    <fieldset>
    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Was your appointment time respected?</h3>
      <label htmlFor="yes">Yes</label>
      <input
        name="Recommendation"
        id="Yes"
        type="radio"
        onChange={e => onTimeInput(e.target.value)}
      />
      <label htmlFor="maybe">Maybe</label>
      <input
        name="Recommendation"
        id="somewhat"
        type="radio"
        onChange={e => onTimeInput(e.target.value)}
      />
      <label htmlFor="nope">Whatever</label>
      <input
        name="Recommendation"
        id="Nope"
        type="radio"
        onChange={e => onTimeInput(e.target.value)}
      />
    </div>
    </fieldset>

  );

};

export default RadioTime;