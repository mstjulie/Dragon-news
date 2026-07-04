'use client';
import Link from 'next/link';
import Image from 'next/image';
import userAvater from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    console.log(user, isPending, 'user')

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

            {isPending ? (
                "Loading"
            ) : user ? (
                <div className='flex items-center gap-2 mt-6'>
                    <h2>Hello, {user.name}</h2>
                    <Image src={userAvater}
                        alt=" User Avater"
                        width={60}
                        height={60}
                    />
                    <button className='btn bg-purple-500 text-white' onClick={async () =>
                        await authClient.signOut()}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className='mt-6'>
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
                </div>
            )}
        </div >
    );
};

export default Navbar;