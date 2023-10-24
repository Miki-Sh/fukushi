const Modal = (props) => {
  const { setModalOpen, contents } = props;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex items-center justify-center z-1'
        onClick={() => setModalOpen(false)}>
      <div className=' h-auto w-96 sm:w-3/4 max-w-3xl sm:rounded-3xl p-6 sm:p-10 grid justify-items-center text-red-950 bg-amber-50'
          onClick={(e) => e.stopPropagation()}>
        { contents }
        <button className='mt-20 mb-3 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in'
          onClick={() => setModalOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default Modal;