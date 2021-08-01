import * as React from "react"
import logo from "../images/trials-logo.svg"

console.log(process.env.GOOGLE_MAPS_KEY)
const MapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-37.85455924523834,146.706018447876&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C-37.85455924523834,146.706018447876&key=${process.env.GOOGLE_MAPS_KEY}`

const IndexPage = () => {
  return (
    <main>
      <title>Trials Australia</title>
        <header
            className="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center  flex-wrap sm:flex-nowrap  ">
              <a href="/" className="flex-none text-gray-900">
                <span className="sr-only">Trials Australia</span>
                <img src={logo} className="w-auto h-6" alt="Motorbike rider" />
              </a>
              <div className="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center" >
                <a href="/trials" className="hover:text-gray-900"><span>Trials</span></a>
                <a href="/news" className="mx-6 hover:text-gray-900"><span>News</span></a>
                <a href="/contact" className="mx-6 hover:text-gray-900">Events</a>
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
        </header>
      <header className="flex-auto flex">
        <div className="relative flex w-full shadow-sm">
          <div className="relative flex w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 space-y-3">
              <div className="text-gray-500 font-normal bg-white space-x-4">Saturday 16th April - Sunday 17th April
              </div>
              <div className="text-4xl text-gray-800 font-black">2022 Glenmaggie Easter Trial</div>
              <div className="">Hosted by Oakleigh Motorcycle Club</div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-auto flex bg-gray-50 pt-8">
        <div className="relative flex w-full">
          <div className="relative flex w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex-none lg:grid lg:grid-cols-3 lg:gap-8">

              <div
                  className="bg-gray-100 col-span-2 lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 py- 12 sm:py-0 px-4 sm:px-6 lg:pl-0 lg:pr-8">
                <div className="pb-10">
                  <img src="https://d3d9l6ionxdef8.cloudfront.net/WhatsApp-Image-2021-03-18-at-8.38.05-PM.jpeg"
                       className="w-full" alt="Glenmaggie Rider - Tim Coleman" />
                </div>
                <div className="space-y-6  pb-10">
                  <p>Glenmaggie is back in 2022 with lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    tincidunt consequat sapien, sed aliquam felis molestie vitae. Ut dignissim nisl quis euismod
                    tristique. Aenean eget sapien nec ligula egestas scelerisque sed quis diam. Duis porttitor aliquam
                    justo, et vulputate velit aliquam eget. Mauris volutpat, nibh sed elementum ornare, tortor nisi
                    convallis diam, in aliquam neque magna non erat. Phasellus venenatis pharetra nulla. Proin id
                    ullamcorper dolor, in rhoncus libero. </p>
                  <p>Entries will open on the 20th March with lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tincidunt consequat sapien, sed aliquam felis molestie vitae. Ut dignissim nisl quis
                    euismod tristique. Aenean eget sapien nec ligula egestas scelerisque sed quis diam. Duis porttitor
                    aliquam justo, et vulputate velit aliquam eget. Mauris volutpat, nibh sed elementum ornare, tortor
                    nisi convallis diam, in aliquam neque magna non erat. Phasellus venenatis pharetra nulla. Proin id
                    ullamcorper dolor, in rhoncus libero.</p>
                </div>

                <div className="text-sm top-5 space-y-5">
                  <p>Oakleigh MCC is a passionate group of 100+ trials riders and operates out of the club grounds in
                    the Melbourne suburb of Clayton. They have been hosting the annual Easter Trial at Glenmaggie for
                    decades.</p>
                  <p>
                    <a href="http://oakleighmcc.com/">Oakleigh MCC Website</a> | <a
                      href="https://facebook.com/oakleighmcc">Oakleigh MCC Facebook</a>
                  </p>
                </div>

              </div>
              <div className="relative lg:-ml-8">

                <div className="bg-white p-6 rounded-xl mb-8">

                  <div className="font-semibold">Event Contact</div>
                  <div>Oakleigh Motorcycle Club</div>
                  <div>Race Secretary<br/>
                    David Grice<br/>
                    Email: <a href="mailto:secretary@oakleighmcc.com">secretary@oakleighmcc.com</a>
                  </div>

                </div>

                {/*Date/Time*/}
                <div className="bg-white pt-6 pl-6 pr-6 space-x-4 flex rounded-tl-xl rounded-tr-xl">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>Saturday 16th April - Sunday 17th April, 2022</div>
                </div>

                {/*Location*/}
                <div className="bg-white pl-6 pt-6 pr-6 pb-10 space-x-4 flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                  </div>
                  <div>
                    <p>Glenmaggie, Victoria</p>
                    <p className="font-medium pt-3">How to find the venue</p>
                    <div className="space-y-5">
                      <p>From Glenmaggie, travel north on the Heyfield Jamieson Rd (C486) for approx. 8kms. Site is at
                        Greens Gully Bridge on the left hand side.
                      </p>
                      <p className="text-sm">Maps Reference: -37.854593, 146.706603</p>
                    </div>
                    <button
                        className="mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-purple-600 hover:shadow-lg">Get
                      Directions
                    </button>
                  </div>
                </div>

                <div id="map">
                  <a href="https://maps.google.com/" target="_blank" rel="noreferrer"><img className="w-full"
                                                                          src={MapsUrl} alt="Map of event location" /></a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </main>
    </main>
  )
}

export default IndexPage
