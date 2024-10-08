import Link from 'next/link';
import Image from 'next/image';

interface ChoiceItem {
  name: string;
  introduction: string;
  href: string;
  img: string;
}

const MainChoice: React.FC = () => {
  const choiceList: ChoiceItem[] = [
    {
      name: '養う家族がいる',
      introduction:'扶養って何？ 誰を扶養に入れられるの？ どうやって扶養に入れるの？',
      href: '/Fuyou',
      img: '/baby.svg'
    },
    {
      name: '仕事を辞める',
      introduction: '退職する時に必要な手続き、もらえるお金',
      href: '/Taisyoku',
      img: '/deskwork.svg'
    },
    {
      name: '病気やけがをした',
      introduction: 'けがや病気で仕事を休んだり、退職したりする時にもらえるお金、そのための手続き',
      href: '/Syoubyou',
      img: '/kyukyubako.svg'
    },
  ];

  return (
    <div className='my-12 flex flex-wrap justify-center items-center'>
      {choiceList.map((items) => (
      <Link href={items.href} key={items.name}>
        <div className='inline-block h-72 w-72 mr-8 mb-8 text-center rounded-3xl border-dashed border-8 border-emerald-200 bg-gradient-to-t from-emerald-100 to-transparent shadow-2xl cursor-pointer'>
          <h1 className='pt-12 px-2 text-3xl'>{items.name}</h1>
          <div className='py-2 flex justify-center'>
          <Image src={items.img} alt='choice' height={50} width={50} />
          </div>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>{items.introduction}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default MainChoice;