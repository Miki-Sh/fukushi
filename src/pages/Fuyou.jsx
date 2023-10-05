import { useState } from "react";
import Image from "next/image";
import ZeiFuyou from "src/components/ZeiFuyou";
import KenpoFuyou from "src/components/KenpoFuyou";
import NenFuyou from "src/components/NenFuyou";

const Fuyou = () => {
  const [ ZeiOpen, setZeiOpen ] = useState(false);
  const [ KenpoOpen, setKenpoOpen ] = useState(false);
  const [ NenOpen, setNenOpen ] = useState(false);

  return (
    <div>
      <div className="my-12 mx-12 text-xl text-red-950">
        <h1 className="pb-8 text-center text-3xl text-indigo-900">扶養（ふよう）って何？</h1>

        <p className="pb-8">　扶養とは、子どもや両親、兄弟など、収入が少ない人を金銭的に支えることを言います。<br />
          扶養している人がいる場合、扶養に入れる手続きをすることで、扶養している人の税金が安くなったり、
          扶養されている人が健康保険料や年金を払わなくてすむなどのメリットがあります。</p>
        <p>　扶養には、「税金の扶養（所得税や住民税など）」と「健康保険の扶養」「年金の扶養」の3種類があります。</p>
      </div>
      <div className="my-12 flex flex-wrap justify-center items-center">
          
        <div className='inline-block lg:w-2/5 mx-8 mb-8 p-8 text-center rounded-3xl border-4 border-teal-500'>
          <h1 className='pt-12 pb-8 px-2 text-3xl text-red-950'>税金の扶養</h1>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　税金に関する扶養では、金銭面で支えている人を扶養に入れると、支えている人が払う税金（所得税や住民税）が安くなります。<br />
            　例えば、会社員の人が、パートで働く奥さんがいたり、田舎に暮らす両親に仕送りをして支えている場合、年末調整で扶養に入れる手続きをすると、所得税や住民税が安くなります。</p>
          <p  className='pb-10 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　税金の扶養に入れられるかどうかは、国が条件を決めています。条件に当てはまるか診断してみましょう！</p>
          <button
            className="py-3 px-6 text-center shadow-md rounded-full text-xl font-semibold 
              bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
              transition duration-200 ease-in"
            onClick={() => {setZeiOpen(true)}}
          >税制上の扶養に入れられるか診断！</button>
          { ZeiOpen && <ZeiFuyou 
            setZeiOpen={setZeiOpen}
            /> }
        </div>
        <div className='inline-block lg:w-2/5 mx-8 mb-8 p-8 text-center rounded-3xl border-4 border-teal-500'>
          <h1 className='pt-12 pb-8 px-2 text-3xl text-red-950'>年金の扶養</h1>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　年金の扶養に入れると、扶養されている人が自分で保険料を払わなくて良くなります。<br />
            　例えば、厚生年金に加入している人が、パートナー（事実婚を含む）を扶養に入れると、パートナーは保険料を自分で払わなくて良くなります。</p>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　年金の扶養に入れられるかどうかは、国が条件を決めています。条件に当てはまるか診断してみましょう！</p>
          <p className='pb-6 pl-3 pr-2 text-left text-red-800 text-lg'>
            ※厚生年金に加入していない人は、パートナーを扶養に入れることができません。</p>
          <button
            className="py-3 px-6 text-center shadow-md rounded-full text-xl font-semibold 
              bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
              transition duration-200 ease-in"
            onClick={() => {setNenOpen(true)}}
          >年金の扶養入れられるか診断！</button>
          { NenOpen && <NenFuyou 
            setNenOpen={setNenOpen}
            /> }
        </div>
        <div className='inline-block lg:w-2/5 mx-8 mb-8 p-8 text-center rounded-3xl border-4 border-teal-500'>
          <h1 className='pt-12 pb-8 px-2 text-3xl text-red-950'>健康保険の扶養</h1>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　健康保険の扶養に入れると、扶養されている人が自分で健康保険料を払わなくて良くなります。<br />
            　例えば、会社の健康保険組合に加入している人が、子どもや、仕送りで支えている両親を扶養に入れると、子どもや両親は健康保険料を自分で払わなくて良くなります。</p>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>
            　扶養に入れられる条件は、加入している健康保険組合によって様々です。詳しくは、自分が加入している健康保険組合に確認してみてください。
            今回は、一番代表的な「全国健康保険協会（協会けんぽ）」の場合で診断してみましょう。（他の健康保険組合に加入している方も参考までに診断してみてください）</p>
          <div className="flex items-center"><p className='pb-6 pl-3 pr-2 text-left text-red-800 text-lg'>
          <Image src='/!.svg' alt="!" height={20} width={20} />自営業の人などが加入している国民健康保険には、そもそも扶養が無いので家族を扶養に入れることができません。</p></div>
          <button
            className="py-3 px-6 text-center shadow-md rounded-full text-xl font-semibold 
              bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
              transition duration-200 ease-in"
            onClick={() => {setKenpoOpen(true)}}
          >健康保険の扶養入れられるか診断！</button>
          { KenpoOpen && <KenpoFuyou 
            setKenpoOpen={setKenpoOpen}
            /> }
        </div>
      </div>
    </div>
  );
};

export default Fuyou;