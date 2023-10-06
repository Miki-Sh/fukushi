import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 h-12 w-full flex items-center pl-2 bg-amber-50 border-dashed border-b-8 border-orange-200 text-red-950 ">
      <Link href="/" className="flex items-center hover:text-orange-500">
        <Image src="/HOME.svg" alt="HOME" height={30} width={30} className="mr-2 hover:fill-orange-500" />
        最初のページに戻る
      </Link>
    </div>
  );
};

export default Header;