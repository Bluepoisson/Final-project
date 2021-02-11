import React, {useState} from 'react';

const RadioTime = () => {
  const [time, setTime] = useState('');

  const handleOnSetTime = (e) => {
    time(e.target.value);
}

  return (
    <fieldset>
    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Was your appointment time respected?</h3>
      <label htmlFor="yes">Yes</label>
      <input
        name="Timely"
        id="Yes"
        type="radio"
        onChange={e => setTime(e.target.value)}
      />
      <label htmlFor="maybe">Maybe</label>
      <input
        name="Timely"
        id="somewhat"
        type="radio"
        onChange={e => setTime(e.target.value)}
      />
      <label htmlFor="nope">Whatever</label>
      <input
        name="Timely"
        id="Nope"
        type="radio"
        onChange={e => setTime(e.target.value)}
      />
    </div>
    </fieldset>

  );

};

export default RadioTime;