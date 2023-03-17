import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  //the idea is for this function to receive some term from the child component
  //which is in this case FromCategory
  const handleSubmit = (term) => {

  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="gray-modal-background"></div>
      <div className="while-modal-area">
        {children}
        <div style={{marginBottom:"30px"}}></div>
        {actionBar}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

//absolute inset-0 bg-gray-300 opacity-80 <-Tailwind
//absolute inset-40 p-10 bg-white
export default Modal;
