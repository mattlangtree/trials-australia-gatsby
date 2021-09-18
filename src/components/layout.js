/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../components/nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)

  const currentYear = new Date().getFullYear()

  return (
    <>
      <Helmet>
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta charset="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="origin-when-cross-origin" name="referrer" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      <Nav />

      <div className="container mx-auto px-4">
        {/* Layout templates define blocks that other templates may override. If a
         child template (one that extends this template) does not implement the
         `content` block, then you'll see the default message. */}
        {children}
      </div>

      <footer className="bg-gray-700 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">

          <div className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">

            <div class="col-xs-6 col-md-3">
              <ul className="space-y-4">

                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/moto-trials">Trials</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="https://forum.trials.com.au/viewforum.php?f=25&amp;start=0">Buy a Trials Bike</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/moto-trials/clubs">Clubs</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/moto-trials/dealers">Dealers</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/about/useful-links">Useful Links</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/archive/">Archive</a></li>
                <ul>
                </ul></ul></div>

            <div class="col-xs-6 col-md-3">
              <ul className="space-y-4">
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/nswAndAct">NSW &amp; ACT</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/queensland">Queensland</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/southAustralia">South Australia</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/tasmania/">Tasmania</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/victoria/">Victoria</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/calendars/westernAustralia/">Western Australia</a></li>
                <ul>
                </ul></ul></div>

            <div class="col-xs-6 col-md-3">
              <ul className="space-y-4">

                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/events/">Events</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/news/calendars/">Calendars</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/news/entry-forms/">Entry Forms</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/news/event-results/">Event Results</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/news/event-directions/">Event Directions</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/news/event-updates/">Event Updates</a></li>
                <ul>
                </ul></ul></div>

            <div class="col-xs-6 col-md-3">
              <ul className="space-y-4">

                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/about">About</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/contact">Contact Us</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/about/legal">Legal</a></li>
                <li><a className="hover:text-white text-gray-300 transition-colors duration-200" href="/about/contributing">Contributing</a></li>

                <ul>
                </ul>
              </ul>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Layout
