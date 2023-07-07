import Head from 'next/head'
import Form from '../components/getInTouch/form';
import Paragraph from "../components/getInTouch/paragraph";

export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="canonical" href="http://localhost:3000/inTouch" key="canonical"/>
      </Head>

      <Form/>
      <Paragraph/>
    </main>
  )
}
