import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerImage = ({url,imageSrc,widthPercentage,alt}) => {
  return (
    <div className={`w-${widthPercentage ? widthPercentage : "screen"} bg-red-200 h-4 mx-0`}> 
        <Link className='w-full' href={`${url}`}>
            <img alt={alt} className='w-full' src={`${imageSrc}`} />
        </Link>
    </div>
  )
}

export default BannerImage