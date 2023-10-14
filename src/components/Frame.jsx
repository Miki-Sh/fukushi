const Frame = (props) => {
  return (
    <div className='inline-block lg:w-2/5 m-2 sm:m-8 py-8 px-4 sm:p-8 text-center rounded-3xl border-dashed border-8 border-emerald-200'>
        { props.contents }
    </div>
  );
};

export default Frame;