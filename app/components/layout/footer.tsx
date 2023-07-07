import Image from "next/image"
import Link from "next/link"
import lmdhBlack from "../../../public/assets/images/lmdhBlack.svg"
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return (
        <div className="bg-1">
            <div className="container mx-auto">
                <div className="flex justify-center pt-[31px]">
                    <Image className="px-2 border-b-2 pb-[21px] lines" src={lmdhBlack} alt="lmdh logo" width={113.19} height={154.16}/>
                </div>
                <div className="grid sm:grid-cols-5 lg:pt-[36px] lg:pb-[41px] py-8">
                    <div className="col-span-2">
                        <ul className="flex flex-col lg:flex-row lg:justify-between content-center p-2 text-center sm:text-start">
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/faq">faq</Link></li>
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/terms">terms & conditions</Link></li>
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/privacy">privacy policy</Link></li>
                        </ul>
                    </div> 
                    <div></div>
                    <div className="col-span-2">
                        <ul className="flex flex-col lg:flex-row lg:justify-between content-center p-2 text-center sm:text-end lg:text-start">
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/who">who are we</Link></li>
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/where">where to find us</Link></li>
                            <li className="text-[18px] font-Transat my-2 lg:my-auto"><Link href="/partners">our partners</Link></li>
                        </ul>
                    </div>      
                </div>
            </div>
            <div className="relative">
                <hr className="relative border-[1px] lines"/>
                <GoDotFill className="dot"/>
            </div>
            <div className="sm:mx-[32px] py-8">
                <div className="flex justify-between">
                    <div>
                        <p className="font-Moret text-[15px]">All right reserved 2023</p>
                    </div>
                    <div>
                        <p className="font-Moret text-[15px]">By Eight.id</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;