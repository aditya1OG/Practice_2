import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaHireAHelper } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex flex-col border-b-2 border-b-black border-r-2 ">
      <header className="flex justify-around items-center h-16 py-10">
        <h1 className="font-semibold text-[25px]">Aditya Tiwari</h1>
        <div className='flex items-center justify-center gap-4 textbl'>
          <a href='https://www.dropbox.com/scl/fi/m54n9tl9y3zqt6dohj09v/ADITYA-Resume.pdf?rlkey=5x9vkz8o50g0vps7hctkv6d0x&dl=0' className=' text-white bg-black border rounded-2xl px-3 py-2 flex gap-2 items-center justify-center'>
            Download CV <AiOutlineCloudDownload className='down-arrow' />
          </a>
          <a href="mailto:adityatiwari9410@gmail.com" className=' text-white bg-black border rounded-2xl px-3 py-2 flex gap-2 items-center justify-center'>
            Hire Me <FaHireAHelper className='down-arrow' />
          </a>
        </div>
      </header>

    </div>
  )
}

export default Header