import { useState } from 'react';

function FormCategory() {
  const [message, setMessage] = useState('');
  const messages = ['Hello!', 'Hi', 'Goodbye!'];

  const handleSave = () => {
    setMessage(messages[Math.floor(Math.random()* 3)]);
  };

  const handleCancel = () => {
    setMessage(messages[Math.floor(Math.random()* 3)]);
  };

  const handleChange = () => {

  };

  return (
    <form className="farm-details-form">
      <div className="farm-details-sign">
        <h2 className="farm-details-headline">Farm details</h2>
      </div>
      <label>Farm name</label>
      <p>
        <input className="text-input" type="text" placeholder="Farm 01" value=""/>
      </p>
      <label>Farm notes (optional)</label>
      <p>
        <input className="text-input" type="text" />
      </p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSave}>Save</button>
      <div>{message}</div>
    </form>
  );
}

export default FormCategory;
