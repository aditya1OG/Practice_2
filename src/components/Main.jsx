import React from 'react'
import pgImage from '../assests/pg.png';


const Main = () => {
    const gradientText = {
        background: '-webkit-linear-gradient(#4c3894, #2f0e52 29%, #ff1361 67%, #fff800)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
    };
    return (
        <div className='flex items-center h-screen justify-around flex-col lg:flex-row border-b-2 border-b-black'>
            <div className='flex flex-col items-center justify-center w-[50%] border-r-2 h-[100vh] border-r-black'>
                <h1 className='md:text-[35px] text-[25px] font-semibold mb-6 leading-tight text-center'>HELLO IT'S ME <br className='sm:block hidden' /> ADITYA TIWARI APPLIED FOR<br className='sm:block hidden' /><span style={gradientText} className='font-bold text-[30px]'>FRONTEND DEVELOPMENT POSITION</span></h1>
                <p className='text-[18px] mb-6 w-[70%] text-center'>Hellow Welcome to the Task page, Here I've completed my task successfully for the frontend development position in Educademy LLP. I'm a passionate and aspiring front-end developer showcasing my Skills and dedication to creating engaging web experiences.</p>
                <button className='flex items-center gap-5 px-4 rounded-3xl py-2 bg-black text-white'>
                    <a href='https://devfolio-6pplfqte8-aditya1q.vercel.app/' className='text-[14px] font-bold'>Visit Portfolio</a>
                </button>
            </div>

            <div className='flex items-center justify-center'>
                <img src={pgImage} alt="" className='image object-contain flex items-center justify-center w-[70%]' />
            </div>
        </div>
    )
}

export default Main
