import GeneralButton from '@/atoms/Generals/buttons_General/Button'
import Logo_Header from '@/atoms/Headers/logo_Header/logo_Header'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faPinterest, faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='grid grid-cols-12 gap-2 p-5 bg-blue-950 '>
        <div className='col-start-2 col-span-3'>
            <GeneralButton text="Go up" />
        </div>
        <div className='col-start-8 col-span-4' dir='rtl'>
            <Logo_Header/>
            <p className='text-xs pt-2 text-white'>تمام حقوق این سایت توسط شرکت الف محافظت می شود </p>
        </div>
        <div className='h-px  bg-white col-start-2 col-span-10 mt-5'/>
        <div className='mt-5 col-start-2 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>قوانین و مقررات</div>
            <Link href="/" className='text-xs'>مقررات</Link>
            <Link href="/" className='text-xs'>حریم خصوصوی کاربران</Link>
            <Link href="/" className='text-xs'>کاربران الف</Link>
        </div>
        <div className='mt-5 col-start-3 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>قوانین و مقررات</div>
            <Link href="/" className='text-xs'>مقررات</Link>
            <Link href="/" className='text-xs'>حریم خصوصوی کاربران</Link>
            <Link href="/" className='text-xs'>کاربران الف</Link>
        </div>
        <div className='mt-5 col-start-4 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>قوانین و مقررات</div>
            <Link href="/" className='text-xs'>مقررات</Link>
            <Link href="/" className='text-xs'>حریم خصوصوی کاربران</Link>
            <Link href="/" className='text-xs'>کاربران الف</Link>
        </div>
        <div className='mt-5 col-start-5 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>قوانین و مقررات</div>
            <Link href="/" className='text-xs'>مقررات</Link>
            <Link href="/" className='text-xs'>حریم خصوصوی کاربران</Link>
            <Link href="/" className='text-xs'>کاربران الف</Link>
        </div>
        <div className='mt-5 col-start-6 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>قوانین و مقررات</div>
            <Link href="/" className='text-xs'>مقررات</Link>
            <Link href="/" className='text-xs'>حریم خصوصوی کاربران</Link>
            <Link href="/" className='text-xs'>کاربران الف</Link>
        </div>
        <div className='col-start-9 col-span-3 text-white text-sm mt-5' dir="rtl">
            <p>تلفن:= 000000000</p>
            <p>ادرس: جمهوری جمهوری جمهوری</p>
            <div className='flex flex-row gap-4 mt-3 items-start '>
                <Link href='/'>
                <FontAwesomeIcon icon={faGithub}  className='text-white' size='xl' />
                </Link>
                <Link href='/'>
                <FontAwesomeIcon icon={faFacebook}  className='text-white' size='xl' />
                </Link>
                <Link href='/'>
                <FontAwesomeIcon icon={faTwitter}  className='text-white' size='xl' />
                </Link>
                <Link href='/'>
                <FontAwesomeIcon icon={faPinterest}  className='text-white' size='xl' />
                </Link>
            </div>
        </div>
    </div>
  )
}
