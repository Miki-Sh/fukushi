import { useState } from 'react';

const ZeiFuyou = (props) => {
  const setZeiOpen = props.setZeiOpen;
  const [ i, setI] = useState(2);
  const list = [
    {
      'q': '扶養に入れられます！年末調整や確定申告の時に、忘れず申告しましょう',
    },
    {
      'q': '残念！扶養には入れられません…。※あなたや扶養される人が障がい者の場合など、この診断結果が当てはまらない場合もあるので、もっと詳しく調べてみてくださいね。',
    },
    {
      'q': '扶養される人は16歳以上の親族で、一緒に住んでいますか？　または、仕送りなどで生活を支えていますか？',
      'yes': 3, 
      'no': 1,
    },
    {
      'q': '扶養される人は、配偶者（夫か妻）ですか？',
      'yes': 11, 
      'no': 4,
    },
    {
      'q': '扶養される人の収入は給与だけですか？',
      'yes': 5, 
      'no': 6,
    },
    {
      'q': '扶養される人の給与は103万円以下ですか？',
      'yes': 0, 
      'no': 1,
    },
    {
      'q': '扶養される人の収入は年金だけですか？',
      'yes': 7, 
      'no': 10,
    },
    {
      'q': '扶養される人は65歳以上ですか？',
      'yes': 8, 
      'no': 9,
    },
    {
      'q': '扶養される人の年金は158万円以下ですか？',
      'yes': 0, 
      'no': 1,
    },
    {
      'q': '扶養される人の年金は108万円以下ですか？',
      'yes': 0, 
      'no': 1,
    },
    {
      'q': '扶養される人の課税所得（収入の合計 から 基礎控除などの控除額の合計 を引いた後の金額）が48万円以下ですか？',
      'yes': 0, 
      'no': 1,
    },
    {
      'q': '配偶者の課税所得は48万円以下（給与収入のみの場合は年収103万円以下）ですか？',
      'yes': 0, 
      'no': 12,
    },
    {
      'q': 'あなたの課税所得は1000万円以下（給与収入のみの場合は年収1,195万円以下）ですか？',
      'yes': 13, 
      'no': 1,
    },
    {
      'q': '配偶者の課税所得は133万円以下（給与収入のみの場合は年収201万円以下）ですか？',
      'yes': 0, 
      'no': 1,
    }
  ];

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex items-center justify-center z-1'
        onClick={() => setZeiOpen(false)}>
      <div className='h-[430px] w-96 p-4 text-center text-red-950 bg-amber-50'
          onClick={(e) => e.stopPropagation()}>
        <h1 className='mt-10 mb-4 text-2xl'>{list[i].q}</h1>
        {!(i===0||i===1) && ( 
          <div>
            <button className=' py-3 px-11 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in'
              onClick={() => setI(list[i].yes)}>はい</button>
            <button className='ml-6 py-3 px-10 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in'
              onClick={() => setI(list[i].no)}>いいえ</button>
          </div>
        )}
        <button className='my-8 py-3 px-10 text-center shadow-md rounded-full text-xl font-semibold 
          bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
          transition duration-200 ease-in'
          onClick={() => setZeiOpen(false)}>
          とじる</button>
      </div>
    </div>
  );
};

export default ZeiFuyou;