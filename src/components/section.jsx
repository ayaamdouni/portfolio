import React from 'react'

const Section = ({titre}) => {
  return (
    <div className='flex p-8 items-center justify-center dark:bg-black dark:text-white text-blue-900 text-4xl tracking-tight font-extrabold'>{titre}</div>
  )
}

export default Section;