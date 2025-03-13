import Link from 'next/link'
import React from 'react'

function Webdevelopement() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-black">
  <h1 className='text-[#00ff00] text-3xl md:text-5xl font-bold text-center'>Web Developement</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">

    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
        <Link href="https://market-builder-hackthone-f41u.vercel.app/" target='_blank' >
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/projects/bandage.png"
            />
            </Link>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Link href="https://milestone3-e-commerce-website-phi.vercel.app/" target='_blank' >

          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/projects/burgershop.png"
          />
          </Link>
        </div>
        <div className="md:p-2 p-1 w-full">
        <Link href="https://dynamic-blog-rbw2.vercel.app/" target='_blank' >

          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/projects/dynamicBlog.png"
          />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
        <Link href="https://clone-web-beta.vercel.app/" target='_blank' >

          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/projects/fashion_web.png"
          />
          </Link>
        </div>

        <div className="md:p-2 p-1 w-1/2">
        <Link href="https://www.lustrabeauty.online/" target='_blank' >
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/projects/lustra.png"
          />
          </Link>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Link href="https://e-commerce-clone-web.vercel.app/" target='_blank' >

          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/projects/landing_page.png"
          />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Webdevelopement
