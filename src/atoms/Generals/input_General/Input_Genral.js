import React, { useState } from 'react'

function GeneralInput({ type, name, label }) {
    const [active, setActive] = useState(false);
    const [focused, setFocused] = useState(false)
  
    function handleActivation(e) {
      setActive(!!e.target.value);
    }
  
    return (
        <div  
        dir='rtl'
        className={["relative border mx-auto w-1/2 flex flex-row items-center justify-center lg:[&&]:w-full rounded mb-2 text-white border-primary border-opacity-20", focused ? " [&&]:border-opacity-100" : ""].join(" ")}>
        <input
          className={[
            "outline-none  text-text bg-white  w-full font-vazir-adad rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2",
            active ? "pt-8" : ""
          ].join(" ")}
          id={name}
          name={name}
          type={type}
          onChange={handleActivation}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <label
          className={[
            "absolute top-0  right-0 flex font-vazir items-center text-smoky text-opacity-50 p-2 transition-all duration-200 ease-in-out",
            active ? "text-xs" : "text-sm"
          ].join(" ")}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    );
  }

export default GeneralInput


