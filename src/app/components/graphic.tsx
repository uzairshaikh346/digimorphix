import React from 'react'

function Graphic() {
  return (
    <div className='bg-black'>
        <h1 className='text-[#00ff00] text-3xl md:text-5xl font-bold text-center'>Graphic Design</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full relative mb-4">
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block relative inset-0"
          src="/graphic2.jpeg"
        />
        
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block relative inset-0"
              src="/graphic1.jpeg"
            />
            
          </div>
        </div>
        <div className="px-2 w-1/2">
        <div className="flex flex-wrap w-full relative">
        <img
              alt="gallery"
              className="w-full object-cover h-full object-center block relative inset-0"
              src="/graphic3.jpeg"
            />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Graphic