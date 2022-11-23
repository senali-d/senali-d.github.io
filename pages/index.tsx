import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senali</title>
        <meta name="description" content="Senali's portfolio" />
        <link rel="icon" href="/senali-logo.png" />
      </Head>
      <div className="h-[100vh] mx-auto">
        <div className="max-w-[1200px] h-[100vh] flex justify-center flex-col items-center">
          <div className="w-1/2">
            <h1 className="text-3xl text-red-300 font-bold underline">
              Hello
            </h1>
            <h1 className="text-3xl text-red-300 font-bold underline">
              I am
            </h1>
            <h1 className="text-3xl text-red-300 font-bold underline">
              Senali
            </h1>
          </div>
          <div className="bg-slate-100">
          </div>
        </div>
      </div>
    </div>
  )
}
