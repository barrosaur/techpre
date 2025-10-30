import React from 'react'
import Image from 'next/image'
import '@/app/overview/page.css'

const ViewAllBtn = () => {
  const imgSize = 20;

  return (
    <button className='view-all-btn'>
      <Image 
        src="/images/view-all.svg"
        width={imgSize}
        height={imgSize}
        alt='"View all'
      />
      <h3>View all</h3>
    </button>
  )
}

export default ViewAllBtn