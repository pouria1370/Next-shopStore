import IconBatch from '@/atoms/BuyCard/IconBatch/IconBatch'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopLock,faAward,faWarehouse} from "@fortawesome/free-solid-svg-icons";

const BuyCard = (props) => {
  return (
    <div className='flex flex-col bg-gray bg-opacity-30 ml-10 px-5'>
        <IconBatch text={props.texts.textShop} icon={<FontAwesomeIcon icon={faShopLock} />} />
        <IconBatch icon={<FontAwesomeIcon icon={faWarehouse} />} text={props.texts.textWarehouse}/>
        <IconBatch icon={<FontAwesomeIcon icon={faAward} />} text={props.texts.award}/>

    </div>
  )
}

export default BuyCard