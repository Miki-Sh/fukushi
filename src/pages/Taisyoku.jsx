import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TaisyokuRiyu from '/src/components/TaisyokuRiyu';

const Taisyoku = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className='my-12 mx-12 text-red-950 text-xl'>
      <h1 className='pb-8 text-center text-indigo-900 text-3xl'>会社を辞める時は何をすればいいの？</h1>
      <p>　会社を辞める時には、いろいろな手続きがあります。きちんと手続きをすることで、支払う金額が減ったり、お金がもらえたりするので、しっかり知っておきましょう！</p>
    </div>

    <div className='my-12 flex flex-wrap justify-center items-center'>
      <div className='inline-block lg:w-2/5 m-8 p-8 text-center rounded-3xl border-dashed border-8 border-emerald-200'>
        <h1 className='py-8 text-indigo-900 text-3xl'>健康保険</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          会社を辞めた後すぐに就職しない場合は、どの健康保険に入るか選びましょう！</p>
        <div className='mx-auto max-w-lg text-left'>
          <div className='space-y-6'>
            <details className='group rounded-xl bg-cyan-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                今まで入っていた健康保険を継続する（※2年間限定）
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　退職日の前日までに連続で2か月以上会社の健康保険に加入していた人は、今までの健康保険に最長2年間まで継続して加入できます。（任意継続保険）<br />
                　保険料は会社が負担してくれていた分まで自己負担になるので、今まで払っていた額の2倍になってしまいます。<br />
                　しかし、家族を扶養している場合、全員分の国民健康保険料を払うよりもトータルで安くなることがあります。計算してお得な方に加入しましょう！<br />
                　任意継続にする場合、退職日の翌日から20日以内に、加入していた健康保険組合に申し込みしましょう。
              </div>
            </details>
            <details className='group rounded-xl bg-green-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                国民健康保険に入る
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　国民健康保険には扶養が無いので、家族全員分の保険料を支払う必要があります。<br />
                　保険料は所得などから決まります。所得が少ない人や会社の倒産や解雇により退職した人などは保険料が安くなることもあります。
                自分の保険料がいくらになるかは市区町村の役所の窓口で聞いてみましょう。<br />
                　国民健康保険に入る場合は、退職後14日以内に住んでいる市区町村の役所で手続きをしましょう。
              </div>
            </details>
            <details className='group rounded-xl bg-lime-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                家族の扶養に入る
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　会社員の家族がいて、条件に当てはまる場合、家族の扶養に入ることであなたの保険料は支払わなくてよくなります。<br />
                <Link href='/Fuyou'><button className='mt-6 py-2 px-4 text-center shadow-md rounded-3xl text-lg font-semibold 
                 bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
                  transition duration-200 ease-in'>扶養について、くわしくはここをクリック！</button></Link>
              </div>
            </details>
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            3つのうちどれかに入らないと、医療費を一旦全額自己負担しないといけなくなるので注意！</p>
        </div>
      </div>
    </div>

    <div className='my-12 flex flex-wrap justify-center items-center'>
      <div className='inline-block lg:w-2/5 m-8 p-8 text-center rounded-3xl border-dashed border-8 border-emerald-200'>
        <h1 className='py-8 text-indigo-900 text-3xl'>年金</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　60歳未満の人で会社を辞めた後すぐに就職しない場合は国民年金、または、夫か妻の扶養に入りましょう！</p>
        <div className='mx-auto max-w-lg text-left'>
          <div className='space-y-6'>
            <details className='group rounded-xl bg-cyan-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                国民年金に加入
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　会社員の人や扶養に入っている人以外は、国民年金に加入することになります。<br />
                　退職日の翌日から14日以内に、住んでいる市区町村の役所の国民年金窓口で手続きしましょう。<br />
                　産前産後の期間や、障害年金や生活保護を受け取っている人は、保険料が免除になります！また、所得が少ない、ひとり親、失業や災害などで年金を支払うのが難しい人は、
                保険料が安くなる制度もあります。住んでいる市区町村の役所の国民年金窓口で相談・手続きしましょう。
              </div>
            </details>
            <details className='group rounded-xl bg-green-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                夫か妻の扶養に入る
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　厚生年金や共済組合に加入している夫か妻がいて、条件に当てはまる場合、扶養に入ることであなたの保険料は支払わなくてよくなります。<br />
                <Link href='/Fuyou'><button className='mt-6 py-2 px-4 text-center shadow-md rounded-3xl text-lg font-semibold 
                 bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
                  transition duration-200 ease-in'>扶養について、くわしくはここをクリック！</button></Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>

    <div className='my-12 flex flex-wrap justify-center items-center'>
      <div className='inline-block lg:w-2/5 m-8 p-8 text-center rounded-3xl border-dashed border-8 border-emerald-200'>
        <h1 className='py-8 text-indigo-900 text-3xl'>雇用保険</h1>
        <p className='text-left text-red-950 text-lg'>
        　会社で雇用保険に加入していて、条件に当てはまる人は、失業給付を受け取ることができます！<br />
        　金額は、毎月のお給料の50〜80％で、もらっていたお給料が少ない人ほどたくさんもらえます。<br />
        　自分がもらえる金額や日数は、住んでいる場所のハローワークに確認しましょう。</p>
        <div className='flex items-center my-6'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            会社を辞めた日から1年を過ぎると、まだ給付をもらえる日数が残っていても、過ぎた分はもらえなくなってしまいます！なるべく早めに手続きをしましょう！</p>
        </div>
        <button onClick={() => setModalOpen(true)}
          className='mb-6 py-2 px-4 text-center shadow-md rounded-3xl text-lg font-semibold 
            bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-4 hover:border-4 border-teal-500
            transition duration-200 ease-in'>自己都合や特定理由って何？</button>
        { modalOpen && <TaisyokuRiyu setModalOpen={setModalOpen} /> }
        <div className='mx-auto max-w-lg text-left'>
          <div className='space-y-6'>
            <details className='group rounded-xl bg-cyan-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                自己都合で退職した人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                <h1 className='text-indigo-900'>失業給付をもらえる条件</h1>
                <ul className='pl-6 list-disc'>
                  <li>退職前2年間の間に、合計12ヶ月以上（連続じゃなくてもOK）雇用保険に加入していた</li>
                  <li>今すぐ働ける状況</li>
                </ul>
                <h1 className='pt-2 text-indigo-900'>失業給付をもらえる日数</h1>
                <table className='table p-4 bg-white rounded-lg shadow'>
                  <thead>
                    <tr>
                      <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>
                        雇用保険<br />加入期間
                      </th>
                      <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>
                        10年未満
                      </th>
                      <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>
                        10年以上
                      </th>
                      <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>
                        20年以上
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='text-gray-700'>
                      <td className='border-b-2 p-4 dark:border-dark-5'>
                        もらえる日数
                      </td>
                      <td className='border-b-2 p-4 dark:border-dark-5 text-center'>
                        90日
                      </td>
                      <td className='border-b-2 p-4 dark:border-dark-5 text-center'>
                        120日
                      </td>
                      <td className='border-b-2 p-4 dark:border-dark-5 text-center'>
                        150日
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
            <details className='group rounded-xl bg-green-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                会社の倒産・解雇や特定理由で退職した人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                <h1 className='text-indigo-900'>失業給付をもらえる条件</h1>
                <ul className='pl-6 list-disc'>
                  <li>退職前1年間の間に、合計6ヶ月以上（連続じゃなくてもOK）雇用保険に加入していた</li>
                  <li>今すぐ働ける状況</li>
                </ul>
                <h1 className='pt-2 text-indigo-900'>失業給付をもらえる日数</h1>
                <p>　90日〜360日</p>
              </div>
            </details>
            <details className='group rounded-xl bg-lime-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                病気やけが、出産・育児・介護などですぐに働けない人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　自治体から支払い用紙が届くので、それを使って支払いましょう！<br />
                　※会社によっては、来年の5月分までの住民税を最後のお給料や退職金から天引きできることもあるので、会社の担当者の人に相談してみても良いかもしれません。
              </div>
            </details>
          </div>
        </div>

      </div>
    </div>

    <div className='my-12 flex flex-wrap justify-center items-center'>
      <div className='inline-block lg:w-2/5 m-8 p-8 text-center rounded-3xl border-dashed border-8 border-emerald-200'>
        <h1 className='py-8 text-indigo-900 text-3xl'>住民税</h1>
        <p className='pb-6 text-left text-red-950 text-lg'>
          　住民税は昨年の1〜12月分の税金を今年の6月〜来年の5月に後払いする仕組みになっています。退職する月などによって支払い方法が変わるので、注意しましょう！</p>
        <div className='mx-auto max-w-lg text-left'>
          <div className='space-y-6'>
            <details className='group rounded-xl bg-cyan-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                退職後1ヶ月以内に別の会社に就職する人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　退職する会社から「異動届出書」という書類をもらうので、それを転職先の会社に提出すればOKです！<br />
                　住民税は転職先のお給料から、今までと同じように天引きされます。
              </div>
            </details>
            <details className='group rounded-xl bg-green-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                1〜5月に退職する人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　5月までの残りの住民税は、最後のお給料か退職金から天引きされます。<br />
                　6月以降も会社に就職していない場合は、自治体から支払い用紙が届くので、それを使って支払いましょう！
              </div>
            </details>
            <details className='group rounded-xl bg-lime-50 shadow-lg'>
              <summary className='flex cursor-pointer list-none items-center justify-between p-6 text-xl font-medium text-sky-900'>
                6〜12月に退職する人
                <div className='text-red-950'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='block h-5 w-5 transition-all duration-300 group-open:-rotate-90'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </summary>
              <div className='px-6 pb-6 text-red-950'>
                　自治体から支払い用紙が届くので、それを使って支払いましょう！<br />
                　※会社によっては、来年の5月分までの住民税を最後のお給料や退職金から天引きできることもあるので、会社の担当者の人に相談してみても良いかもしれません。
              </div>
            </details>
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <Image src='/!.svg' alt='!' height={20} width={20} />
          <p className='ml-2 text-left text-red-800 text-lg'>
            　昨年よりも収入が大きく減って住民税の支払いが難しい人は、自治体によっては減免制度がある場合があります。
            住んでいる自治体によって条件などが異なるので「○○市　住民税　減免」などインターネットで検索してみましょう！</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Taisyoku;