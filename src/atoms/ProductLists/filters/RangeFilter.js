import Dropdown from "@/atoms/Generals/dropdown_General/dropdown";
import GeneralInput from "@/atoms/Generals/input_General/Input_Genral";
import React, { useEffect, useState } from "react";

const RangeFilter = () => {
  const [gapPrice, setGapPrice] = useState(2000);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const rangeInput = document.querySelectorAll("#range-input input");
    const priceInput = document.querySelectorAll("#price-input input");
    const progress = document.querySelector("#slider .progress");
    console.log(rangeInput,priceInput,progress);
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minValue = parseInt(rangeInput[0].value);
        let maxValue = parseInt(rangeInput[1].value);
        if (maxValue - minValue < gapPrice) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxValue - gapPrice;
          } else {
            rangeInput[1].value = minValue + gapPrice;
          }
        } else {
          priceInput[0].value = minValue;
          priceInput[1].value = maxValue;
          progress.style.right = (minValue / rangeInput[0].max) * 100 + "%";
          progress.style.left =
            100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }
      });
    });
    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minValue = parseInt(priceInput[0].value);
        let maxValue = parseInt(priceInput[1].value);
        if (maxValue - minValue >= gapPrice && maxValue <= 10000) {
          if (e.target.classList.contains("input-min")) {
            rangeInput[0].value = minValue;
            progress.style.right = (minValue / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxValue;
            progress.style.left =
              100 - (maxValue / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
    return () => {
      rangeInput.forEach((input, index) => {
        input.removeEventListener("input", (e) => {
          let minValue = parseInt(rangeInput[0].value);
          let maxValue = parseInt(rangeInput[1].value);
          if (maxValue - minValue < gapPrice) {
            if (e.target.className === "range-min") {
              rangeInput[0].value = maxValue - gapPrice;
            } else {
              rangeInput[1].value = minValue + gapPrice;
            }
          } else {
            progress.style.right = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.left =
              100 - (maxValue / rangeInput[1].max) * 100 + "%";
          }
        });
      });

      priceInput.forEach((input) => {
        input.removeEventListener("input", (e) => {
          let minValue = parseInt(priceInput[0].value);
          let maxValue = parseInt(priceInput[1].value);
          if (maxValue - minValue >= gapPrice) {
            if (e.target.className === "input-min") {
              rangeInput[0].value = minValue;
              progress.style.right = (minValue / rangeInput[0].max) * 100 + "%";
            } else {
              rangeInput[1].value = maxValue;
              progress.style.left =
                100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }
          }
        });
      });
    };
  }, [toggle]);

  return (
    <Dropdown handler={(event) => setToggle(event)} isShow={true} text="فیلتر بر اساس قیمت">
      <div className="wrapper">
        <div id="slider">
          <div className="progress"></div>
        </div>
        <div id="range-input" className="flex flex-row mb-5 ">
          <input
            type="range"
            defaultValue="2500"
            className="range-min"
            min="0"
            step="100"
            max="10000"
          />
          <input
            type="range"
            defaultValue="7500"
            className="range-max"
            min="0"
            step="100"
            max="10000"
          />
        </div>
        <div className="font-vazir-adad text-md flex flex-row justify-between relative -top-3">
          <label>0</label>
          <label>10000</label>
        </div>
        <div id="price-input">
          <div className="field">
            <span className="text-sm font-vazir text-text">محدوده قیمت از</span>
            <input
              type="number"
              defaultValue="2500"
              className="input-min border font-vazir-adad border-gray border-1"
            />
          </div>
          <div className="field">
            <span className="text-sm font-vazir text-text">محدوده قیمت تا</span>
            <input
              type="number"
              defaultValue="7500"
              className="input-max border font-vazir-adad border-gray border-1"
            />
          </div>
          {/* <GeneralInput inputProps={{disabled:false,step:20,min:20,max:100,defaultValue:50}} label="test" type="range" name="testNumber" inputClassName="bg-success text-xl" contaienrClassName=" p-5"/> */}
        </div>
      </div>
    </Dropdown>
  );
};

export default RangeFilter;
