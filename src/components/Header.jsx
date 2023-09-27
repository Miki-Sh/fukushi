import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <div className='flex items-center pl-12 hover:text-orange-500'>
            <Link href="/"><Image src='/HOME.svg' alt="HOME" height={30} width={30} />最初のページに戻る</Link>
        </div>
    );
};

export default Header;