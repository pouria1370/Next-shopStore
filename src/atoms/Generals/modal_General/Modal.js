import React, { useEffect, useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = (props) => {
  const options = {
    lg: "flex flex-col z-50 text-gray self-center  overflow-y-auto h-4/5 w-3/4 bg-light",
    md: "flex flex-col z-50 text-gray self-center  overflow-y-auto h-[70%] w-[60%] bg-light",
    sm: "flex flex-col z-50 text-gray self-center  overflow-y-auto h-[50%] w-[50%] bg-light",
  };
  const [classConfig, setClassConfig] = useState(null);

  useEffect(() => {
    if (props.size) {
      switch (props.size) {
        case "lg":
          setClassConfig(options.lg);
          break;
        case "md":
          setClassConfig(options.md);
          break;
        case "sm":
          setClassConfig(options.sm);
          break;
        default:
          setClassConfig(options.lg);
          break;
      }
    } else {
      setClassConfig(options.lg);
    }
  }, [props.size]);

  return props.isShown ? (
    <div
      onClick={() => props.toggleHandler(false)}
      className="fixed flex  justify-center content-center  bg-dark bg-opacity-70  z-30 opacity-100 w-full inset-0 h-screen"
    >
      {classConfig ? (
        <div className={classConfig}>
          <div className="flex flex-row justify-between my-3 mx-11 border-b-2 pb-4">
            <FontAwesomeIcon icon={faCircleXmark} size="1x" />
            <span className="font-vazir text-xl">{props.rightHeader}</span>
          </div>
          {props.children}
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Modal;
