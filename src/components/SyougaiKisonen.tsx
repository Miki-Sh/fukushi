import React, { useState } from 'react';
import Modal from 'src/components/Modal';

interface Question {
  q: string | JSX.Element;
  yes?: number;
  no?: number;
}

interface SyougaiKisonenProps {
  setKisonenOpen: (open: boolean) => void;
}

const SyougaiKisonen: React.FC<SyougaiKisonenProps> = (props) => {
  const { setKisonenOpen } = props;
  const [i, setI] = useState<number>(3);
  
  const list: Question[] = [
    {
      'q': '障害基礎年金の受給要件に当てはまります！',
    },
    {
      'q': '障害基礎年金の受給要件に当てはまりません...。',
    },
    {
      'q': '初診から1年6ヶ月経つのと20歳以上になるのを待ちましょう！',
    },
    {
      'q': '初診日に国民年金に加入していましたか？',
      'yes': 6, 
      'no': 4,
    },
    {
      'q': '初診日に60歳以上65歳未満で日本に住んでいましたか？',
      'yes': 6, 
      'no': 5,
    },
    {
      'q': '初診日に20歳未満でしたか？',
      'yes': 8, 
      'no': 1,
    },
    {
      'q': '初診の前々月時点で、加入期間の3分の2以上、保険料を納めていますか？（免除や猶予された月も含めてOKです！）',
      'yes': 8, 
      'no': 7,
    },
    {
      'q': '初診の前々月時点で、過去1年間に保険料を納めていない月はありますか？',
      'yes': 1, 
      'no': 8,
    },
    {
      'q': 'あなたは20歳以上で、初診日から1年6ヶ月経った、または、これ以上治療しても効果が期待できない状態ですか？',
      'yes': 9, 
      'no': 2,
    },
    {
      'q': <p>初診日から1年6ヶ月の日、または、これ以上治療しても効果が期待できない状態になった日の時点で、1級<span className='text-slate-600 text-lg'>（誰かの介助がないと、日常生活のほとんどのことができない）</span>か2級<span className='text-slate-600 text-lg'>（必ずしも他人の助けを借りる必要はなくても、日常生活は極めて困難で、働いて収入を得ることができない）</span>の障害の状態ですか？</p>,
      'yes': 0, 
      'no': 10,
    },
    {
      'q': '65歳前に1級または2級の障害の状態になりましたか？',
      'yes': 0, 
      'no': 11,
    },
    {
      'q': 'もともとある障害と新たな障害をあわせることで65歳前にはじめて1級または2級の障害の状態になりましたか？',
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
            <button className='py-3 px-10 text-center shadow-md rounded-lg text-xl font-semibold 
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
      setModalOpen = { setKisonenOpen }
    />
  );
};

export default SyougaiKisonen;