import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const SearchBox_Header = () => {
    const [focused, setFocused] = useState(false)
    const [searchValue, setSearchValue] = useState("")
  return (
    <div className='lg:w-[29rem] relative w-full '>
        {focused ? <div onClick={() => setFocused(false)} className='fixed  bg-light bg-opacity-20 z-20 opacity-100 w-full inset-0 h-screen'/> : null}   
       <div className='flex justify-start items-center border-1 bg-light rounded-lg pr-3 z-30 relative focus-within:bg-gray focus-within:bg-opacity-25'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-smoky opacity-40 z-30 '/>
           <input id='header__searchInput' className=' placeholder:text-text font-vazir placeholder:invisible md:placeholder:visible caret-gray relative text-xs bg-light  focus-within:bg-gray focus-within:bg-opacity-0 border-none w-full h-[2.25rem] px-2 focus:outline-none z-30'
               onClick={() => setFocused(true)} type='search' placeholder='محصول,برند یا دسته مورد نظرتان را جستجو کنید'/>
          <FontAwesomeIcon id='cancel-button' icon={faCircleXmark} className='text-gray-500 absolute left-3 z-30  '/>
       </div>
        {focused ? <div className='absolute lg:w-[29rem] w-full rounded-lg mt-1 h-[20rem] flex px-2 py-2 bg-white z-30'> Hello world </div>:null}
    </div>
    
  )
}

export default SearchBox_Header