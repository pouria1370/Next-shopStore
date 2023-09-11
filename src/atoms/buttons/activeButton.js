import React from 'react'

const ActiveButton = () => {
  return (
    <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
      active:file:border-solid
      active:file:border-2
      active:file:border-red-500
    "/>
  </label>
  )
}

export default ActiveButton