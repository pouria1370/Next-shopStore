import GeneralButton from '@/atoms/Generals/buttons_General/Button';
import Modal from '@/atoms/Generals/modal_General/Modal'
import React from 'react'

const BuyCardModal = (props) => {
  return (
    <Modal isShown={props.isShown} size="lg" rightHeader={"تحویل حضوری"} toggleHandler={props.toggleHandler}>
        <div className=" flex flex-row">
          <div className="basis-1/3 p-2 flex flex-wrap place-content-center  overflow-auto gap-3">
            {props.images.slice(0, 6).map((image) => (
              <div className="w-1/3 aspect-square">{image}</div>
            ))}
            <GeneralButton size="md" text="مشاهده شعب تکنولایف" />
          </div>
          <div className="basis-2/3 flex flex-col p-10 ">
            <article className="text-md font-vazir-adad text-end">
              شما می‌توانید علاوه بر اینکه سفارش‌های خود را در محل موردنظرتان
              تحویل بگیرید، این امکان فراهم است که سفارش‌تان را در یکی از 6 شعب
              تکنولایف در شهر تهران به صورت رایگان دریافت فرمایید.
            </article>
            <article className="text-sm font-vazir-adad text-end  mt-8">
              لازم بذکر است که محصولات بزرگ و سنگین امکان تحویل در شعب را
              ندارند. همچنین لوازم خانگی کوچک برای مثال: ( پلو پز، قهوه ساز،
              آبمیوه ‌گیری ) را صرفا می‌توان در دو شعبه بازار موبایل ایران شماره
              ۱ و ۲ تحویل گرفت. کارشناسان ما در تمام شعب تکنولایف آماده پاسخگویی
              و راهنمایی به شما برای خرید هستند.
            </article>
          </div>
        </div>
    </Modal>
  );
}

export default BuyCardModal