import React from "react"
import { Link } from "gatsby"
import logo from "../images/trials-logo.svg"

const Nav = () => {
  return (
    <header className="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white">
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center  flex-wrap sm:flex-nowrap  ">
                <Link to={`/`} className={`flex-none text-gray-900`}>
                    {/* <span className="sr-only">Trials Australia</span> */}
                    <img src={logo} className="w-auto h-6" alt="Motorbike rider" />
                </Link>
              <div className="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center" >
                <a href="/trials" className="hover:text-gray-900">Trials</a>
                <a href="/news" className="mx-6 hover:text-gray-900">News</a>
                <a href="/event" className="mx-6 hover:text-gray-900">Events</a>
                <a href="/forum" className="mx-6 hover:text-gray-900">Forum</a>
                <a href="/login" className="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
                  Sign in
                  <svg width="11" height="10" fill="none"
                       className="flex-none ml-1.5 text-gray-400 group-hover:text-teal-600">
                    <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z"
                          fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </div>
        </header>
  )
}

export default Nav
