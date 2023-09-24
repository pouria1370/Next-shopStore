import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const Cart = () => {
  return (
    <Link href="/" className='border-2 px-2 h-[2.25rem]  flex items-center'>
<FontAwesomeIcon icon={faCartShopping} className='text-black' />
    </Link>
  )
}

export default Cart