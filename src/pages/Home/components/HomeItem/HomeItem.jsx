import React from 'react'
import { menuItemTextColor } from '../../../../utils/constants'

const HomeItem = ({children, count}) => {

  return (
    <div className={`w-[50px] flex flex-col justify-center items-center font-['PoppinsLight'] bg-white`}>
            {children}
        <span className={`text-[${menuItemTextColor}] mt-[5px]`}>{count}</span>
    </div>
  )
}

export default HomeItem

