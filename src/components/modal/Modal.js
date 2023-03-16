import ReactDOM from 'react-dom';

function Modal({onClose, children, actionBar}) {

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="gray-modal-background"></div>
      <div className="while-modal-area">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

//absolute inset-0 bg-gray-300 opacity-80 <-Tailwind 
//absolute inset-40 p-10 bg-white
export default Modal;
