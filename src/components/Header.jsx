import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ToggleButton from 'src/components/ToggleButton';
import Navigation from 'src/components/Navigation';

const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  console.log(menuOpen);
  return (
    <div className='flex justify-between sticky top-0 h-12 w-full pl-2 bg-amber-50 border-dashed border-b-8 border-orange-200 text-red-950 '>
      <Link href='/' className='flex items-center hover:text-orange-500'>
        <Image src='/HOME.svg' alt='HOME' height={30} width={30} className='mr-2 hover:fill-orange-500' />
        最初のページに戻る
      </Link>
      <ToggleButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      { menuOpen && <Navigation setMenuOpen={setMenuOpen} /> }
      <div className='hidden md:flex right-0 items-center justify-items-end text-lg'>
        <Link href='/Fuyou' className='px-6 hover:text-emerald-500 transition duration-300 ease-in'>
          <span className='pr-2 text-emerald-500'>◆</span>扶養って？
        </Link>
        <Link href='/Fuyou' className='px-6 hover:text-teal-500 transition duration-300 ease-in'>
          <span className='pr-2 text-teal-500'>◆</span>会社を辞める
        </Link>
        <Link href='/Fuyou' className='px-6 hover:text-cyan-500 transition duration-300 ease-in'>
          <span className='pr-2 text-cyan-500'>◆</span>病気・けがをした
        </Link>
      </div>
    </div>
  );
};

export default Header;