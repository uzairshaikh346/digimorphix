import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';


function Navbar() {
  return (
    <header className="text-gray-300 bg-black body-font">
  <div className="container mx-auto flex justify-between px-5 py-2  md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logo.jpg" alt="logo" className='w-[100px] rounded-lg md:ml-10 ' />
    </Link>
    <nav className="md:ml-auto hidden md:flex flex-wrap gap-10 items-center text-base">
      <Link href="/" className="mr-5 hover:text-[#00FF00]">Home</Link>
      <Link href='/about' className="mr-5 hover:text-[#00FF00]">About</Link>
      <Link href='/services' className="mr-5 hover:text-[#00FF00]">Services</Link>
      <Link href='/contact' className="mr-5 hover:text-[#00FF00]">Contact</Link>
      <Link href='/work' className="mr-5 hover:text-[#00FF00]">Work</Link>

    </nav>
    <div className='md:hidden block'>
    <Sheet>
  <SheetTrigger><AlignJustify color='white' size={25}/></SheetTrigger>
  <SheetContent >
    <SheetHeader>
      <SheetDescription>
       <div className=' flex flex-col items-center justify-center gap-4 text-gray-300 '>
      <Link href="/" className="mr-5 hover:text-[#00FF00]">Home</Link>
      <Link href='/about' className="mr-5 hover:text-[#00FF00]">About</Link>
      <Link href='/services' className="mr-5 hover:text-[#00FF00]">Services</Link>
      <Link href='/contact' className="mr-5 hover:text-[#00FF00]">Contact</Link>
      <Link href='/contact' className="mr-5 hover:text-[#00FF00]">Work</Link>


       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
    
  </div>
</header>

  )
}

export default Navbar

