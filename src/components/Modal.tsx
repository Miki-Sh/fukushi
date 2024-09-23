interface ModalProps {
  setModalOpen: (modalOpen: boolean) => void;
  contents: JSX.Element
}

const Modal: React.FC<ModalProps> = (props) => {
  const { setModalOpen, contents } = props;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-1 bg-black bg-opacity-50'
        onClick={() => setModalOpen(false)}>
      <div className='h-auto w-96 sm:w-3/4 max-w-3xl p-6 sm:p-10 grid justify-items-center sm:rounded-3xl bg-amber-50 text-red-950'
          onClick={(e) => e.stopPropagation()}>
        { contents }
        <button className='mt-20 mb-3 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white border-4 hover:border-4 border-teal-500 text-white hover:text-teal-500
          transition duration-200 ease-in'
          onClick={() => setModalOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default Modal;