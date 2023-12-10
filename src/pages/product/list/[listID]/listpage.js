import UpperFastAccess from "@/organismes/ProductLists/UpperFastAccess/UpperFastAccess";
import { ListpageUpperAccess, SampleListProduct } from "@/data/data";
import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";
import SideFilter from "@/organismes/ProductLists/SideFilter/SideFilter";
import Tags from "@/organismes/ProductLists/Tags/Tags";
import ProductCard from "@/organismes/ProductLists/ProductCard/ProductCard";
import Products from "@/organismes/ProductLists/Products/Products";
 
const ListPage = () => {
  return (
    <MainLayout>
      <UpperFastAccess links={ListpageUpperAccess} />
      <div className="flex flex-row "  dir="rtl">
        <div className="w-1/6 sticky">
          <SideFilter />
        </div>
        <div className="w-5/6 mr-20">
          <Tags/>
          <Products productsList={SampleListProduct.products}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default ListPage;
