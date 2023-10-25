const Navigation = () => {

  return (
    <div className='absolute md:hidden right-0 z-10 w-full py-16 px-8 rounded-lg border border-gray-100 bg-lime-50 opacity-95 shadow-lg text-left text-xl'>
      <a href='/Fuyou' className='flex items-center w-full rounded-md py-2 px-3 hover:bg-gray-100 text-gray-700 hover:text-emerald-500 transition duration-300 ease-in'>
        <span className='pr-4 text-emerald-500'>◆</span>扶養って？
      </a>
      <a href='/Taisyoku' className='flex items-center w-full rounded-md py-2 px-3 hover:bg-gray-100 text-gray-700 hover:text-teal-500 transition duration-300 ease-in'>
        <span className='pr-4 text-teal-500'>◆</span>会社を辞める
      </a>
      <a href='/Syoubyou' className='flex items-center w-full rounded-md py-2 px-3 hover:bg-gray-100 text-gray-700 hover:text-cyan-500 transition duration-300 ease-in'>
        <span className='pr-4 text-cyan-500'>◆</span>病気・けがをした
      </a>
    </div>
  );
};

export default Navigation;
