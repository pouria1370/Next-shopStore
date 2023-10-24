import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const Dropdown = ({children,text,handler}) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      if (handler) handler(toggle);
    }, [toggle]);
    
    return (
      <div className="flex mx-2 my-1 cursor-pointer flex-col" >
        <div className="flex flex-row  justify-between w-full items-center " onClick={() => setToggle(!toggle)}> 
          <div className="font-vazir text-sm text-text ">{text}</div>
          <div>
            {toggle ? (
              <FontAwesomeIcon className="text-gray text-sm" icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon className="text-gray text-sm" icon={faAngleDown} />
            )}
          </div>
        </div>
        {toggle ? children : null}
      </div>
    );
  
}

export default Dropdown