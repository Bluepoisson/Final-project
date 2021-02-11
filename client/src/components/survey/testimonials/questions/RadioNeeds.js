import React, {useState} from 'react';

const RadioNeeds = () => {
  const [needs, setNeeds] = useState('');

  const handleOnSetNeeds = () => {
    needs();
}

  return (
    <fieldset>
    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Where your needs met?</h3>
      <label htmlFor="yes">Yes</label>
      <input
        name="Helpful"
        id="Yes"
        type="radio"
        onChange={e => setNeeds(e.target.value)}
      />
      <label htmlFor="somewhat">Mostly</label>
      <input
        name="Helpful"
        id="somewhat"
        type="radio"
        onChange={e => setNeeds(e.target.value)}
      />
      <label htmlFor="nope">Whatever</label>
      <input
        name="Helpful"
        id="nope"
        type="radio"
        onChange={e => setNeeds(e.target.value)}
      />
    </div>
    </fieldset>

  );

};

export default RadioNeeds;