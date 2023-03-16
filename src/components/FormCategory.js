import { useState } from 'react';

function FormCategory() {
  //съобщение в резултат от валидацията
  const [message, setMessage] = useState([]);

  //стойност на input полето за текст
  const [description, setDescription] = useState('');

  //стойност на input полето за текст
  const [farmId, setFarmId] = useState('12345');

  const handleSave = (event) => {
    event.preventDefault();
    const regexprDesc = new RegExp('^([^0-9])+$', 'gm');
    const regexprId = new RegExp('^([0-9])+$', 'gm');
    let errorBuffer = [];
    let summaryBuffer = [];

    if (farmId === '') {
      errorBuffer.push('Value of Farm ID is required!');
    } else {
      if (regexprId.test(farmId)) {
        summaryBuffer.push(`Farm ID: ${farmId}`);
      } else {
        errorBuffer.push('Value of Farm ID should be only digits!');
      }
    }

    if (description === '') {
      //setMessage('Value of Farm notes is required!');
      errorBuffer.push('Value of Farm notes is required!');
    } else {
      if (regexprDesc.test(description)) {
        //setMessage(description);
        summaryBuffer.push(`Farm notes: ${description}`);
      } else {
        //setMessage('Value of Farm notes should be text!');
        errorBuffer.push('Value of Farm notes should be text!');
      }
    }

    //if errorBuffer is empty, meaning length === 0
    if (!errorBuffer.length) {
      setMessage(summaryBuffer);
    } else if (errorBuffer.length >= 1) {
      setMessage(errorBuffer);
    }
  };

  const handleCancel = () => {
    setDescription('');
    setFarmId('');
    setMessage([]);
  };

  const handleFarmIdChange = (event) => {
    setFarmId(event.target.value);
    console.log(farmId);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  return (
    <form className="farm-details-form">
      <div className="farm-details-sign">
        <h2 className="farm-details-headline">Farm details</h2>
      </div>
      <label>Farm ID</label>
      <p>
        <input
          className="text-input"
          type="text"
          placeholder={farmId}
          value={farmId}
          onChange={handleFarmIdChange}
        />
      </p>
      <label>Farm notes (optional)</label>
      <p>
        <input
          className="text-input"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSave}>Save</button>
      <div>{message[0]}</div>
      <div>{message[1]}</div>
    </form>
  );
}

export default FormCategory;
