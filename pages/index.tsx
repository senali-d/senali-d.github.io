import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/common/header'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import Project from '../components/project'

const projectData = [
    {
    title: "Coinverse.",
    descOne: "This project was completed as part of the a EathGlobal Hackerthon.",
    descTwo: "It provides an interactive no-code platform that allows users to create a community token and NFT memberships. Coinverse supports a unique niche of the 5ire chain which enables sustainability and empowers creators to build thriving web3 communities.",
    image: "/coinverse.png",
    techs: ["Nextjs","Javascript", "Tailwind CSS", "Solidity", "Connectkit"],
    repoLink: "https://github.com/senali-d/coinverse",
    appLink: "https://coinverse-5ire.vercel.app/",
    order: "desc"
  },
  {
    title: "FitChain.",
    descOne: "This project was completed as part of the a Major League Hacking (MLH) Hackerthon.",
    descTwo: "Experience fitness and wellness like never before with FitChain! This decentralized application makes setting and achieving your weekly goals not only fun, but also rewarding. As you reach your goals, you will be able to unlock cool and unique NFTs as a reward for your hard work.",
    image: "/fit-chain.jpg",
    techs: ["Nextjs","Typescript", "Solidity", "Thirdweb", "Connectkit"],
    repoLink: "https://github.com/neel-ds/fitChain",
    appLink: "https://fitchain.vercel.app",
    order: 'asc',
  },
  {
    title: "LogChain.",
    descOne: "This project was completed as part of the a SheBuilds Hackerthon.",
    descTwo: "LogChain is a decentralized provenance application that tracks the ownership and movement of a product or asset through its life cycle. It records each event or transaction that occurs, creating an immutable record of the history of the product or asset.",
    image: "/log-chain.png",
    techs: ["Nextjs","Typescript", "Tailwind CSS", "Solidity", "Polygon", "Connectkit"],
    repoLink: "https://github.com/vrajdesai78/LogChain",
    appLink: "https://log-chain.vercel.app",
    order: "desc"
  },
  {
    title: "Travel Mate.",
    descOne: "This project was completed as part of the a StepZen GraphQL Challenge Hackathon organized by StepZen GraphQL Challenge.",
    descTwo: "Projects focus on building web applications for travel community, to build a community for travelers, travel enthusiasts and show the beauty of the world.",
    image: "/travel-mate.png",
    techs: ["React","Graphql", "Postgresql", "Tailwind CSS"],
    repoLink: "https://github.com/senali-d/travel-mate",
    appLink: "https://travel-mate-tau.vercel.app",
    order: 'asc'
  },
  {
    title: "Tesla Clone.",
    descOne: "This project was clone of the ui of tesla web site.",
    descTwo: "",
    image: "/tesla-clone.png",
    techs: ["React","Styled Components", "MUI"],
    repoLink: "https://github.com/senali-d/tesla-clone",
    appLink: "https://tesla-clone-alpha-six.vercel.app",
    order: 'desc'
  }
]

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
          <>
            {
              projectData.map(project => {
                return (
                  <Project
                    key={project.title}
                    title={project.title}
                    descOne={project.descOne}
                    descTwo={project.descTwo}
                    image={project.image}
                    techs={project.techs}
                    repoLink={project.repoLink}
                    appLink={project.appLink}
                    order={project.order}
                  />
                )
              })
            }
          </>
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
