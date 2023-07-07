import Image from 'next/image'
import cover from "../../../public/assets/images/test-lmdh.png"
import logo from "../../../public/assets/images/cover.svg"

const Header = () => {
    return (
        <div className='relative'>
          <Image src={cover} className='relative' alt="page cover" placeholder="blur" quality={100} sizes="100vw" style={{objectFit: 'cover', width: '100%', height: 'auto' }}/>
          <Image src={logo} className='hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 top-3/4 -translate-y-3/4' alt="cover logo"/>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 border-r-2 lines h-[53px]'></div>
        </div>
    );
}
export default Header;