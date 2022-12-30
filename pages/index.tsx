import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/commin/header'
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
          <div className="p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto h-[100vh] flex justify-center flex-row items-center">
            <div className="mt-[80px] p-5 sm:p-0 w-full absolute sm:relative md:w-1/3 lg:w-2/4 z-10">
              <p className="text-lg text-[#64ffda] font-bold pb-5">
                Hi, my name is
              </p>
              <h1 className="text-6xl sm:text-8xl text-[#ccd6f6] font-bold">
                Senali Dilumika.
              </h1>
              <p className="text-xl text-[#8892b0] pt-4">Bridging the gap between design and technology</p>
            </div>
            <div className="mt-[80px] relative left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] rounded-full">
              <Image width={500} height={500} src="/home-banner.svg" className="bg-[#112240] rounded-full p-3" alt="Senali" />
            </div>
          </div>
        </div>
        {/* About Us */}
        <div id="about"></div>
        <div className="mt-20 p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto flex justify-center flex-row">
          <div className="relative left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda] rounded-full">
            <Image width="400" height="400" src="/about-me.png" className="bg-[#112240] rounded-full p-3" alt="Senali" />
          </div>
          <div className="ml-10 p-5 sm:p-0 w-full absolute sm:relative md:w-1/3 lg:w-2/4">
            <h2 className="text-4xl sm:text-6xl text-[#ccd6f6] font-bold">
              About Me.
            </h2>
            <p className="text-lg text-[#8892b0] pt-4">
              Hello, I am very ambitious passionate front-end developer who loves coding.
              I began my tech career in 2019 and have since gained experience in a variety of technologies, including Typescript, JavaScript, React, WordPress, NextJS, Node, and Python.
              <br/>
              I am always looking to expand my skills and knowledge, and am currently interested in exploring the exciting field of machine learning and data science.
              <br/>
              Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support others.
              <br/>
              Thank you for visiting my website.
            </p>
          </div>
        </div>
        {/* Work */}
        <div id="work"></div>
        <div className="mt-20 p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto flex justify-center flex-col">
          <div className="p-5 sm:px-16 w-full absolute sm:relative">
            <h2 className="text-4xl sm:text-6xl text-[#ccd6f6] font-bold">
              My Works.
            </h2>
          </div>
          <div className="pb-8 flex justify-between flex-row">
            <div className="p-5 sm:px-16 w-full absolute sm:relative md:w-1/3 lg:w-2/4">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                Travel Mate.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was completed as part of the a StepZen GraphQL Challenge Hackathon organized by StepZen GraphQL Challenge. 
                <br/>
                <br/>
                Projects focus on building web applications for travel community, to build a community for travelers, travel enthusiasts and show the beauty of the world.
              </p>
              <div className="text-[#64ffda] pt-8">
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl mr-2">React</span>
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl mr-2">Graphql</span>
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl mr-2">Postgresql</span>
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl">Tailwind css</span>
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
            <div className="relative h-[100%] m-5 mx-16 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda]">
              <Image width="500" height="500" src="/travel-mate.png" className="bg-[#112240] p-3" alt="Senali" />
            </div>
          </div>
          <div className="pb-8 flex justify-between flex-row">
            <div className="relative h-[100%] m-5 mx-16 left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda]">
              <Image width="500" height="500" src="/tesla-clone.png" className="bg-[#112240] p-3" alt="Senali" />
            </div>
            <div className="p-5 sm:px-16 w-full absolute sm:relative md:w-1/3 lg:w-2/4">
              <h3 className="text-xl sm:text-3xl text-[#ccd6f6] font-bold">
                Tesla Clone.
              </h3>
              <p className="text-lg text-[#8892b0] pt-4">
                This project was clone of the ui of tesla web site. 
                <br/>
              </p>
              <div className="text-[#64ffda] pt-8">
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl mr-2">React</span>
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl mr-2">Styled Components</span>
                <span className="text-sm border border-[#64ffda] px-4 py-1 rounded-2xl">MUI</span>
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
        {/* About Us */}
        <div id="contact"></div>
        <div className="mt-20 p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto flex justify-start flex-row">
          <div className="p-5 sm:px-16 w-full absolute sm:relative md:w-1/3 lg:w-2/4">
            <h2 className="text-4xl sm:text-6xl text-[#ccd6f6] font-bold">
              Get In Touch
            </h2>
            <p className="text-lg text-[#8892b0] pt-4">
              Whether you want to connect, or just want to say hello, we want to hear from you.
              <br/>
              <br/>
              You can contact me by reaching out to us through one of the social media channels listed below. 
              I will do our best to respond to your message as soon as possible.
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
          <div className="relative left-[50vw] sm:left-0 bg-slate-100 border-2 rounded-full border-[#64ffda]">
            <Image width="400" height="400" src="/contacts.png" className="bg-[#112240] rounded-full p-3" alt="Senali" />
          </div>
        </div>
        {/* Footer */}
        <div className="mt-20 p-5 sm:p-16 lg:p-0 max-w-[1200px] mx-auto flex justify-start flex-row">
          <div className="p-5 sm:px-16 w-full absolute sm:relative text-center">
            <p className="text-sm text-[#8892b0] hover:text-[#64ffda] pt-4">
              Designed & Built by Senali Dilumika
            </p>
          </div>
        </div>
      </>
    </div>
  )
}
