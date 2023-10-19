import Image from 'next/image';
import Link from 'next/link';
import Frame from '/src/components/Frame';
import Accordion from '/src/components/Accordion';

const Taisyoku = () => {
  return (
    <>
    <div className='my-12 mx-12 text-red-950 text-xl'>
      <h1 className='pb-8 text-center text-indigo-900 text-3xl'>会社を辞める時は何をすればいいの？</h1>
      <p>　会社を辞める時には、いろいろな手続きがあります。きちんと手続きをすることで、支払う金額が減ったり、お金がもらえたりするので、しっかり知っておきましょう！</p>
    </div>
    <div className='my-12 flex flex-wrap items-center justify-center'>
      <Frame color='emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>健康保険</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          会社を辞めた後すぐに就職しない場合は、どの健康保険に入るか選びましょう！</p>
        <Accordion 
          List={[{
            title: '今まで入っていた健康保険を継続する（※2年間限定）',
            text: 
              <p>　退職日の前日までに連続で2か月以上会社の健康保険に加入していた人は、今までの健康保険に最長2年間まで継続して加入できます。（任意継続保険）<br />
              　保険料は会社が負担してくれていた分まで自己負担になるので、今まで払っていた額の2倍になってしまいます。<br />
              　しかし、家族を扶養している場合、全員分の国民健康保険料を払うよりもトータルで安くなることがあります。計算してお得な方に加入しましょう！<br />
              　任意継続にする場合、退職日の翌日から20日以内に、加入していた健康保険組合に申し込みしましょう。</p>,
            bg: 'bg-cyan-50'
          },
          {
            title: '国民健康保険に入る',
            text:
              <p>　国民健康保険には扶養が無いので、家族全員分の保険料を支払う必要があります。<br />
              　保険料は所得などから決まります。所得が少ない人や会社の倒産や解雇により退職した人などは保険料が安くなることもあります。自分の保険料がいくらになるかは市区町村の役所の窓口で聞いてみましょう。<br />
              　国民健康保険に入る場合は、退職後14日以内に住んでいる市区町村の役所で手続きをしましょう</p>,
            bg: 'bg-green-50'
          },
          {
            title: '家族の扶養に入る',
            text:
              <div><p>　会社員の家族がいて、条件に当てはまる場合、家族の扶養に入ることであなたの保険料は支払わなくてよくなります。</p>
                <Link href='/Fuyou'><button className='mt-6 py-2 px-4 text-center shadow-md rounded-3xl text-lg font-semibold 
                bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
                  transition duration-200 ease-in'>扶養について、くわしくはここをクリック！</button></Link>
              </div>,
            bg: 'bg-lime-50'
          }]} />
        <div className='flex items-center mt-4'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            3つのうちどれかに入らないと、医療費を一旦全額自己負担しないといけなくなるので注意！</p>
        </div>
        </> } />

      <Frame color='emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>年金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　60歳未満の人で会社を辞めた後すぐに就職しない場合は国民年金、または、夫か妻の扶養に入りましょう！</p>
        <Accordion 
          List={[{
            title: '国民年金に加入',
            text: <p>　会社員の人や扶養に入っている人以外は、国民年金に加入することになります。<br />
              　退職日の翌日から14日以内に、住んでいる市区町村の役所の国民年金窓口で手続きしましょう。<br />
              　産前産後の期間や、障害年金や生活保護を受け取っている人は、保険料が免除になります！また、所得が少ない、ひとり親、失業や災害などで年金を支払うのが難しい人は、
              保険料が安くなる制度もあります。住んでいる市区町村の役所の国民年金窓口で相談・手続きしましょう。</p>,
            bg: 'bg-cyan-50'
          },
          {
            title: '夫か妻の扶養に入る',
            text: 
              <>
                <p>　厚生年金や共済組合に加入している夫か妻がいて、条件に当てはまる場合、扶養に入ることであなたの保険料は支払わなくてよくなります。</p>
                <Link href='/Fuyou'><button className='mt-6 py-2 px-4 text-center shadow-md rounded-3xl text-lg font-semibold 
                  bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
                    transition duration-200 ease-in'>扶養について、くわしくはここをクリック！</button></Link>
              </>,
            bg: 'bg-green-50'
          }]} />
      </> } />  

      <Frame color='emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>雇用保険</h1>
        <p className='text-left text-red-950 text-lg'>
        　会社で雇用保険に加入していて、条件に当てはまる人は、失業給付を受け取ることができます！<br />
        もらえる金額は
        <div className=' sm:flex items-center sm:justify-items-center'>
          <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>1日あたりの給付額</button> × 
          <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>もらえる日数</button> × 
          <button className='my-1 py-2 px-4 text-center rounded-xl bg-lime-200'>45〜80％</button>
        </div>
        　もらっていたお給料が少ない人ほどたくさんもらえます。<br />「失業給付　計算サイト」でネット検索すると目安の金額がわかります！</p>
        <div className='flex items-center my-6'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            会社を辞めた日から1年を過ぎると、まだ給付をもらえる日数が残っていても、過ぎた分はもらえなくなってしまいます！なるべく早めに手続きをしましょう！</p>
        </div>
        <Accordion 
          List={[{
            title: '自己都合や特定理由って何？',
            text:
              <div className='text-left'>
                <h1>　退職する理由によっては、失業給付を早く長くもらえたり、国民健康保険料が軽減されたりします！</h1>
                  <h2 className='pt-4 pb-2 text-xl text-indigo-900'>特定受給資格者</h2>
                    <ul className='ml-5 list-disc'>
                      <li>会社や事業所が倒産・廃止になった</li>
                      <li>事業所の移転で、通勤するのが難しくなった</li>
                      <li>妊娠、育児、介護などを理由に不利益な扱いをされた</li>
                      <li>契約更新予定だったが、急に契約更新されなくなった</li>
                      <li>リストラ勧告をされた</li>
                    </ul>
                  <h2 className='pt-4 pb-2 text-xl text-indigo-900'>特定理由離職者</h2>
                    <ul className='ml-5 list-disc'>
                      <li>体力の不足や、障がい・病気・けがをした</li>
                      <li>妊娠、出産、育児のため辞めることになった</li>
                      <li>家族が亡くなったり、病気やけがなど、家庭の事情が急変した</li>
                      <li>結婚のため遠くへ引っ越すことになった</li>
                      <li>自分やパートナーが遠くへ転勤になった</li>
                    </ul>
                  <p className='pt-4'>　これ以外にも対象になる退職理由があるので、ハローワークで手続きをする際には、退職理由をきちんと伝えて相談してみましょう！</p>                      
              </div>,
            bg: 'bg-red-50 mb-6'
          }]} />
        <Accordion 
          List={[{
            title: '自己都合で退職した人',
            text: 
              <>
                <h1 className='text-indigo-900'>失業給付をもらえる条件</h1>
                  <ul className='pl-6 list-disc'>
                    <li>退職前2年間の間に、合計12ヶ月以上（連続じゃなくてもOK）雇用保険に加入していた</li>
                    <li>今すぐ働ける状況</li>
                  </ul>
                <h1 className='pt-2 text-indigo-900'>失業給付をもらえる日数</h1>
                  <table className='mx-auto p-4 bg-white rounded-lg shadow'>
                    <thead className='bg-slate-50 font-normal text-indigo-900'>
                      <tr>
                        <th className='border-b-2 p-3 whitespace-nowrap'>　雇用保険　<br />　加入期間　</th>
                        <th className='border-b-2 p-3 whitespace-nowrap'>もらえる日数</th>
                      </tr>
                    </thead>
                    <tbody className='text-center text-red-950'>
                      <tr>
                        <td className='border-b-2 py-3'>10年未満</td>
                        <td className='border-b-2 py-3'>90日</td>
                      </tr>
                      <tr>
                        <td className='border-b-2 py-3'>10年以上</td>
                        <td className='border-b-2 py-3'>120日</td>
                      </tr>
                      <tr>
                        <td className='border-b-2 py-3'>20年以上</td>
                        <td className='border-b-2 py-3'>150日</td>
                      </tr>
                    </tbody>
                  </table>
                <h1 className='pt-2 text-indigo-900'>待機期間</h1>
                  <p>　ハローワークで申請をしてから7日間と2ヶ月（過去5年間に2回退職した人や、懲戒解雇の人は3ヶ月）は給付対象外です。それ以降から約1ヶ月ごとに給付されます。</p>
              </>,
            bg: 'bg-cyan-50'
          },
          {
            title: '会社の倒産・解雇や特定理由で退職した人',
            text: 
              <>
                <h1 className='text-indigo-900'>失業給付をもらえる条件</h1>
                  <ul className='pl-6 list-disc'>
                    <li>退職前1年間の間に、合計6ヶ月以上（連続じゃなくてもOK）雇用保険に加入していた</li>
                    <li>今すぐ働ける状況</li>
                  </ul>
                <h1 className='pt-2 text-indigo-900'>失業給付をもらえる日数</h1>
                  <p>　90日〜360日</p>
                <h1 className='pt-2 text-indigo-900'>待機期間</h1>
                  <p>　ハローワークで申請をしてから7日間は給付対象外です。8日目以降から約1ヶ月ごとに給付されます。</p>
              </>,
            bg: 'bg-green-50'
          },
          {
            title: '病気やけが、出産・育児・介護などですぐに働けない人',
            text: 
            <>
              <p>
                　病気やけが、妊娠・出産や不妊治療、育児、介護などの理由ですぐに働けない場合は、「受給期間延長」の手続きをしましょう！
                失業手当は1年でもらえる期限が切れてしまいますが、この手続きをすることで、最長で退職日から4年後まで期限を先延ばしにすることができます！
              </p>
              <p>　退職してから丸30日経ってから、ハローワークで手続きしましょう！</p>
            </>,
            bg: 'bg-lime-50'
          }]} />
      </>} />  

      <Frame color='emerald-200' contents={ <>
        <h1 className='py-8 text-indigo-900 text-3xl'>住民税</h1><p className='pb-6 text-left text-red-950 text-lg'>
          住民税は昨年の1〜12月分の税金を今年の6月〜来年の5月に後払いする仕組みになっています。退職する月などによって支払い方法が変わるので、注意しましょう！</p>
        <Accordion
          List={[{
            title: '退職後1ヶ月以内に別の会社に就職する人',
            text: <p>　退職する会社から「異動届出書」という書類をもらうので、それを転職先の会社に提出すればOKです！<br />
              住民税は転職先のお給料から、今までと同じように天引きされます。</p>,
            bg: 'bg-cyan-50'
          },
          {
            title: '1〜5月に退職する人',
            text: <p>　5月までの残りの住民税は、最後のお給料か退職金から天引きされます。<br />
              6月以降も会社に就職していない場合は、自治体から支払い用紙が届くので、それを使って支払いましょう！</p>,
            bg: 'bg-green-50'
          },
          {
            title: '6〜12月に退職する人',
            text: <p>　自治体から支払い用紙が届くので、それを使って支払いましょう！<br />
              ※会社によっては、来年の5月分までの住民税を最後のお給料や退職金から天引きできることもあるので、会社の担当者の人に相談してみても良いかもしれません。</p>,
            bg: 'bg-lime-50'
          }]} />
        <div className='flex items-center mt-4'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            昨年よりも収入が大きく減って住民税の支払いが難しい人は、自治体によっては減免制度がある場合があります。
            住んでいる自治体によって条件などが異なるので「○○市　住民税　減免」などインターネットで検索してみましょう！</p>
        </div>
      </> } />
    </div>
    </>
  );
};

export default Taisyoku;