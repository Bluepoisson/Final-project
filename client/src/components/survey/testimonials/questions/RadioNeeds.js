import React from 'react';

const RadioNeeds = ({ userNeeds, onNeedsChange }) => {

  return (

    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Where your needs met?</h3>
      <label htmlFor="always">Yes</label>
      <input
        id="Yes"
        type="radio"
        name="radio-option"
        checked={userNeeds.includes('Yes')}
        onChange={() => onNeedsChange('Yes')}
      />
      <label htmlFor="somewhat">Mostly</label>
      <input
        id="somewhat"
        type="radio"
        name="radio-option"
        checked={userNeeds.includes('somewhat')}
        onChange={() => onNeedsChange('somewhat')}
      />
      <label htmlFor="nope">Whatever</label>
      <input
        id="nope"
        type="radio"
        name="radio-option"
        checked={userNeeds.includes('nope')}
        onChange={() => onNeedsChange('nope')}
      />


    </div>

  );

};

export default RadioNeeds;