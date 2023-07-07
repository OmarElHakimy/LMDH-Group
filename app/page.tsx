import Head from 'next/head'
import Main from './components/Home/main'
import ContactUs from './components/Home/contactUs'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
      <main className="">
        <Head>
          <link rel="canonical" href="http://localhost:3000/" key="canonical"/>
        </Head>
      
        <Main/>
        <div className="h-[153px] bg-[#f5f5f5] blur-[29px]"></div>
        <ContactUs/>
        
      </main>
  )
}
