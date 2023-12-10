import { paginate } from "@/utilities/utility";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export const Pagination = ({ max, onCurrentHandler }) => {
  const [page, setPage] = useState({ current: 1, max: null, items: [] });
  useEffect(() => {
    let pagination = paginate(page.current, max);
    setPage({ ...page, items: pagination.items, max: max });
  }, [page.current, max]);

  const prevHandler = () => {
    if (page.current - 1 === 0) {
      setPage((prevState) => ({ ...prevState, current: 1 }));
      onCurrentHandler(1);
    } else {
      setPage((prevState) => ({
        ...prevState,
        current: prevState.current - 1,
      }));
      onCurrentHandler(page.current - 1);
      window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    }
  };
  const nextHandler = () => {
    if (page.current + 1 === max || page.current + 1 > max) {
      setPage((prevState) => ({ ...prevState, current: max }));
      onCurrentHandler(max);
    } else {
      setPage((prevState) => ({ ...prevState, current: prevState.current + 1 }));
      onCurrentHandler(page.current + 1);
      window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      dir="ltr"
      className=" my-6  w-full justify-center items-center  flex flex-row gap-5 translate-x-1/4 md:translate-x-24"
    >
      <span
        onClick={prevHandler}
        className=" hover:bg-secondary hover:text-white relative top-n1 bg-primary bg-opacity-50 text-primary w-[20px] text-center text-sm  h-[20px] rounded-full shadow-sm"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="align-middle" />
      </span>
      {page.items.map((i) =>
        i === page.current ? (
          <span className="text-secondary  font-vazir-adad pointer">
            {i}
          </span>
        ) : (
          <span className="font-vazir-adad cursor-pointer text-primary pointer" onClick={() =>{
            setPage(prevState => ({...prevState,current:i}));
            onCurrentHandler(i);
            window.scroll({
              top: 100,
              left: 100,
              behavior: "smooth",
            });
          }}>
            {i}
          </span>
        )
      )}
      <span
        onClick={nextHandler}
        className=" hover:bg-secondary hover:text-white relative top-n1 bg-primary bg-opacity-50 text-primary w-[20px] text-center text-sm  h-[20px] rounded-full shadow-lg"
      >
        <FontAwesomeIcon icon={faAngleRight} className="align-middle" />
      </span>
    </div>
  );
};
