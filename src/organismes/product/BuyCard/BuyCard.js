import IconBatch from '@/atoms/BuyCard/IconBatch/IconBatch'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopLock,faAward,faWarehouse, faShop, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { turnToPrice } from '@/utilities/utility';
import GeneralButton from '@/atoms/Generals/buttons_General/Button';
import BuyCardModal from '../BuCardModal.js/BuyCardModal';

const BuyCard = (props) => {
  const [toggleBuyCardModal, setToggleBuyCardModal] = useState(false)
  console.log(toggleBuyCardModal);
  return (
    <>
      <div className="flex flex-col bg-gray bg-opacity-10 mx-10 px-5 h-[300px] shadow-md rounded-md">
        <IconBatch
          text={props.texts.textShop}
          icon={<FontAwesomeIcon icon={faShopLock} />}
        />
        <IconBatch
          icon={<FontAwesomeIcon icon={faWarehouse} />}
          text={props.texts.textWarehouse}
        />
        <IconBatch
          icon={<FontAwesomeIcon icon={faAward} />}
          text={props.texts.textAward}
        />
        <span className="font-vazir-adad text-xl text-dark mt-5 whitespace-pre mb-2">
          {turnToPrice(props.price, props.off)}{" "}
          <span className="font-vazir text-sm">تومان</span>{" "}
        </span>
        <div className="self-center">
          <GeneralButton size="lg" text="افزودن به سبد خرید" />
        </div>
      </div>
      <div onClick={() => setToggleBuyCardModal(prevState =>!prevState)} className="bg-info shadow-md bg-opacity-60 text-dark flex hover:cursor-pointer flex-row items-center justify-between place-content-evenly  mx-10 my-5 px-5 h-[50px] rounded-md">
        <FontAwesomeIcon
          className="mr-3.5 text-primary hover:text-secondary"
          icon={faArrowLeft}
        />
        <span className="font-vazir text-sm -mr-[3rem]">
          امکان تحویل حضوری در شعب تکنولایف{" "}
        </span>
        <FontAwesomeIcon
          icon={faShop}
          className="text-primary hover:text-secondary"
        />
      </div>
      <BuyCardModal images={props.images} isShown={toggleBuyCardModal} toggleHandler={()=>setToggleBuyCardModal(false)}/>
    </>
  );
}

export default BuyCard