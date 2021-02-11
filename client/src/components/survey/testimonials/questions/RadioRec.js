import React from 'react';

const RadioRec = () => {

  return (
    <fieldset>
    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Would you recommend this clinic?</h3>
      <label htmlFor="yes">Yes</label>
      <input
        name="Recommendation"
        id="Yes"
        type="radio"
        onChange={e => (e.target.value)}
      />
      <label htmlFor="maybe">Maybe</label>
      <input
        name="Recommendation"
        id="maybe"
        type="radio"
        onChange={e => (e.target.value)}
      />
      <label htmlFor="nope">Whatever</label>
      <input
        name="Recommendation"
        id="nope"
        type="radio"
        onChange={e => (e.target.value)}
      />
    </div>
    </fieldset>

  );

};

export default RadioRec;