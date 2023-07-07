'use client'

import Link from 'next/link';
import Image from "next/image"
import {useState} from"react"
import { CiMenuBurger } from "react-icons/ci";
import lmdhLogo from "../../../public/assets/images/lmdhLogo.svg"

const Nav = () => {

    const [isDisplay, setIsDisplay] = useState<boolean>(false)

    const onDisplayHandler = () => {
        if(isDisplay){
            setIsDisplay(false);
        }else{
            setIsDisplay(true);
        }
    }

    return (
        <div className="bg-1">
            <ul className="hidden lg:flex flex-row justify-evenly content-center">
                <li className="font-Moret font-normal my-auto"><Link href="/presentation">PRESENTATION</Link></li>
                <li className="font-Moret font-normal my-auto"><Link href="/group">GROUP</Link></li>
                <li className='border-l-2 lines '></li>
                <li className='py-2.5'>
                    <Link href="/">
                        <Image src={lmdhLogo} alt="lmdh logo for nav"/>
                    </Link>
                </li>
                <li className='border-l-2 lines'></li>
                <li className="font-Moret font-normal my-auto"><Link href="/mission">OUR MISSION</Link></li>
                <li className="font-Moret font-normal my-auto"><Link href="/contact">CONTACT</Link></li>
            </ul>
            <div className=' lg:hidden grid grid-cols-3'>
                <div></div>
                <div className='mx-auto py-2.5'>
                    <Link href="/">
                        <Image src={lmdhLogo} alt="lmdh logo for nav"/>
                    </Link>
                </div>
                <div className='ml-auto my-auto pr-2 content-center'>
                    <CiMenuBurger className='flex justify-end text-2xl hover:cursor-pointer' onClick={() => onDisplayHandler()}/>
                </div>
            </div>
            {
                isDisplay 
                ?
                <div className="lg:hidden">
                    <ul className="flex flex-col">
                        <li className="font-Moret font-normal my-2 mx-auto"><Link href="/presentation">PRESENTATION</Link></li>
                        <li className="font-Moret font-normal my-2 mx-auto"><Link href="/group">GROUP</Link></li>
                        <li className="font-Moret font-normal my-2 mx-auto"><Link href="/mission">OUR MISSION</Link></li>
                        <li className="font-Moret font-normal my-2 mx-auto"><Link href="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                :
                <div></div>
            }
        </div>
    );
}
export default Nav;