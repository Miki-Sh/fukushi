import Link from "next/link";

const MainChoice = () => {
  const ChoiceList = [
    {
      name: "養う家族がいる",
      introduction:"扶養って何？ 誰を扶養に入れられるの？ どうやって扶養に入れるの？",
      href: "/Fuyou"
    },
    {
      name: "仕事を辞める",
      introduction: "退職する時に必要な手続き、もらえるお金",
      href: "/Taisyoku"
    },
    {
      name: "病気になった",
      introduction: "病気で仕事を休んだり、退職したりする時にもらえるお金、そのための手続き",
      href: "/Syoubyou"
    },
  ];

  return (
    <div className="my-12">
      {ChoiceList.map((items) => (
      <Link href={items.href} key={items.name}>
        <div className='inline-block w-1/4 mr-6 text-center rounded-3xl bg-gradient-to-t from-emerald-100 via-emerald-50 to-teal-100 shadow-2xl cursor-pointer'>
          <div className='rounded py-8 px-1 text-3xl'>
            <h1>{items.name}</h1>
          </div>
          <p className='pb-6 pl-3 pr-2 text-left text-sky-800 text-lg'>{items.introduction}</p>
        </div>
      </Link>
      ))}
    </div>
  );
  
};

export default MainChoice;