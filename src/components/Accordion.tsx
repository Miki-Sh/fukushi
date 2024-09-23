const Accordion = (props) => {
  const { bg, title, text } = props;
  return (
    <div className='mx-auto mb-6 max-w-lg text-left'>
      <details className={`group rounded-xl shadow-lg ${bg}`}>
        <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
          { title }
          <div className='text-red-950'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </div>
        </summary>
        <div className='px-6 pb-6 text-red-950'>
          { text }
        </div>
      </details>
    </div>
  );
};

export default Accordion;