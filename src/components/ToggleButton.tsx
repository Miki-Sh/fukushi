import React from 'react';

interface ToggleButtonProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const { menuOpen, setMenuOpen } = props;
  const spanStyle1 = menuOpen ? 'left-4 translate-y-2 -rotate-45' : 'left-3';
  const spanStyle2 = menuOpen ? 'opacity-0' : '';
  const spanStyle3 = menuOpen ? 'left-4 -translate-y-2 rotate-45' : 'left-3';
  
  return (
    <div onClick={() => setMenuOpen(!menuOpen)} className='relative md:hidden z-40 h-12 w-12 cursor-pointer'>
      <span className={`absolute inline-block ${ spanStyle1 } top-3 h-1 w-1/2 bg-slate-600 rounded-sm transition duration-300 ease-in`}></span>
      <span className={`absolute inline-block ${ spanStyle2 } top-5 left-3 h-1 w-1/2 bg-slate-600 rounded-sm transition duration-300 ease-in`}></span>
      <span className={`absolute inline-block ${ spanStyle3 } top-7 h-1 w-1/2 bg-slate-600 rounded-sm transition duration-300 ease-in`}></span>
    </div>
  );
};

export default ToggleButton;