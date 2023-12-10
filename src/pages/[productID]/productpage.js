import React from "react";
import MainLayout from "@/layouts/mainLayout/mainLayout";
import UpperFastAccess from "@/organismes/ProductLists/UpperFastAccess/UpperFastAccess";
import { useRouter } from "next/router";
import { SampleListProduct } from "@/data/data";

const ProductPage = () => {

  const router = useRouter();
  const item = SampleListProduct.products.find(i => i.id == router.query.productID);
  console.log(item);
  return (
    <MainLayout>
      <div>
        <UpperFastAccess links={item.upperAccess}/>
      </div>
    </MainLayout>
  )
}

export default ProductPage;
