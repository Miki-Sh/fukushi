import { useState } from "react";

const TaisyokuRiyu = (props) => {
  const setModalOpen = props.setModalOpen;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex items-center justify-center z-1"
        onClick={() => setModalOpen(false)}>
      <div className=" h-96 w-96 p-4 text-center text-red-950 bg-amber-50"
          onClick={(e) => e.stopPropagation()}>
        <h1>特定理由</h1>
        <button className="my-8 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in"
          onClick={() => setModalOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default TaisyokuRiyu;