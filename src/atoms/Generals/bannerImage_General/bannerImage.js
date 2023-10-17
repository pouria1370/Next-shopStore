import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerImage = ({url,imageSrc,alt}) => {
  return (
        <Link  href={`${url}`}>
            <Image   alt={alt} className='w-full  h-full' src={imageSrc} />
        </Link>
  )
}

export default BannerImage