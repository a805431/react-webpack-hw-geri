import { useState } from 'react';
import FormCategory from './FormCategory';
import Modal from './modal/Modal';
import Table from './table/Table';

function TableCategory() {
  const tableData = [
    {
      farmId: '11111',
      farmNotes: 'Mock description of Farm 11111',
    },
    {
      farmId: '22222',
      farmNotes: 'Mock description of Farm 22222',
    },
  ];

  const config = [
    {
      label: 'Farm ID',
      render: (farm) => farm.farmId
    },
    {
      label: 'Farm notes',
      render: (farm) => farm.farmNotes
    },
  ];

  //function taht return the value, suitable for use as a key
  const keyFn = (farm) => {
    return farm.farmId;
  };

  const [showModal, setShowModal] = useState(false);

  //this eventhandler will be called anytime a user clicks on a button
  //whenever handleClick is called, showModal state will be updated
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
  //children prop is the jsx inside the Modal tags
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <FormCategory />
    </Modal>
  );
  
  return (
    <>
      <Table data={tableData} config={config} keyFn={keyFn}/>
      <button id="add-btn-table-category" onClick={handleClick}>
        Add New Item
      </button>
      {showModal && modal}
    </>
  );
}

export default TableCategory;
