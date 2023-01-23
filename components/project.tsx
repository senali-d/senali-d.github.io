import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

interface ProjectProps {
  title: string
  descOne: string
  descTwo: string
  image: string
  techs: string[]
  repoLink: string
  appLink: string
  order: string
}

const Project = ({title, descOne, descTwo, image, techs, repoLink, appLink, order }: ProjectProps) => {
  return (
    <div className="flex justify-between flex-col md:flex-row pt-10">
      <div className={`${order === 'desc' ? 'order-1 md:pl-5' : 'order-2 md:pr-5 md:order-none'} w-full pb-10 md:pb-0 md:w-2/3`}>
        <h3 className="text-xl mt-5 md:mt-0 sm:text-3xl text-[#ccd6f6] font-bold">
          {title}
        </h3>
        <p className="text-lg text-[#8892b0] pt-4">
          {descOne}
          <br />
          {descTwo}
        </p>
        <div className="text-[#64ffda] flex flex-wrap pt-8">
          {
            techs.map(tech => <span key={tech} className="text-sm border border-[#64ffda] mb-3 sm:mb-0 px-4 py-1 rounded-2xl mr-2">{tech}</span>)
          }
        </div>
        <div className="pt-5 flex">
          <Link href={repoLink} target="_blank">
            <FiGithub color="#64ffda" size="20" className="mr-2" />
          </Link>
          <Link href={appLink} target="_blank">
            <FiExternalLink color="#64ffda" size="20" />
          </Link>
        </div>
      </div>
      <div className={`${order === 'asc' ? 'order-1 md:mr-0' : 'order-0 md:ml-0 md:order-none' } w-fit h-[100%] mx-auto left-[50vw] sm:left-0 bg-slate-100 border-2 border-[#64ffda]`}>
        <Image width="500" height="500" src={image} className="bg-[#112240] p-3" alt="Senali" />
      </div>
    </div>
  )
}

export default Project