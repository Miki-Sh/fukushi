import { useState } from "react";

const NenFuyou = (props) => {
  const setNenOpen = props.setNenOpen;
  const [ i, setI] = useState(2);
  const list = [
    {
      "q": "扶養に入れられます！働いている会社の担当者に相談してみましょう！",
    },
    {
      "q": "残念！扶養には入れられなさそうです…",
    },
    {
      "q": "あなたは厚生年金に加入していますか？",
      "yes": 3, 
      "no": 1,
    },
    {
      "q": "扶養に入れたい人は夫か妻（事実婚も含む）ですか？",
      "yes": 4, 
      "no": 1,
    },
    {
      "q": "パートナーの1年間の収入は130万円未満ですか？",
      "yes": 0, 
      "no": 1,
    },
  ]
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex items-center justify-center z-1"
        onClick={() => setNenOpen(false)}>
      <div className=" h-1/2 w-1/2 text-center text-red-950 bg-amber-50"
          onClick={(e) => e.stopPropagation()}>
        <h1 className="mt-14 mb-4 mx-4 text-2xl">{list[i].q}</h1>
        {!(i===0||i===1||i===10) && ( 
          <div className="mx-4">
            <button className=" py-3 px-11 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in"
              onClick={() => setI(list[i].yes)}>はい</button>
            <button className="ml-6 py-3 px-10 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in"
              onClick={() => setI(list[i].no)}>いいえ</button>
          </div>
        )}
        <button className="my-8 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in"
          onClick={() => setNenOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default NenFuyou;