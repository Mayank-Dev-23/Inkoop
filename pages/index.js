import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Mainbody from '../Components/Mainbody'
import Sidebar from '../Components/Sidebar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Inkoop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <main className="container">
<Sidebar />
<Mainbody />
</main>
    </div>
  )
}
