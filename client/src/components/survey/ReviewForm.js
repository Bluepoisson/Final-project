// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import './reviewForm.css'

// const ReviewForm = () => {

//   const [clinic, setClinic] = useState([]);
//   const [reception, setReception] = useState([]);
//   const [timely, setTimely] = useState('');
//   const [helpful, setHelpful] = useState('');
//   const [recommendation, setRecommendation] = useState('');




 
  
//     const handleSubmit = e => {
//       e.preventDefault();
//     }
    
//     return (
//     <>
//       <form className="review" onSubmit={handleSubmit}>
//       <h3 className="question-header" tabIndex="0"> Which clinic are your reviewing?</h3>
//       <div>
//        <select id="Clinics" aria-label="select-menu" tabIndex="0"  
//               value={clinic}
//               required 
//               onChange={(e) => setClinic(e.target.value)} >
//           <option value="Clinic Option">Choose your clinic...</option>
//           <option value="Vårdcentralen Södervärn">Vårdcentralen Södervärn</option>
//           <option value=" Möllevångs Vårdcentral"> Möllevångs Vårdcentral</option>
//           <option value=" Vårdcentralen Eden"> Vårdcentralen Eden</option>
//           <option value=" Fågelbacken vårdcentral "> Fågelbacken vårdcentral </option>
//         </select>
//         </div>
//         <div>
//         <h3 className="question-header" tabIndex="0">How did you experience the reception?</h3>
//         <select id="Reception"
//                 value={reception}
//                 required
//                 onChange={(e) => setReception(e.target.value)} >
//           <option value="Professional">Professional</option>
//           <option value=" Neutral"> Neutral</option>
//           <option value=" Uninterested"> Uninterested</option>
//         </select>
//         </div>
//         <h3 className="question-header" tabIndex="0">Was your appointment-time respected?</h3>
//           <input name="Timely" type="radio" value="Yes" />
//           <input name="Timely" type="radio" value=" Somewhat" />
//           <input name="Timely" type="radio" value=" Nope" />
//         <h3 className="question-header" tabIndex="0">Where your needs met?</h3>
//           <input name="Helpful" type="radio" value="Yes" />
//           <input name="Helpful" type="radio" value=" Somewhat" />
//           <input name="Helpful" type="radio" value=" Nope" />
//         <h3 className="question-header" tabIndex="0">Would you recommend this clinic?</h3>
//         <input name="Recommendation" type="checkbox" value="Yes" required/>
//         <input name="Recommendation" type="checkbox" value="Maybe" required/>
//         <input name="Recommendation" type="checkbox" value="No" required/>
  
//         <button type="submit" />
//         </form>
//     </>
//     );
//   }

//   export default ReviewForm;