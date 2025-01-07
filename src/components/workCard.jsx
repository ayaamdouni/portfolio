import React from 'react'
import work from './../assets/work.json';

const WorkCard = () => {
  return (
    <div className='p-8 md:p-14 lg:pl-20 lg:pr-20 flex flex-row items-center justify-between bg-backg dark:bg-black'>
        
            <div class="relative flex flex-col border-s  border-gray-200 dark:border-gray-700">                  
            {Object.entries(work).map(([key, value]) =>
            <div className='flex flex-row justify-between'>
                <li class="mb-10 ms-6 flex flex-col items-start w-1/2 max-w-full overflow-hidden">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 class="flex items-start mb-1 text-[12px] md:text-lg font-bold text-titleColor dark:text-white">
                {value.company}
                <span class="bg-blue-100 text-tagColor text-sm font-medium ms-3 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tunisia</span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-durationColor dark:text-gray-500">
                {value.duration}
            </time>
            <p class="mb-4 text-l lg:text-xl font-semibold text-titleColor dark:text-gray-400">
                {value.post}
            </p>
            <div className='bg-blue flex flex-col items-start'>
                {value.tasks.map((task, index) => (
                    <div key={index} class="text-base font-normal text-start text-black dark:text-white">- {task}</div>
                ))}
            </div>
            <div className='flex flex-row mt-4'>
                <p class="mb-1 font-semibold italic text-base text-gray-500 dark:text-gray-400">Keywords</p>
                <div className='flex flex-row flex-wrap'>
                    {value.keywords.map((keyword, index) => (
                        <div key={index} class="bg-blue-100 text-tagColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-white mr-2 mt-1">
                            {keyword}
                        </div>
                    ))}
                </div>
            </div>
          </li>
          <img 
          src={value.image} 
          alt='work'
          className='h-80 opacity-60'/>
          </div>
          )}
            </div>
    </div>

  )
}

export default WorkCard;