import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senali</title>
        <meta name="description" content="Senali's portfolio" />
        <link rel="icon" href="/senali-logo.png" />
      </Head>
      <h1 className="text-3xl text-red-300 font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
