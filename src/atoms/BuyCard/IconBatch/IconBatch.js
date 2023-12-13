import React from 'react'

const IconBatch = (props) => {
  return (
    <div className='flex flex-row bg-light bg-opacity-40 p-2 my-2 items-baseline rounded-md ' dir='rtl'>
        <div className='mr-1'>
            {props.icon}
        </div>
        <div className='mr-2 font-vazir-adad text-xs'>
        {props.text}
        </div>
    </div>
  )
}

export default IconBatch