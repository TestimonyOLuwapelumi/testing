import React from 'react'
import { Link } from 'react-router-dom'
import FirstBlogContent from './FirstBlogContent';


const Blogs = ({blogs, firstblogs}) => {
   console.log(blogs);
   const firstThreeBlogs = blogs.data.slice(2, 3);
   const firstThree = firstblogs.data.slice(0, 1);
   const firstThre = firstblogs.data.slice(0, 1);
   const firstThr = firstblogs.data.slice(1, 2);
   const firstTh = firstblogs.data.slice(2, 3);
   const firstThrr = firstblogs.data.slice(3, 4);
   const firstThee = firstblogs.data.slice(4, 5);
   const firstTheee = firstblogs.data.slice(5, 6);
   const blogg = blogs.data.slice(0, 1);
   const bloggg = blogs.data.slice(1, 5);
   const blogi = blogs.data.slice(5, 6);
   const bloggi = blogs.data.slice(6, 14);
   const blogggi = blogs.data.slice(11, 12);



// const options = { day: 'numeric', month: 'long', year: 'numeric' };
// const date = new Date(firstblog.createdAt).toLocaleDateString('en-US', options);

  
// const dates = blogs.map(blog => blog.attributes.publishedAt);
// console.log(publishedAt);



  return (

            <>


<div className="flex justify-center items-center drop-shadow-xl">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    {/* <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div> */}
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">


        {firstThre.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="chair" />
          </Link>
          ) }
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">


          {firstThr.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="wall design" />
            </Link>
            )}
          </div>
        </div>
        <div className="relative">
        {firstThee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
              <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
          {firstTheee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <img className="w-full mt-4 sm:hidden" src={firstblog.attributes.firstblogImg.data.attributes.url} alt="sitting place" />
          </Link>
          )}
          </Link>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
        {firstTheee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
              <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="sitting place" className="w-full sm:block hidden" />
          {firstThee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <img className="w-full sm:hidden" src={firstblog.attributes.firstblogImg.data.attributes.url} alt="sitting place" />
          </Link>
          )}
          </Link>
          )}
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">


          {firstTh.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="chair" />
            </Link>
          )}
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
          {firstThrr.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white"> {firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="wall design" />
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<section className="flex justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">

	<div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div className="flex flex-col items-center justify-center">
		{/* <div className=" text-center">
	{blogg.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
	<div className="container max-w-7xl p-1 mx-auto space-y-1 sm:space-y-1 border">
		<a rel="noopener noreferrer" href="#" className="blockmax-w-7xl   mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={blog.attributes.blogImg.data.attributes.url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl "> {blog.attributes.blogTitle}</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p >{blog.attributes.blogDesc}</p>
			</div>
		</a>
    </div>
			<h2 className="text-3xl font-bold"></h2>
			<p className="font-serif text-sm dark:text-gray-400"></p>
			</Link>
				)}
		</div> */}
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{bloggg.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
			<article className="flex flex-col dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] border">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug ">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span >June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			</Link>
				)}
			{/* <article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article> */}
		</div>
    </div>
	</div>
</section>







<div>    
      <section className=" ">
    
      <div className="container p-1 mx-auto space-y4 ">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

		{bloggg.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
          <div className="lg:hidden ">
            <div className="bg-white h-full w-full pl-4">
              <div>
                <a href="#" className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div className="pl-3 w-3/5">
                        <p className="text-xs text-gray-500 uppercase">MUSIC</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
          <article className="flex flex-col dark:bg-gray-900 hidden lg:block">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
		  </Link>
				)}
         
        </div>
      </div>
    </section>
  </div>




