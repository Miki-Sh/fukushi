import Frame from "/src/components/Frame";

const Syoubyou = () => {
  return (
    <>
    <h1 className='m-12 text-center text-indigo-900 text-3xl'>病気やけがで働けなくなったら</h1>
    <p className='m-8 text-red-950 text-xl'>　病気やけがで働けなくなった時、使える制度は大きく分けて3つあります！</p>
    <div className='mx-auto sm:flex items-center sm:justify-items-center'>
      <div className='w-80 lg:w-11/12 m-4 p-4 text-center rounded-xl bg-lime-100'>
        <p className='text-left'>　どんなに医療費がかかっても、一定額以上は国が負担してくれる！</p>
        <h1 className='py-4 text-2xl text-indigo-900'>高額療養費制度</h1>
      </div>
      <div className='w-80 lg:w-11/12 m-4 p-4 text-center rounded-xl bg-emerald-100'>
        <p className='text-left'>　病気やけがで仕事を休んだり、辞めたりした時にお金がもらえる！</p>
        <h1 className='py-4 text-2xl text-indigo-900'>休業補償給付・傷病手当金</h1>
      </div>
      <div className='w-80 lg:w-11/12 m-4 p-4 text-center rounded-xl bg-sky-100'>
        <p className='text-left'>　病気やけがで障がいが残って、長期間働けなくなった時にお金がもらえる！</p>
        <h1 className='py-4 text-2xl text-indigo-900'>障害年金</h1>
      </div>
    </div>
    <div className='my-12 flex flex-wrap items-center justify-center'>
      <Frame color='lime-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>高額療養費制度</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　高額療養費とは、同じ月にかかった医療費が高額になった場合、限度額を超えた分があとで払い戻される制度です。<br />
          　手術や出産などで、医療費が高額になることが事前にわかっている場合は「限度額適用認定証」の申請をしておくと、
          病院で支払う金額も少なくて済むのでおすすめです！<br />
          　どちらの申請も加入している健康保険組合に行います。  
        </p>
        <table className='mx-auto table-auto p-4 bg-white rounded-lg shadow'>
          <thead className='bg-slate-100 font-normal text-indigo-900'>
            <tr>
              <th className='border-b-2 p-4 whitespace-nowrap'>4〜6月の<br />所得の平均</th>
              <th className='border-b-2 p-4 whitespace-nowrap'>自己負担限度額</th>
              <th className='border-b-2 p-4 whitespace-nowrap text-pink-800'>多数該当</th>
            </tr>
          </thead>
          <tbody className='text-red-950 text-center'>
            <tr>
              <td className='py-3 pl-2'>81万円以上</td>
              <td className='py-3'>252,600 + (<span className='text-pink-800'>総医療費</span>-842,000)×1%</td>
              <td className='py-3'>140,100円</td>
            </tr>
            <tr className='bg-slate-100'>
              <td className='py-3 pl-2'>51万5千円以上81万円未満</td>
              <td className='py-3'>167,400 + (<span className='text-pink-800'>総医療費</span>-558,000)×1%</td>
              <td className='py-3'>93,000円</td>
            </tr>
            <tr>
              <td className='py-3 pl-2'>27万以上51万5千円未満</td>
              <td className='py-3'>80,100 + (<span className='text-pink-800'>総医療費</span>-267,000)×1%</td>
              <td className='py-3'>44,400円</td>
            </tr>
            <tr className='bg-slate-100'>
              <td className='py-3 pl-2'>27万円未満</td>
              <td className='py-3'>57,600円</td>
              <td className='py-3'>44,400円</td>
            </tr>
            <tr>
              <td className='py-3 pl-2'>住民税非課税の人など</td>
              <td className='py-3'>35,400円</td>
              <td className='py-3'>24,600円</td>
            </tr>
          </tbody>
          <caption className='caption-bottom'>
            <ul className='pl-6 text-left list-disc'>
              <li><span className='text-lg text-pink-800'>総医療費</span>：保険適用になる診察費用の総額・10割（窓口で払う自己負担と健康保険から支払われる分の合計）</li>
              <li><span className='text-lg text-pink-800'>多数該当</span>：過去1年間に高額療養費制度を利用した月が3ヶ月以上ある場合は、4ヶ月目からは多数該当の自己負担額になります</li>
            </ul>
          </caption>
        </table>
      </> } />
      <Frame color='emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>休業補償給付・傷病手当金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'></p>
      </> } />
      <Frame color='sky-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>障害年金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'></p>
      </> } />
    </div>
    </>
  );
};

export default Syoubyou;