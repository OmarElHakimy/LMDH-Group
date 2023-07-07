'use client'

import Image from "next/image"
import {useRouter} from "next/navigation"
import lmdh from "../../../public/assets/images/lmdh.svg"
import unmark from "../../../public/assets/images/Unmark.png"
import ecran from "../../../public/assets/images/ecran.png"
import tower from "../../../public/assets/images/tower.png"
import trees from "../../../public/assets/images/trees.png"
import hands from "../../../public/assets/images/hands.png"
import longImage from "../../../public/assets/images/longImage.png"
import designedImage from "../../../public/assets/images/designedImage.png"
import Button from "../button/button";
import { GoDotFill } from "react-icons/go";

const Main = () => {
    const router = useRouter();

    return (
        <div className="relative bg-1">
            <div className="container mx-auto">
                <div className="lg:hidden grid grid-cols-2">
                <div className="border-r-2 border-b-2 h-[32px] lg:h-[137px] lines -mr-[1px]"></div>
                </div>
                <div className="block lg:grid lg:grid-cols-2 border-b-2 border-l-2 lg:border-l-0 lines">
                    <div>
                        <div className="hidden lg:block relative bg-1 pt-[137px] lg:border-r-2 lines">
                            <GoDotFill className="hidden lg:block dotTop"/>
                        </div>
                        <div className="lg:relative border-t-0 lg:border-t-2 border-l-0 lg:border-l-2 lines lg:pt-[180px] xl:pl-[143px] lg:pb-[93px] lg:pr-[38px] p-8">
                            <GoDotFill className="hidden lg:block dotLeft"/>
                            <h2 className="font-Transat text-[59px] mb-4">LOREM IPSUM</h2>
                            <h3 className="font-Moret text-[52px]">sit amet</h3>
                            <p className="font-Transat mt-[42px] text-[20px] leading-9">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero…
                            </p>
                        </div>
                    </div>
                    <div className="lg:ml-auto xl:mr-[50px] xl:pb-[105px] lg:pt-[15px] mx-4 py-8">
                        <Image className="mx-auto lg:mx-0" src={unmark} alt="unmark" width={443} height={491}/>
                        <Button classes="bg-black text-[20px] text-white uppercase" mainClasses=" mt-[54px] mx-auto" onClickHandler={()=> router.push('/inTouch')}>Contact</Button>
                    </div>
                </div>
                <div className="lg:relative grid lg:grid-cols-2 lines border-r-2 border-b-2 lg:border-b-0">
                    <GoDotFill className="hidden lg:block dotRight"/>
                    <div className="order-2 lg:order-1 lg:pl-16 lg:pt-40 lg:pb-0 lg:pr-0 lg:ml-3 m-0 mx-auto p-8">
                        <Image src={ecran} alt="snapshots" width={443} height={491}/>
                    </div>
                    <div className="order-1 lg:order-2 lg:pt-36 lg:pr-28 lg:pb-24 xl:pl-0 p-8 lg:border-b-2 lines">
                        <h2 className="font-Transat text-6xl text-end">LOREM IPSUM</h2>
                        <h3 className="font-Moret text-[52px] text-end">sit amet</h3>
                        <p className="font-Transat text-center lg:text-end xl:text-center mt-[42px] text-[20px] leading-9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lines border-l-2 lg:border-l-0">
                    <div className="text-white xl:pt-[200px] xl:pr-[88px] xl:pb-[125px] lg:pl-0 p-8">
                        <Image className="mb-[129px] mx-auto" src={lmdh} alt="logo for lmdh group" />
                        <h2 className="font-MoretBook text-[61px] mb-[74px] text-center xl:text-start">OUR THREE PILLARS</h2>
                        <p className="font-Transat font-bold text-[17px] leading-8">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro…
                        </p>
                    </div>
                    <div className="hidden lg:block relative xl:pl-[216px] xl:pr-[138px] xl:pt-[88px] xl:pb-[125px] p-24 border-l-2 lines">
                        <GoDotFill className="hidden lg:block whiteDot"/> 
                        <Image className="mb-9" src={tower} alt="tower" quality={100} width={453} height={268}/>
                        <Image className="mb-9" src={trees} alt="trees" quality={100} width={453} height={268}/>
                        <Image className="mb-9" src={hands} alt="hands" quality={100} width={453} height={268}/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lines border-t-2 border-r-2 border-b-2 lg:border-0 py-8 lg:py-0 xl">
                    <div className="lg:relative lg:border-r-2 lines lg:pt-0 lg:pr-[60px] lg:pb-0 lg:pl-0 p-8">
                        <GoDotFill className="hidden lg:block dotRight"/>
                        <h3 className="font-Moret text-[52px] mb-[90px]">SIT AMET</h3>
                        <p className="font-Transat text-[20px] leading-9">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:border-b-2 lines">
                        <div className="hidden lg:block order-1 border-t-2 -mr-[2px] lines"></div>
                        <div className="hidden lg:block order-2 border-t-2 border-r-2 lines pt-[60px] ml-[2px] -mr-[2px] -mt-[60px] h-[60px]"></div>
                        <div className="order-3 col-span-2 mx-auto lg:pt-[68px] lg:pb-[44px]">
                            <Image src={longImage} alt="long Image" quality={100} width={341} height={943}/>
                        </div>
                        {/* <div className="order-4 border-r-2 lines -mb-[148px] mt-0">

                        </div> */}
                    </div>
                    <div className="lg:relative lg:border-l-2 lines xl:pl-[60px] xl:pt-[193px] lg:pr-0 lg:pb-0 p-8">
                        <GoDotFill className="hidden lg:block dotLeft"/>
                        <p className="font-Transat text-[20px] leading-9">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 border-l-2 lg:border-l-0 lines">
                    <div className="lg:order-1"></div>
                    <div className="hidden lg:block lg:order-2 h-[148px] border-l-2 lines"></div>
                    <div className="lg:order-3 order-2 xl:pt-[74px] xl:pr-[154px] xl:pb-[73px] lg:pl-0 p-8">
                        <h3 className="font-Moret text-[61px] mb-[59px]">SIT AMET</h3>
                        <p className="font-Transat text-[20px] leading-9">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                    <div className="lg:order-4 order-1 relative xl:pt-[74px] xl:pr-[94px] xl:pl-[71px] xl:pb-[73px] p-8 lg:border-t-2 lg:border-r-2 lg:border-b-2 lines mx-auto lg:-ml-[0px] lg:mr-0">
                        <GoDotFill className="hidden lg:block dotRight"/>
                        <Image src={designedImage} alt="Designed Image" quality={100} width={573.85} height={456.79}/>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="border-t-2 lg:border-t-0 pb-[147px] -mt-[2px] lines">

                    </div>
                    <div className="border-l-2 border-t-0 lg:border-t-2 pb-[147px] mr-[2px] -mt-[2px] lines">

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;