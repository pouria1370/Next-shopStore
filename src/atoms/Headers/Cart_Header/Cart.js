import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import shopIcon from '../../../assets/icons/shopIcon.svg'

const Cart = () => {
  return (
    <Link href="/" className='lg:border-2 rounded-md px-2 h-[2.25rem]  flex items-center justify-end'>
0<FontAwesomeIcon icon={faCartShopping} className='text-black' />

    </Link>
  )
}

export default Cart