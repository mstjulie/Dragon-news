import Link from 'next/link';
import Image from 'next/image';
import userAvater from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-gray-700'>
                <li>
                  <NavLink href={"/"}>Home</NavLink>
                </li>

                <li>
                    <NavLink href={"/about"}>About</NavLink>
                </li>

                <li>
                   <NavLink href={"/career"}>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-2 mt-6'>
                <Image src={userAvater} alt=" User Avater" width={60} height={60} />
                <button className='btn bg-purple-500 text-white' >
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;