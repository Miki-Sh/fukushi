import MainChoice from 'src/components/MainChoice';

const Main = () => {
  return(
    <div className = "bg-blue-100">
      <div className = "max-w-screen-lg mx-auto py-24">
        <div className = "copy-container">
          <h1>病気やけが、出産、死亡、老齢、障害、失業などで困った時は...<br />
          社会保障を使おう!</h1>
          <h2>↓知りたい内容をクリック</h2>
        </div>
        <MainChoice />
      </div>
    </div>
  );
};

export default Main;