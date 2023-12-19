import Tooltip from '@/atoms/Generals/Tooltip_General/Tooltip'
import React from 'react'

const IconBadge = (props) => {
  return (
    <Tooltip text="honey this is a test" >
    <div className={["inline-block hover:cursor-pointer font-vazir-adad text-sm py-1 px-2  border-1 border-" , `${props.color}`,` shadow-md shadow-`, `${props.color}`].join("")}>
        {
            props.text ? <spna className="mr-5">{props.text}</spna> : null
        }
        {props.icon}
    </div>
    </Tooltip>
  )
}

export default IconBadge