{/* <div className="bg-white py-6">
    <div className="lg:container mx-auto px-2 sm:px-4 lg:px-2">
     
        <div className="flex flex-row flex-wrap">
          
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                <div className="relative hover-img max-h-98 overflow-hidden">
                    <a href="#">
                        <img className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img1.jpg" alt="Image description"/>
                    </a>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                        </a>
                        <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                        <div className="pt-2">
                            <div className="text-gray-100">
                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
                <div className="box-one flex flex-row flex-wrap">
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                        <div className="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img2.jpg" alt="Image description"/>
                            </a>
                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                                </a>
                                <div className="pt-1">
                                    <div className="text-gray-100">
                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                        <div className="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img3.jpg" alt="Image description"/>
                            </a>
                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
                                </a>
                                <div className="pt-1">
                                    <div className="text-gray-100">
                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Architecture
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                        <div className="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img4.jpg" alt="Image description"/>
                            </a>
                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
                                </a>
                                <div className="pt-1">
                                    <div className="text-gray-100">
                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Interior
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="flex-shrink max-w-full w-full sm:w-1/2">
                        <div className="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img className="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img5.jpg" alt="Image description"/>
                            </a>
                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                                </a>
                                <div className="pt-1">
                                    <div className="text-gray-100">
                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Lifestyle
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div> */}








{/* style={{backgroundImage: url("https://source.unsplash.com/random/243x320")}} */}

{/* <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
		<div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
			<div className="flex flex-col space-y-8 md:space-y-12">
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
					<p className="text-xs dark:text-gray-400">47 minutes ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
					<p className="text-xs dark:text-gray-400">2 hours ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
					<p className="text-xs dark:text-gray-400">4 hours ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full space-y-2">
				<div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
					<div className="w-1/2 h-full dark:bg-violet-400"></div>
				</div>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
					<span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
					<svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>
		<div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: `url('https://source.unsplash.com/random/239x319')`}}>
			<span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">paris, france</span>
			<a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
				<span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
					<span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
						<span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
					</span>
					<span className="text-sm font-bold">Live</span>
				</span>
				<h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
			</a>
		</div>
		<div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
			<div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
			</div>
			<div className="flex flex-col divide-y divide-gray-700">
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
						<p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
							<a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
						<p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
							<a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
						<p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
							<a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
						<p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
							<a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}






{/* <div className="dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto" style={{backgroundImage: `url('https://source.unsplash.com/random/640x480')`, backgroundPosition: 'center', backgroundBlendMode: 'multiply', backgroundSize: 'cover',}} >
			<div className="flex flex-col items-center p-8 py-12 text-center">
				<span>12 June</span>
				<h1 className="py-4 text-5xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
				<p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div> */}



{/* 
<section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
    <div className="max-w-7xl mx-auto p-1 sm:px-6 h-full 2xl:mx-auto 2xl:container lg:px-14 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
	{blogi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="relative block group" href="#0">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blog.attributes.blogImg.data.attributes.url} width="540" height="303" alt="Blog post"/>
                </figure>
            </a>
            <div >
                <header>
                    <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                            </li>
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Designing a functional workflow at home.</a>
                    </h3>
                </header>
                <p className="text-lg text-gray-400 flex">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <footer className="flex items-center mt-4">
                    <a href="#0">
                        <img className="rounded-full mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04"/>
                    </a>
                    <div>
                        <a className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Chris Solerieu</a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 19, 2020</span>
                    </div>
                </footer>
            </div>
        </article>    
		</Link>
	)}
    </div>
</section> */}



<section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        {/* <!-- Blog post --> */}
		{blogi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="relative block group" href="#0">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blog.attributes.blogImg.data.attributes.url}  width="540" height="303" alt="Blog post"/>
                </figure>
            </a>
            <div>
                {/* <header>
                    <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                            </li>
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Designing a functional workflow at home.</a>
                    </h3>
                </header> */}
                <p className="text-lg text-gray-200 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <footer className="flex items-center mt-4">
                    <a href="#0">
                        <img className="rounded-full flex-shrink-0 mr-4" src={blog.attributes.authorImg.data.attributes.url} alt="Author 04" style={{ width: "50px", height: "50px" }}/>
                    </a>
                    <div>
                        <a className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Chris Solerieu</a>
                        <span className="text-gray-200"> - </span>
                        <span className="text-gray-200">Jan 19, 2020</span>
                    </div>
                </footer>
            </div>
        </article>  
		</Link>
		)}  
    </div>
