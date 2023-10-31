import GeneralButton from '@/atoms/Generals/buttons_General/Button'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Tags = () => {
    const filters = ["پرفروش ترین ها","بیشترین قیمت","کمترین قیمت","جدیدترین","بیشترین تخفیف"]
  return (
    <div className="w-full items-center flex flex-row justify-around  text-sm font-vazir">
      <div className="flex  bg-light ml-5 rounded-lg flex-row gap-5 items-baseline py-5 px-2 w-5/6" dir="rtl">
        <FontAwesomeIcon icon={faLayerGroup} className='relative top-[2px]'/>
        <span className='-mr-4'>ترتیب:</span>
        {filters.map((item) => (
          <Link href="/">
            <span>{item}</span>
          </Link>
        ))}
      </div>
      <div className='w-1/6 ml-20'>
            <GeneralButton size="md" text="مقایسه" />
      </div>
    </div>
  );
}

export default Tags