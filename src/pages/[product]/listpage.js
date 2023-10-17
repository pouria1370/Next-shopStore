import UpperFastAccess from "@/organismes/ProductLists/UpperFastAccess/UpperFastAccess";
import { ListpageUpperAccess } from "@/data/data";
import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";
import SideFilter from "@/organismes/ProductLists/SideFilter/SideFilter";

const ListPage = () => {
  return (
    <MainLayout>
      <UpperFastAccess links={ListpageUpperAccess} />
      <div className="flex flex-row" dir="rtl">
        <div className="w-1/6">
          <SideFilter />
        </div>
      </div>
    </MainLayout>
  );
};

export default ListPage;
