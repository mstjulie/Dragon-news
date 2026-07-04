'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import swimming from "@/assets/swimming.png";
import img from "@/assets/class.png";
import playground from "@/assets/playground.png";
import fb from "@/assets/fb.png"
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png"
import React from 'react';
import { FaFacebookSquare, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {

    const handlGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data, "data");
    }

    const handlGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

        console.log(data, "data");
    }

    return (
        <div>
            <h2 className="font-bold text-3xl">Login with</h2>

            <div className='flex flex-col gap-3 mt-6'>
                <button className='btn border-bule-500 text-blue-500' onClick={handlGoogleSignin}>
                    <FaGoogle /> Login with google
                </button>
                <button className='btn' onClick={handlGithubSignin}>
                    <FaGithub /> Login with github
                </button>
            </div>

            <div className='flex flex-col gap-2 mt-6'>
                <h2 className='font-bold text-2xl'>Find Us On</h2>
                <div className='flex items-center gap-3 p-4 border border-solidg border-gray-400 text-gray-400 pt-3 pb-3'>
                    <Image
                        src={fb}
                        alt='fb'
                         width={10}
                        height={10}
                        // className="rounded-lg"
                    />
                    Facebook
                </div>
                <div className='flex items-center gap-3 border p-4 border-solidg border-gray-400 text-gray-400 pt-3 pb-3'><Image
                    src={twitter}
                    alt='twitter'
                     width={20}
                     height={20}
                    className="rounded-lg"
                /> Twitter
                </div>
                <div className='flex items-center gap-3 border p-4 border-solidg border-gray-400 text-gray-400 pt-3 pb-3'><Image
                    src={instagram}
                    alt='instagram'
                    width={20}
                    height={20}
                    className="rounded-lg"
                />Instagram
                </div>
            </div>

            <div className='bg-gray-100 flex flex-col mt-6'>
                <h2 className='font-bold text-2xl pt-4 pb-4 righ-3'>Q-Zone</h2>
                <div className='flex flex-col justify-center items-center gap-3'>
                <Image src={swimming} alt='swimming' />
                <Image src={img} alt='img' />
                <Image src={playground} alt='playground' />
                </div>
            </div>

        </div>
    );
};

export default RightSidebar;