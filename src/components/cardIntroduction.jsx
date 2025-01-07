import React from 'react'

const CardIntroduction = () => {
  return (
    <div className='h-screen p-16 bg-backg dark:bg-black'>
      <div className="cardIntroduction h-full bg-skillbg dark:bg-gradient-to-bl from-slate-800 to-blue-950 rounded-[4rem] text-center border-4 border-blue-700 shadow-xl shadow-blue-500/50 flex justify-center items-center flex-col sm:p-8 ">
        <div className='flex w-full flex-col sm:flex-col lg:flex-row justify-between items-center'>
        <img 
        src='/images/hello.gif' 
        className="h-[20vh] sm:h-[30vh] md:h-[30vh] lg:h-[45vh]" 
        alt='loading'/>
        <div className='flex flex-col sm:items-center lg:items-start lg:justify-start'>
          <h5 className="mb-2 sm:text-xl lg:text-3xl font-bold text-titleColor dark:text-white">Hello, I am Aya Amdouni</h5>
          <p className="mb-5 lg:text-6xl font-bold sm:text-lg text-gray-800 dark:text-blue-400">Blockchain and fullstack engineer</p>
        </div>
        </div>
    </div>
   </div>
  )
}

export default CardIntroduction;