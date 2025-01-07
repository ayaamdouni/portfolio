import React from 'react'

const EducationCard = () => {
  return (
    <div className='pl-20 pr-20 bg-backg dark:bg-black flex flex-row items-center justify-between space-x-2'>
        <div className='bg-skillbg dark:bg-gradient-to-bl from-slate-800 to-blue-950 flex flex-row border-4 items-start border-blue-700 rounded-[4rem] p-9'>
            <img class="h-12 w-auto" src="/logos/logoEnicarthage.png" alt='logo enicarthage'/>
            <div className='flex flex-col justify-between gap-2 items-start'>
                <div className='flex flex-col lg:flex-row space-x-2 items-start lg:items-center'>
                    <div className='text-titleColor dark:text-blue-500 font-bold text-2xl'>Master degree</div> 
                    <div className='text-durationColor dark:text-gray-400 text-sm lg:text-xl'>Jan. 2025 ~ Dec. 2026</div> 
                </div>
                <div className='text-start text-l lg:text-2xl font-semibold text-gray-800 dark:text-white'> Superior Technology School (ETS Montréal), Montréal </div>
                <div className='text-start lg:text-xl text-pColor'>Master degree</div>
                <div className='flex flex-row justify-between lg:w-74 sm:w-42 border-2 bg-blue-900 text-white  border-blue-900 rounded-[2rem] pl-2 pr-2 items-center'>
                   <img class="h-12 w-auto" src="/icons/education.png" alt="education"/>
                   <div className='text-start text-sm lg:text-l'>Specialized in: Blockchain technology</div>
                </div>
            </div>
        </div>
        
        <div className='bg-skillbg dark:bg-gradient-to-bl from-slate-800 to-blue-950 flex flex-row border-4 items-start border-blue-700 rounded-[4rem] p-9'>
            <img class="h-12 w-auto" src="/logos/logoEnicarthage.png" alt='logo enicarthage'/>
            <div className='flex flex-col justify-between gap-2 items-start'>
                <div className='flex flex-col lg:flex-row space-x-2 items-start lg:items-center'>
                    <div className='text-titleColor dark:text-blue-500 font-bold text-2xl'>Engineering</div> 
                    <div className='text-durationColor dark:text-gray-400 text-sm lg:text-xl'>Sep. 2021 ~ Oct. 2024</div> 
                </div>
                <div className='text-start text-l lg:text-2xl font-semibold text-gray-800 dark:text-white'> National School of Engineers of Carthage, Tunisia </div>
                <div className='text-start lg:text-xl text-pColor'>National Engineering Diploma</div>
                <div className='flex flex-row justify-between lg:w-72 sm:w-42 border-2 bg-blue-900 text-white  border-blue-900 rounded-[2rem] pl-2 pr-2 items-center'>
                   <img class="h-12 w-auto" src="/icons/education.png" alt="education"/>
                   <div className='text-start text-sm lg:text-l'>Specialized in: Infotronics systems</div>
                </div>
            </div>
        </div>


        
   </div>
  )
}

export default EducationCard;