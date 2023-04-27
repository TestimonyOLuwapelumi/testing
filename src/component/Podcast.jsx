import React from 'react'
import { Link } from 'react-router-dom'

const Podcast = ({allDatapo}) => {
  return (
    <>
    
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-6 lg:py-8">
      {/* <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over a lazy dog
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div> */}
      <div className="grid gap-6 row-gap-5 mb-3 lg:grid-cols-4 sm:grid-cols-2 sm:row-gap-2 sm:grid-cols-2">
      {allDatapo.map((podcast)=>
          <Link to={`/podcast/${podcast.id}`}>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={podcast.attributes.podcastImg.data.attributes.url}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                {podcast.attributes.podcastTitle}
              </p>
            </div>
          </div>
          
        </a>
         </Link>
         )}

      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
    
    </>
  )
}

export default Podcast