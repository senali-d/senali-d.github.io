import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburger } from 'react-icons/gi'

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="z-50 fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[#112240] mb-3 shadow-xl">
      <div className="max-w-[1200px] w-full px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" className="flex text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white">
            <Image src="/logo.png" className="rounded-full" alt="Senali" width="50" height="50" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburger className="text-[#64ffda]" size="30" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-[#64ffda]"
                href="#about"
              >
                <span className="ml-2">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-[#64ffda]"
                href="#work"
              >
                <span className="ml-2">Work</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-[#64ffda]"
                href="#contact"
              >
                <span className="ml-2">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
