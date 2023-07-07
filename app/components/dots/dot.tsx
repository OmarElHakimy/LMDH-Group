import Image from "next/image"
import image from "../../../public/assets/images/designedImage.png"
import { GoDotFill } from "react-icons/go";

const Paragraph = () => {
    return (
        <div className="container mx-auto border-2 lines p-4 relative">
            <GoDotFill className="dotRight"/>
            <GoDotFill className="dotLeft"/>
            <h1 className="text-6xl font-Moret">TEST</h1>
            <div className="grid grid-cols-2">
                <div>
                    <Image src={image} alt="image" />
                </div>
                <div>
                    <h2 className="">small dots test</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi, placeat facere ullam fuga velit perferendis aliquam quisquam iste numquam nobis accusamus quos! Autem libero beatae mollitia unde, sit neque.</p>
                </div>
            </div>
        </div>
    );
}
export default Paragraph;

