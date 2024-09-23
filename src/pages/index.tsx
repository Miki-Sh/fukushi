import MainChoice from 'src/components/MainChoice';

const App = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-24 text-center text-red-950'>
      <div className = 'text-2xl'>
        <h1 className='pb-4'>病気やけが、出産、死亡、老齢、障害、失業などで困った時は...</h1>
        <h1>社会保障を使おう!</h1>
      </div>
      <MainChoice />
    </div>
  );
};

export default App;