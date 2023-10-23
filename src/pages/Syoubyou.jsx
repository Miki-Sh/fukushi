import { useState } from "react";
import Frame from "/src/components/Frame";
import Accordion from '/src/components/Accordion';
import SyougaiKisonen from "../components/SyougaiKisonen";

const Syoubyou = () => {
  const [ kisoOpen, setKisoOpen ] = useState(false);
  return (
    <>
    <h1 className='m-12 text-center text-indigo-900 text-3xl'>病気やけがで働けなくなったら</h1>
    <p className='m-8 text-red-950 text-xl'>　病気やけがで働けなくなった時、使える制度は大きく分けて3つあります！</p>
    <div className='sm:flex items-center sm:justify-items-center'>
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
      <Frame color='border-lime-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>高額療養費制度</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　高額療養費とは、同じ月にかかった医療費が高額になった場合、限度額を超えた分があとで払い戻される制度です。<br />
          　手術や出産などで、医療費が高額になることが事前にわかっている場合は「限度額適用認定証」の申請をしておくと、
          病院で支払う金額も少なくて済むのでおすすめです！<br />
          　どちらの申請も加入している健康保険組合に行います。  
        </p>
        <h2 className='pb-2 text-left text-indigo-900 text-xl'>70歳未満の人の自己負担限度額</h2>
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
        <h2 className='py-2 text-left text-indigo-900 text-xl'>70〜74歳の人の自己負担限度額</h2>
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
                <td className='py-3'>外来・入院（世帯合計）57,600円<br />外来（個人ごと）18,000円</td>
                <td className='py-3'>44,400円</td>
              </tr>
              <tr>
                <td className='py-3 pl-2'>住民税非課税の人</td>
                <td className='py-3'>外来・入院（世帯合計）24,600円<br />外来（個人ごと）8,000円</td>
              </tr>
              <tr>
                <td className='py-3 pl-2'>世帯全員が住民税非課税の人</td>
                <td className='py-3'>外来・入院（世帯合計）15,000円<br />外来（個人ごと）8,000円</td>
              </tr>
            </tbody>
          </table>
      </> } />

      <Frame color='border-emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>休業補償給付・傷病手当金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　けがや病気で働けなくなった時、月の収入の何割かを保障してくれる制度があります！<br />
          　けがや病気の原因が、仕事（通勤も含む）の場合は、労災保険の<span className='text-pink-800'>休業補償給付</span>、
          それ以外は、健康保険の<span className='text-pink-800'>傷病手当金</span>の申請をしましょう！
        </p>
        <Accordion 
          title='休業補償給付'
          text={
          <>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる条件</h2>
              <ul className='list-disc pl-5'>
                <li>仕事や通勤中のけがや病気で働けない</li>
                <li>そのけがや病気の療養のために休んでいる期間が4日以上（会社の休日も休んだ期間に入れてOK）</li>
                <li>その期間の給料を会社からもらっていない</li>
              </ul>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる金額</h2>
              <div className=' sm:flex items-center sm:justify-items-center'>
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>過去3ヶ月の1日あたりの給料</button> × 
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-green-200'>8割</button> × 
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>もらえる日数</button>
              </div>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる期間</h2>
              <p>　労災認定されたけがや病気が治って、再び仕事ができるようになるまで</p>
              <p>※ 休み始めてから3日間は待機期間といって、休業補償はもらえません。</p>
              <p>※ 1年6ヶ月経っても治らない場合は、休業補償年金に切り替わります。</p>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>誰がどこに申請するの？</h2>
              <p>　本人または会社が労働基準監督署に必要書類を提出します。</p>
              <p>　その後、労働基準監督署が資料や関係者への調査をもとに、支給決定をします。</p>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>退職したらどうなるの？</h2>
              <p>退職後も、再就職や自営業を始めるまでは引き続きもらえます。</p>
          </>
          }
          bg='bg-lime-50'
        />
        <Accordion 
          title= '傷病手当金'
          text={
          <>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる条件</h2>
              <ul className='list-decimal pl-5'>
                <li>会社の健康保険に加入している（国民健康保険は対象外）</li>
                <li>仕事や通勤以外が原因のけがや病気で働けない</li>
                <li>そのけがや病気の療養のために連続4日以上休んでいる（会社の休日や有給休暇も休んだ期間に入れてOK）</li>
                <li>休んでいる期間の給料を会社からもらっていない（給料をもらった日は、傷病手当金がもらえません）</li>
              </ul>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる金額</h2>
            <div className=' sm:flex items-center sm:justify-items-center'>
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>過去1年の月給の平均 ÷ 30日</button> × 
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-green-200'>67％</button> × 
                <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>もらえる日数</button>
              </div>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる期間</h2>
              <p>　通算1年6ヶ月（1年6ヶ月より早く職場復帰したけど、また同じけがや病気で働けなくなった場合は、残りの期間分の傷病手当金を受け取れます！）</p>
              <p>　1年6ヶ月経った後、一定の障害が残っている場合は、障害年金がもらえます。くわしくは、障害年金の項目をチェック！</p>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>誰がどこに申請するの？</h2>
              <p>　本人が加入している健康保険組合に必要書類を提出しましょう。</p>
              <p>　書類には、会社や医師に書いてもらう用紙があるので、それぞれ会社の担当者や主治医に書いてもらいましょう。</p>
            <h2 className='py-2 text-left text-indigo-900 text-xl'>退職したらどうなるの？</h2>
              <ul className='list-disc pl-5'>
                <li>健康保険に加入していた期間が継続1年以上ある</li>
                <li>退職日に傷病手当金をもらっていた。または、もらえる条件の１〜３を満たしていた</li>
              </ul>
              <p>　場合は、退職後も引き続き傷病手当金をもらえます。<br />
              ※ ただし退職後は、途中で働ける状態になった後は、また同じけがや病気で働けなくなっても残りの傷病手当金はもらえなくなります。</p>
          </>
          }
          bg='bg-emerald-50'
        />
      </> } />

      <Frame color='border-sky-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>障害年金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'></p>
        <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる条件</h2>
        <button
            className='mt-6 py-3 px-6 text-center rounded-3xl text-xl font-semibold 
              bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
              transition duration-200 ease-in'
            onClick={() => {setKisoOpen(true)}}
          >障害基礎年金もらえるか診断！</button>
          { kisoOpen && <SyougaiKisonen setKisoOpen={setKisoOpen} /> }
          
        <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる金額</h2>
        <div className=' sm:flex items-center sm:justify-items-center'>
            <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>過去1年の月給の平均 ÷ 30日</button> × 
            <button className='my-1 py-2 px-4 text-center rounded-xl bg-green-200'>67％</button> × 
            <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>もらえる日数</button>
          </div>
        <h2 className='py-2 text-left text-indigo-900 text-xl'>もらえる期間</h2>
          <p>　</p>
          <p>　</p>
        <h2 className='py-2 text-left text-indigo-900 text-xl'>誰がどこに申請するの？</h2>
          <p>　本人が加入している健康保険組合に必要書類を提出しましょう。</p>
          <p>　</p>
      </> } />
    </div>
    </>
  );
};

export default Syoubyou;