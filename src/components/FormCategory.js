import { useState } from 'react';

function FormCategory() {
  //съобщение в резултат от валидацията
  const [message, setMessage] = useState('');

  //стойност на input полето за текст
  const [description, setDescription] = useState('');

  //стойност на input полето за текст
  const [farmId, setFarmId] = useState('12345');

  const handleSave = (event) => {
    event.preventDefault();
    const regexpr = new RegExp('^([^0-9])+$', 'gm');

    if (description === '') {
      setMessage('Value of Farm notes is required!');
    }else {
      if (regexpr.test(description)) {
        setMessage(description);
      } else {
        setMessage('Value of Farm notes should be text!');
      }
    }
  };

  const handleCancel = () => {
    setDescription('');
    setFarmId('');
    setMessage('');
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
      <div>{message}</div>
    </form>
  );
}

export default FormCategory;
