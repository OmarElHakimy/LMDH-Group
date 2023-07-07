import Image from "next/image"
import Button from "../button/button"
import lmdhPanel from "../../../public/assets/images/lmdhPanel.png"

const ContactUs = () => {
    return (
        <div className="mb-[25px]">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3">
                    <div className="xl:col-span-2 lg:mr-[40px]">
                        <h2 className="font-Transat text-[91px] tracking-[0.08em] txt-shadow">LOREM IPSUM...</h2>
                        <h3 className="font-MoretBook text-[28px] text-[#e4dfd7] tracking-[0.08em]">At vero eos et accusam et justo duo dolores et ea rebum. </h3>
                        <form>
                            <div className="lg:relative lg:pt-[135px] lg:pb-[100px] py-8">
                                <input type="email" placeholder="Enter your email" name="email" className="border-b-2 lines focus:outline-0 font-Transat placeholder-black text-[28px] w-[100%] pb-[22px] lg:pr-[268px] pr-0" />
                                <div className="lg:absolute lg:right-0 lg:top-0 mt-4 lg:mt-[135px]">
                                    <Button classes="bg-[#E4DFD7] text-black text-[16px]" mainClasses="mx-auto lg:mx-0 pb-[22px]" onClickHandler="">Subscribe to our newsletter</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:block">
                        <Image src={lmdhPanel} alt="lmdh panel" quality={100} width={567} height={464}/>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-Transat font-medium text-[26px] uppercase mx-[32px] text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
            </div>
        </div>
    );
}
export default ContactUs;