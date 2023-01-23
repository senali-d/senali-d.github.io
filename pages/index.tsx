import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/common/header'
import { FiGithub, FiExternalLink, FiTwitter } from 'react-icons/fi'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senali</title>
        <meta name="description" content="Senali's portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <>
        <div className="h-[100vh] overflow-x-hidden">
          <Header />
          <div className="p-5 max-w-[1200px] mx-auto h-[100vh] flex justify-center flex-col md:flex-row items-center">
            <div className="mt-[80px] w-full sm:relative md:w-2/3 z-10">
              <p className="text-lg text-[#64ffda] font-bold pb-5">
                Hi, my name is
              </p>
              <h1 className="text-5xl sm:text-8xl text-[#ccd6f6] font-bold">
                Senali Dilumika.
              </h1>
              <p className="text-xl text-[#8892b0] pt-4 pb-5 md:pb-0">Bridging the gap between design and technology</p>
            </div>
            <div className="hidden md:flex md:mt-[80px] left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] rounded-full">
              <Image width={400} height={400} src="/home-banner.svg" className="bg-[#112240] rounded-full p-3" alt="Senali" />
            </div>
          </div>
        </div>
        {/* About Us */}
        <div id="about"></div>
        <div className="md:mt-20 p-5 max-w-[1200px] mx-auto flex justify-center flex-col md:flex-row">
          <div className="flex w-fit m-auto md:ml-0 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] rounded-full order-1 md:order-none">
            <Image width="400" height="400" src="/about-me.png" className="bg-[#112240] rounded-full p-3" alt="Senali" />
          </div>
          <div className="w-full pb-10 md:pb-0 md:pl-5 md:w-2/3 order-0 md:order-none">
            <h2 className="text-4xl text-center md:text-left sm:text-6xl text-[#ccd6f6] font-bold">
              About Me.
            </h2>
            <p className="text-lg text-[#8892b0] pt-4">
              Hello, I am very ambitious passionate front-end developer who loves coding.
              I began my tech career in 2019 and have since gained experience in a variety of technologies, including Typescript, JavaScript, React, WordPress, NextJS, Node, and Python.
              <br/>
              <br/>
              I am always looking to expand my skills and knowledge, and I am currently interested in exploring the more about python.
              <br/>
              <br/>
              Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support others.
            </p>
          </div>
        </div>
        {/* Work */}
        <div id="work"></div>
        <div className="lg:mt-20 max-w-[1200px] mx-auto p-5 flex justify-center flex-col">
          <div className="w-full">
            <h2 className="text-4xl text-center md:text-left sm:text-6xl text-[#ccd6f6] font-bold">
              My Works.
            </h2>
          </div>

          <div className="flex justify-between flex-col md:flex-row pt-10">
            <div className="w-full pb-10 md:pb-0 md:pr-5 md:w-2/3">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                FitChain.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was completed as part of the a Major League Hacking (MLH) Hackerthon. 
                <br/>
                Experience fitness and wellness like never before with FitChain!
                This decentralized application makes setting and achieving your weekly goals not only fun, but also rewarding. 
                As you reach your goals, you will be able to unlock cool and unique NFTs as a reward for your hard work.
              </p>
              <div className="text-[#64ffda] flex flex-wrap pt-8">
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Nextjs</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Typescript</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Solidity</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Thirdweb</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl">Connectkit</span>
              </div>
              <div className="pt-5 flex">
                <Link href="https://github.com/neel-ds/fitChain" target="_blank">
                  <FiGithub color="#64ffda" size="20" className="mr-2" />
                </Link>
                <Link href="https://fitchain.vercel.app" target="_blank">
                  <FiExternalLink color="#64ffda" size="20" />
                </Link>
              </div>
            </div>
            <div className="w-fit h-[100%] mx-auto md:mr-0 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda]">
              <Image width="500" height="500" src="/fit-chain.jpg" className="bg-[#112240] p-3" alt="Senali" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row pt-10">
            <div className="w-fit h-[100%] mx-auto md:ml-0 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] order-1 md:order-none">
              <Image width="500" height="500" src="/log-chain.png" className="bg-[#112240] p-3" alt="Senali" />
            </div>
            <div className="w-full pb-10 md:pb-0 md:pl-5 md:w-2/3 order-0 md:order-none">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                LogChain.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was completed as part of the a SheBuilds Hackerthon. 
                <br/>
                LogChain is a decentralized provenance application that tracks the ownership and movement of a product or asset through its life cycle. 
                It records each event or transaction that occurs, creating an immutable record of the history of the product or asset.
              </p>
              <div className="text-[#64ffda] flex flex-wrap pt-8">
              <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Nextjs</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Typescript</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Tailwind CSS</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Solidity</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Polygon</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl">Connectkit</span>
              </div>
              <div className="pt-5 flex">
                <Link href="https://github.com/vrajdesai78/LogChain" target="_blank">
                  <FiGithub color="#64ffda" size="20" className="mr-2" />
                </Link>
                <Link href="https://log-chain.vercel.app" target="_blank">
                  <FiExternalLink color="#64ffda" size="20" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row pt-10">
            <div className="w-full pb-10 md:pb-0 md:pr-5 md:w-2/3">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                Travel Mate.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was completed as part of the a StepZen GraphQL Challenge Hackathon organized by StepZen GraphQL Challenge. 
                <br/>
                <br/>
                Projects focus on building web applications for travel community, to build a community for travelers, travel enthusiasts and show the beauty of the world.
              </p>
              <div className="text-[#64ffda] flex flex-wrap pt-8">
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">React</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Graphql</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Postgresql</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl">Tailwind css</span>
              </div>
              <div className="pt-5 flex">
                <Link href="https://github.com/senali-d/travel-mate" target="_blank">
                  <FiGithub color="#64ffda" size="20" className="mr-2" />
                </Link>
                <Link href="https://travel-mate-tau.vercel.app" target="_blank">
                  <FiExternalLink color="#64ffda" size="20" />
                </Link>
              </div>
            </div>
            <div className="w-fit h-[100%] mx-auto md:mr-0 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda]">
              <Image width="500" height="500" src="/travel-mate.png" className="bg-[#112240] p-3" alt="Senali" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row pt-10">
            <div className="w-fit h-[100%] mx-auto md:ml-0 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] order-1 md:order-none">
              <Image width="500" height="500" src="/tesla-clone.png" className="bg-[#112240] p-3" alt="Senali" />
            </div>
            <div className="w-full pb-10 md:pb-0 md:pl-5 md:w-2/3 order-0 md:order-none">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                Tesla Clone.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was clone of the ui of tesla web site. 
                <br/>
              </p>
              <div className="text-[#64ffda] flex flex-wrap pt-8">
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">React</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">Styled Components</span>
                <span className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl">MUI</span>
              </div>
              <div className="pt-5 flex">
                <Link href="https://github.com/senali-d/tesla-clone" target="_blank">
                  <FiGithub color="#64ffda" size="20" className="mr-2" />
                </Link>
                <Link href="https://tesla-clone-alpha-six.vercel.app" target="_blank">
                  <FiExternalLink color="#64ffda" size="20" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div id="contact"></div>
        <div className="md:mt-5 lg:mt-20 max-w-[1200px] mx-auto p-5 flex justify-start flex-col md:flex-row">
          <div className="w-full md:pr-5 md:w-2/3">
            <h2 className="text-4xl text-center md:text-left sm:text-6xl text-[#ccd6f6] font-bold">
              Get In Touch
            </h2>
            <p className="text-lg text-[#8892b0] pt-4">
              Whether you want to connect, or just want to say hello, I want to hear from you.
              <br/>
              <br/>
              You can contact me by reaching out to me through one of the social media channels listed below. 
              I will do my best to respond to your message as soon as possible.
            </p>
            <div className="pt-10 flex">
              <Link href="https://github.com/senali-d" target="_blank">
                <FiGithub size="25" className="mr-4 text-[#ccd6f6] hover:text-[#64ffda]" />
              </Link>
              <Link href="https://twitter.com/senali_d" target="_blank">
                <FiTwitter size="25" className="text-[#ccd6f6] hover:text-[#64ffda]" />
              </Link>
            </div>
          </div>
          <div className="w-fit m-auto md:mr-0 left-[50vw] sm:left-0 bg-slate-100 border-2 rounded-full border-[#64ffda]">
            <Image width="400" height="400" src="/contacts.png" className="bg-[#112240] rounded-full p-3" alt="Senali" />
          </div>
        </div>
        {/* Footer */}
        <div className="max-w-[1200px] mx-auto p-5 flex">
          <div className="w-full text-center">
            <p className="text-sm text-[#8892b0] hover:text-[#64ffda] pt-4">
              Designed & Built by Senali Dilumika
            </p>
          </div>
        </div>
      </>
    </div>
  )
}
