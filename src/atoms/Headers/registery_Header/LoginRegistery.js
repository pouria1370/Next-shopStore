import Link from 'next/link'
import React from 'react'

const LoginRegistery = () => {
  return (
    <Link href='/account/login'>
    <div className='w-[7rem] text-sm font-vazir border-2 rounded-md flex items-center justify-center whitespace-pre h-[2.25rem] border-gray-200 '>{`ورود   |   ثبت نام `}</div>
    </Link>
  )
}

export default LoginRegistery