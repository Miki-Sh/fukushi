import { useState } from 'react';
import Modal from 'src/components/Modal';

interface KenpoFuyouProps {
  setKenpoOpen: (kenpoOpen: boolean) => void;
}

interface Question {
  q: string | JSX.Element;
  yes?: number;
  no?: number;
}

const KenpoFuyou: React.FC<KenpoFuyouProps> = (props) => {
  const setKenpoOpen = props.setKenpoOpen;
  const [ i, setI] = useState<number>(2);
  const list: Question[] = [
    {
      'q': '扶養に入れられるかもしれません！健康保険証に書いてある、健康保険組合に相談してみましょう！',
    },
    {
      'q': '残念！扶養には入れられなさそうです…',
    },
    {
      'q': '扶養に入れたい人は、75歳以上、または後期高齢者医療の被保険者ですか？',
      'yes': 1, 
      'no': 3,
    },
    {
      'q': '扶養に入れたい人は、あなたの子や孫、パートナー（事実婚も含む）、兄弟、両親、祖父母、曽祖父母ですか？',
      'yes': 5, 
      'no': 4,
    },
    {
      'q': '扶養に入れたい人は、あなたと一緒に住んでいる、三親等の親族ですか？',
      'yes': 6, 
      'no': 1,
    },
    {
      'q': '扶養に入れたい人と、あなたは一緒に住んでいますか？',
      'yes': 6, 
      'no': 7,
    },
    {
      'q': '扶養に入れたい人は、60歳以上、または障害厚生年金をもらっていますか？',
      'yes': 9, 
      'no': 8,
    },
    {
      'q': '扶養に入れたい人は、60歳以上、または障害厚生年金をもらっていますか？',
      'yes': 12, 
      'no': 11,
    },
    {
      'q': '扶養に入れたい人の1年間の収入は130万円未満で、あなたの収入の半分未満ですか？',
      'yes': 0, 
      'no': 10,
    },
    {
      'q': '扶養に入れたい人の1年間の収入は180万円未満で、あなたの収入の半分未満ですか？',
      'yes': 0, 
      'no': 10,
    },
    {
      'q': '残念！扶養に入れられません。ただし、扶養に入れたい人の収入があなたの収入より少ない場合は、家計の状況によっては扶養が認められる場合もあるので、健康保険証に書いてある健康保険組合に相談してみましょう！',
    },
    {
      'q': '扶養に入れたい人の1年間の収入は130万円未満で、あなたが仕送りしている金額より少ないですか？',
      'yes': 0, 
      'no': 1,
    },
    {
      'q': '扶養に入れたい人の1年間の収入は180万円未満で、あなたが仕送りしている金額より少ないですか？',
      'yes': 0, 
      'no': 1,
    }


  ]
  return (
    <Modal 
      contents = { <>
        <h1 className='mt-10 mb-4 text-2xl'>{list[i].q}</h1>
        { list[i].yes !== undefined && list[i].no !== undefined && ( 
          <div>
            <button className=' py-3 px-10 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in'
              onClick={() => setI(list[i].yes!)}>はい</button>
            <button className='ml-6 py-3 px-9 text-center shadow-md rounded-lg text-xl font-semibold 
              bg-pink-600 hover:bg-white text-white hover:text-pink-600 border-4 hover:border-4 border-pink-600
              transition duration-200 ease-in'
              onClick={() => setI(list[i].no!)}>いいえ</button>
          </div>
        )}
       </> }
      setModalOpen = { setKenpoOpen }
    /> 
  );
};

export default KenpoFuyou;