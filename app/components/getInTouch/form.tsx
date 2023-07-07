import Button from "../button/button"
import { GoDotFill } from "react-icons/go";

const Form = () => {
    return (
        <div className="bg-1">
            <div className="container mx-auto pb-[96px]">
                <div className="lg:relative border-2 lines lg:pt-[89px] lg:pr-[50px] lg:pl-[34px] p-8">
                    <GoDotFill className="hidden lg:block dotRight"/>
                    <GoDotFill className="hidden lg:block dotLeft"/>
                    <h1 className="font-Transat text-[59px] uppercase text-center">Get in touch</h1>
                    <form className="lg:mt-[100px] lg:mb-[94px] my-8">
                        <div className="mb-[48px]">
                            <input type="email" placeholder="Email" name="email" className="border-b-2 lines focus:outline-0 font-Transat text-[28px] w-[100%] lg:w-[60%] bg-transparent placeholder-black pb-8" />
                        </div>
                        <div className="grid lg:grid-cols-2 mb-[48px]">
                            <div className="lg:pr-[40px] mb-[48px] lg:mb-0">
                                <input type="text" placeholder="Name" name="name" className="border-b-2 lines focus:outline-0 font-Transat text-[28px] w-[100%] bg-transparent placeholder-black pb-8" />
                            </div>
                            <div className="lg:pl-[40px] mb-[48px] lg:mb-0">
                                <input type="text" placeholder="Company" name="name" className="border-b-2 lines focus:outline-0 font-Transat text-[28px] w-[100%] bg-transparent placeholder-black pb-8" />
                            </div>
                        </div>
                        <div className="mb-[48px] lg:mb-0">
                            <textarea rows={12} placeholder="Message" className="border-b-2 lines focus:outline-0 resize-none font-Transat text-[28px] w-[100%] lg:w-[60%] bg-transparent placeholder-black">

                            </textarea>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-2">
                    <div className="border-r-2 lines h-8 lg:h-[96px]">

                    </div>
                    <div className="col-span-2 flex justify-center">
                        <Button classes="bg-[#18391E] text-[20px] text-white" mainClasses="" onClickHandler="">SEND</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form;