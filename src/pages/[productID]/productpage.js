import React, { useEffect, useState } from "react";
import MainLayout from "@/layouts/mainLayout/mainLayout";
import UpperFastAccess from "@/organismes/ProductLists/UpperFastAccess/UpperFastAccess";
import { useRouter } from "next/router";
import { SampleListProduct } from "@/data/data";
import BuyCard from "@/organismes/product/BuyCard/BuyCard";

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
     {/* {itemKey && <div>
       <UpperFastAccess links={itemKey.upperAccess}/>
      </div>
      <div className="flex flex-row bg-primary">
        <div className="">
          <BuyCard texts={itemKey.texts}/>
        </div>
        <div className="">scss</div>
      </div> } */}
    </MainLayout>
  )
}

export default ProductPage;
