import GeneralButton from '@/atoms/Generals/buttons_General/Button'
import Logo_Header from '@/atoms/Headers/logo_Header/logo_Header'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faPinterest, faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import assurance from '../../assets/images/assurance.png'
import sanaye from '../../assets/images/sanaye.svg'
import mojavez from '../../assets/images/mojavez.webp'
import sabt from '../../assets/images/sabt.webp'
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
            <div className='font-medium text-sm'>پس از خرید</div>
            <Link href="/" className='text-xs'>تضمین رجیستری</Link>
            <Link href="/" className='text-xs'>رویه های بازگرداندن کالا</Link>
            <Link href="/" className='text-xs'>سوالات متدداول رجیستری</Link>
            <Link href="/" className='text-xs'>رهگیری سفارش ها </Link>
        </div>
        <div className='mt-5 col-start-4 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>پیش از خرید</div>
            <Link href="/" className='text-xs'>راهنمای خرید از تکنولایف</Link>
            <Link href="/" className='text-xs'>راهنمای خرید اقساطی</Link>
            <Link href="/" className='text-xs'>روش های خرید از تکنولایف</Link>
            <Link href="/" className='text-xs'>ضمانت هفت روزه تکنولایف</Link>
            <Link href="/" className='text-xs'>شیوه ها و هزینه ارسال</Link>
        </div>
        <div className='mt-5 col-start-5 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>درباره ما</div>
            <Link href="/" className='text-xs'>تکنولایف در یک نگاه</Link>
            <Link href="/" className='text-xs'>اهداف و تعهدات ما</Link>
            <Link href="/" className='text-xs'>سرگذشت تکنولایف</Link>
            <Link href="/" className='text-xs'>تماس با ما</Link>
        </div>
        <div className='mt-5 col-start-6 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>دسترسی سریع</div>
            <Link href="/" className='text-xs'>بلاگ</Link>
            <Link href="/" className='text-xs'>قیمت روز گوشی</Link>
            <Link href="/" className='text-xs'>گوشی سامسونگ</Link>
            <Link href="/" className='text-xs'>گوشی ایفون</Link>
            <Link href="/" className='text-xs'>گوشی شیائومی</Link>
            <Link href="/" className='text-xs'>گوشی پوکو</Link>
            <Link href="/" className='text-xs'>خرید عمده گوشی</Link>
            <Link href="/" className='text-xs'>مقایسه گوشی</Link>
            <Link href="/" className='text-xs'>قیمت لپتاپ</Link>
            <Link href="/" className='text-xs'>هندزفری بلوتوثی</Link>
        </div>
        <div className='mt-5 col-start-7 col-span-1 flex-col flex gap-3 text-white' dir='rtl'>
            <div className='font-medium text-sm'>پر فروش ترین محصولات</div>
            <Link href="/" className='text-xs'>شیائومی نوت 11</Link>
            <Link href="/" className='text-xs'>سامسونگ a32 گوشی</Link>
            <Link href="/" className='text-xs'>x4 پوکو پرو</Link>
            <Link href="/" className='text-xs'>a23 گوشی سامسونگ </Link>
            <Link href="/" className='text-xs'>a53 گوشی سامسونگ </Link>
            <Link href="/" className='text-xs'>S23 ultra گوشی سامسونگ </Link>
            <Link href="/" className='text-xs'>ساعت هوشمند</Link>
            <Link href="/" className='text-xs'>پرینتر</Link>
            <Link href="/" className='text-xs'>هارد اکسترنال</Link>
            <Link href="/" className='text-xs'>پنکه</Link>
        </div>
        <div className=' col-start-9 col-span-3 text-white text-sm mt-5' dir="rtl">
            <p className='mb-5' >تلفن: 47708000-021 - 1077500-021 </p>
            <p className='whitespace-pre'>info@technolife.ir :email</p>
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
        <div className='col-start-2 flex gap-2'>
        <Link href='/'>
        <div>
            <Image  width={20} height={20} src={sabt}/>
        </div>
        </Link>
        <Link href='/'>
        <div>
            <Image width={20} height={20}  src={sanaye}/>
        </div>
        </Link>
        <Link href='/'>
        <div>
            <Image width={20} height={20}  src={mojavez}/>
        </div>
        </Link>
        <Link href='/'>
        <div>
            <Image  width={20} height={20} src={assurance}/>
        </div>
        </Link>
        </div>
    </div>
  )
}
