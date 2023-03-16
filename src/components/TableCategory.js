import { useState } from 'react';
import Modal from './modal/Modal';

function TableCategory() {
  const [showModal, setShowModal] = useState(false);

  //this eventhandler will be called anytime a user clicks on a button 
  //whenever handleClick is called, showModal state will be updated
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div><button onClick={ handleClose }>Save</button></div>
  //children prop is the jsx inside the Modal tags
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Form Placeholder</p>
  </Modal>

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Farm ID</th>
            <th>Farm notes</th>
          </tr>
          <tr>
            <td>11111</td>
            <td>Mock description of Farm 11111</td>
          </tr>
          <tr>
            <td>22222</td>
            <td>Mock description of Farm 22222</td>
          </tr>
        </tbody>
      </table>
      <button id="add-btn-table-category" onClick={handleClick}>Add New Item</button>
      {showModal && modal}
    </>
  );
}

export default TableCategory;
