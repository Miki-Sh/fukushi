import { useState } from "react";
import Shindan from "src/components/Shindan";

const Fuyou = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="my-12 mx-12 text-xl">
        <h1 className="pb-8 text-center text-3xl text-indigo-900">扶養（ふよう）って何？</h1>

        <p className="pb-8">　扶養とは、子どもや両親、兄弟など、収入が少ない人を金銭的に支えることを言います。<br />
          扶養している人がいる場合、扶養に入れる手続きをすることで、扶養している人の税金が安くなったり、
          扶養されている人が健康保険料や年金を払わなくてすむなどのメリットがあります。</p>
        <p>　扶養には、「税制上の扶養（所得税や住民税など）」と「社会保険上の扶養（健康保険や年金など）」の2種類があります。</p>
        <p>　それぞれ、扶養に入れる条件があります。まずは、扶養に入れられるかどうか、
          診断してみましょう！</p>
      </div>
      <div className="flex justify-center">
      <button
        className="py-3 px-6 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in"
        onClick={() => {setModalOpen(true)}}
      >扶養入れられるか診断！</button>
      { modalOpen && <Shindan setModalOpen={setModalOpen}/> }
      </div>
    </div>
  );
};

export default Fuyou;