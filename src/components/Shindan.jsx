const Shindan = (props) => {
  const { setModalOpen, list, } = props;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex items-center justify-center z-1"
        onClick={() => setModalOpen(false)}>
      <div className="h-96 w-96 text-center text-red-950 bg-amber-50"
          onClick={(e) => e.stopPropagation()}>
        <h1 className="mt-14 mb-12 mx-4 text-2xl">{list.q}</h1>
        { list.buttonOpen || (
          <div className="my-8 mx-4">
            <button className=" py-3 px-11 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in"
              onClick={() => {list.q = list[list.yes].q}}>はい</button>
            <button className="ml-6 py-3 px-10 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in"
              onClick={() => {list.q = list[list.no].q}}>いいえ</button>
          </div>
        )}
        <button className="my-8 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in"
          onClick={() => setModalOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default Shindan;