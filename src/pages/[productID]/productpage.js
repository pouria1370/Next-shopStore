import React, { useEffect, useState } from "react";
import MainLayout from "@/layouts/mainLayout/mainLayout";
import UpperFastAccess from "@/organismes/ProductLists/UpperFastAccess/UpperFastAccess";
import { useRouter } from "next/router";
import { SampleListProduct } from "@/data/data";
import BuyCard from "@/organismes/product/BuyCard/BuyCard";
import IconBadge from "@/atoms/Product/iconBadge/IconBadge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment, faHeart, faRing, faShare, faShop, faWeightScale } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const [itemKey, setItemKey] = useState()
  const router = useRouter();
  useEffect(() => {
  const item = SampleListProduct.products.find(i => i.id == router.query.productID);
    setItemKey(item)
  }, [])
  console.log(itemKey);
  return (
    <MainLayout>
     {itemKey && 
     <React.Fragment>
     <div>
       <UpperFastAccess links={itemKey.upperAccess}/>
      </div>
      <div className="flex flex-row">
        <div className="basis-[30%] ">
          <BuyCard texts={itemKey.texts} price={itemKey.currentPrice} off={itemKey.off} images={itemKey.images}/>
        </div>
        <div className="basis-[70%] ">
          <div className="flex flex-row gap-5 justify-start">
            <IconBadge  icon={<FontAwesomeIcon size="2x" icon={faHeart} className="text-danger"/>}  color="danger"/>
            <IconBadge  icon={<FontAwesomeIcon size="2x" icon={faShare} className="text-info"/>}  color="danger"/>
            <IconBadge  icon={<FontAwesomeIcon size="2x" icon={faComment} className="text-success"/>}  color="danger"/>
            <IconBadge  icon={<FontAwesomeIcon size="2x" icon={faBell} className="text-warning"/>}  color="danger"/>
            <IconBadge  icon={<FontAwesomeIcon size="2x" icon={faWeightScale} className="text-gray text-lg"/>}  color="danger"/>
          </div>
        </div>
      </div> 
      </React.Fragment>
      }
    </MainLayout>
  )
}

export default ProductPage;
