import { useState } from 'react';
import FormCategory from './FormCategory';
import Modal from './modal/Modal';
import Table from './table/Table';

function TableCategory() {
  let tableData = [
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
      render: (farm) => farm.farmId,
    },
    {
      label: 'Farm notes',
      render: (farm) => farm.farmNotes,
    },
  ];

  //function that returns the value suitable for use as a key
  const keyFn = (farm) => {
    return farm.farmId;
  };

  const [showModal, setShowModal] = useState(false);
  const [tableContents, setTableContents] = useState([...tableData]);

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

  //start here when cutting
  //the idea is for this function to receive some term from the child component
  //which is in this case FromCategory
  const handleSubmit = (term) => {
    // console.log('Current term is: ', term); //test line
    tableData.push(term);
    //console.log(tableData);
    setTableContents([...tableContents, term]);
    handleClose();
  };
  //end here when cutting

  //children prop is the jsx inside the Modal tags
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <FormCategory onSubmit={handleSubmit}/>
    </Modal>
  );

  return (
    <>
      <Table data={tableContents} config={config} keyFn={keyFn} />
      <button id="add-btn-table-category" onClick={handleClick}>
        Add New Item
      </button>
      {showModal && modal}
    </>
  );
}

export default TableCategory;
