import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senali</title>
        <meta name="description" content="Senali's portfolio" />
        <link rel="icon" href="/senali-logo.png" />
      </Head>
      <div className="h-[100vh] overflow-x-hidden">
        <div className="p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto h-[100vh] flex justify-center flex-row items-center">
          <div className="p-5 sm:p-0 w-full absolute sm:relative md:w-1/3 lg:w-1/4 z-10">
            <h1 className="text-6xl sm:text-8xl text-white font-bold">
              Hello,
            </h1>
            <h1 className="text-6xl sm:text-8xl text-red-600 font-bold">
              I am
            </h1>
            <h1 className="text-6xl sm:text-8xl text-red-600 font-bold">
              Senali
            </h1>
          </div>
          <div className="relative left-[50vw] sm:left-0 bg-slate-100 z-0">
            <Image width={500} height={500} src="/home-banner.svg" alt="Senali" />
          </div>
        </div>
      </div>
    </div>
  )
}
