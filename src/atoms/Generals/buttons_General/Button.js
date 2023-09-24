import React from 'react'

const GeneralButton = ({text,handler}) => {
  return (<button className='rounded-xl text-sm hover:text-white text-purple-800 hover:bg-purple-500 px-5 py-2 bg-purple-300 ' onClick={handler}>{text}</button>)
}

export default GeneralButton