const Modal = (props) => {
  if (props.ModalOpen) {
    return(
      <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50
                      flex items-center justify-center z-1'>
        <div className='z-2 w-1/2 p-4 bg-white'>
          <div className='modal-introduction'>
            <p>モーダル</p>
          </div>
          <button
            className='modal-close-btn'
            onClick={() => props.setModalOpen(false)}>
            とじる
          </button>
        </div>
      </div>
    );
  } else {
      return null;
  }
};

export default Modal;