</section>



<div x-show="open" className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    {/* <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        
        
    </div> */}
</div>



<div>    
      <section className=" ">
    
      <div className="container p-1 mx-auto space-y4 pl-4">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

		{bloggi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
          <div className="lg:hidden ">
            <div className="bg-white h-full w-full ">
              <div>
                <a href="#" className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div className="pl-3 w-3/5">
                        <p className="text-xs text-gray-500 uppercase">MUSIC</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
          <article className="flex flex-col dark:bg-gray-900 hidden lg:block">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
		  </Link>
				)}
         
        </div>
      </div>
    </section>
  </div>


{/* <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
	<div className="container p-6 mx-auto space-y-8"> */}
		{/* <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div> */}
		{/* <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{bloggi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			</Link>
		)} */}
			{/* <article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article> */}
		{/* </div>
	</div>
</section> */}





{/* <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
	{blogi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
		<img src={blog.attributes.blogImg.data.attributes.url} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
		<img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
		</Link>
	)}
	</div>
</section> */}

{/* 
<div className="dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
	{blogi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
		<div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{backgroundImage: `url('https://source.unsplash.com/random/640x480')`, backgroundPosition: 'center', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span>
			</div>
			<h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
			<p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span>Read more</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by Leroy Jenkins</span>
				</div>
				<span className="text-xs">3 min read</span>
			</div>
		</div>
		src={blog.attributes.blogImg.data.attributes.url} 
	</Link>
		)}
	</div>
</div> */}




<div className="container mx-auto flex flex-wrap py-6">


<section className="w-full md:w-2/3 flex flex-col items-center px-3">

	<article className="flex flex-col shadow my-4">
		
		<a href="#" className="hover:opacity-75">
			<img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
		</a>
		<div className="bg-white flex flex-col justify-start p-6">
			<a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
			<a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
			<p href="#" className="text-sm pb-3">
				By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
			</p>
			<a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
			<a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
		</div>
	</article>

	<article className="flex flex-col shadow my-4">

		<a href="#" className="hover:opacity-75">
			<img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"/>
		</a>
		<div className="bg-white flex flex-col justify-start p-6">
			<a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
			<a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
			<p href="#" className="text-sm pb-3">
				By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
			</p>
			<a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
			<a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
		</div>
	</article>

	<article className="flex flex-col shadow my-4">

		<a href="#" className="hover:opacity-75">
			<img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"/>
		</a>
		<div className="bg-white flex flex-col justify-start p-6">
			<a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
			<a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
			<p href="#" className="text-sm pb-3">
				By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
			</p>
			<a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
			<a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
		</div>
	</article>

	{/* <div className="flex items-center py-8">
		<a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
		<a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
		<a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
	</div> */}

</section>

<aside className="w-full md:w-1/3 flex flex-col items-center px-3">

	<div className="w-full bg-white shadow flex flex-col my-4 p-6">
		<p className="text-xl font-semibold pb-5">About Us</p>
		<p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
		<a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
			Get to know us
		</a>
	</div>

	<div className="w-full bg-white shadow flex flex-col my-4 p-6">
		<p className="text-xl font-semibold pb-5">Instagram</p>
		<div className="grid grid-cols-3 gap-3">
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
			<img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
		</div>
		<a href="https://www.instagram.com/_thx411" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
			<i className="fab fa-instagram mr-2"></i>@_thx411
		</a>
	</div>

</aside>

</div>



{/* 
<div className="flex justify-center items-center">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">


    {firstThree.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">Noster tincidunt reprimique ad pro</h3>
                <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                <p>{firstblog.attributes.firstblogDesc}</p>
            </div>
        </a>
        </Link>
          ) }
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                   
			{firstThreeBlogs.map((blog)=>

                <Link to={`/blog/${blog.id}`}>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500"  src={blog.attributes.blogImg.data.attributes.url} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.attributes.blogTitle}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
              </Link>

                    ) }


    </div>
    
  </div>
</div>
</div> */}

                

            </>
  )
}

export default Blogs