import React, { useState } from 'react';
import questionnaireData from './questionnaire.json';

const Questionnaire = () => {
  const [responses, setResponses] = useState({});

  const handleChange = (linkId, value) => {
    setResponses({ ...responses, [linkId]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted responses:', responses);
    // Add submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      {questionnaireData.item.map((item) => (
        <div key={item.linkId}>
          <label htmlFor={item.linkId}>{item.text}</label>
          {item.type === 'boolean' ? (
            <select
              id={item.linkId}
              onChange={(e) => handleChange(item.linkId, e.target.value)}
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          ) : (
            <input
              id={item.linkId}
              type={item.type}
              onChange={(e) => handleChange(item.linkId, e.target.value)}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Questionnaire;
