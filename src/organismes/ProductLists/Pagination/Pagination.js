import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Pagination = () => {
  return (
    <div className='w-full justify-center items-center  flex flex-row gap-5 translate-x-1/4 md:translate-x-24'>
        <span className=' hover:bg-secondary hover:text-white relative top-n1 bg-primary bg-opacity-50 text-primary w-[20px] text-center text-sm  h-[20px] rounded-full shadow-lg'>
        <FontAwesomeIcon icon={faAngleRight} className='align-middle' />
        </span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span className=' hover:bg-secondary hover:text-white relative top-n1 bg-primary bg-opacity-50 text-primary w-[20px] text-center text-sm  h-[20px] rounded-full shadow-sm'>
        <FontAwesomeIcon icon={faAngleLeft} className='align-middle' />
        </span>

    </div>
  )
}
