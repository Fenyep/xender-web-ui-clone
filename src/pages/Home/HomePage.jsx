import React, { useState } from 'react';
import Phone from '../../assets/images/phone.png'

import {Helmet} from 'react-helmet';
import { IoGridOutline, IoImageOutline } from 'react-icons/io5';
import { BsFolder2, BsPlayBtn } from 'react-icons/bs';
import { TbMusic } from 'react-icons/tb';
import { RiFileList2Line } from 'react-icons/ri';
import HomeItem from './components/HomeItem/HomeItem';
import { blueColor, greenColor, homeItemIconSize, pinkColor, purpleColor, redColor, yellowColor, menuItemBorderColor, greySecondaryColor } from '../../utils/constants';

const HomePage = () => {

  const [itemIsHovered, setItemIsHovered] = useState({
    hover: false,
    color: ""
  });

  const handleItemIsHovered = (color) => {
      setItemIsHovered({
        hover: true,
        color: color
      })
  }
  
  const handleItemIsNotHovered = () => {
    setItemIsHovered({
      hover: false,
      color: ""
    })
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Home</title>
      </Helmet>

      <div className='pt-[10vh] pl-[3vw] flex'>
        <img src={Phone} alt="phone" />
        <div className='w-[40vw] h-full ml-[3vw] pt-[2vh]'>
          <div>
            <span className={`font-['PoppinsMedium'] text-2xl mr-6`}>LG-H870</span><span className={`font-['PoppinsMedium'] text-[${greySecondaryColor}]`}>Android 9</span>
          </div>
          <div className='grid gap-6 grid-cols-4 p-6'>
            <HomeItem count={"308"} >
              <span
                onMouseOver={() => handleItemIsHovered(redColor)}
                onMouseOut={() => handleItemIsNotHovered()}
                className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#E14037]`}>
                  <IoImageOutline 
                    size={homeItemIconSize}
                    color={itemIsHovered.color === redColor ? "white" : redColor} 
                  />
              </span>
            </HomeItem>
            <HomeItem count={"23"} >
              <span
                onMouseOver={() => handleItemIsHovered(blueColor)}
                onMouseOut={() => handleItemIsNotHovered()}
                className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#5596F3]`}>
                  <BsPlayBtn 
                    size={homeItemIconSize} 
                    color={itemIsHovered.color === blueColor ? "white" : blueColor} 
                  />
              </span>
            </HomeItem>
            <HomeItem count={"43"}>
              <span
                  onMouseOver={() => handleItemIsHovered(yellowColor)}
                  onMouseOut={() => handleItemIsNotHovered()}
                  className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#EFBD5F]`}>
                    <TbMusic 
                      size={homeItemIconSize} 
                      color={itemIsHovered.color === yellowColor ? "white" : yellowColor} 
                    />
              </span>
            </HomeItem>
            <HomeItem count={"2"} >
              <span
                  onMouseOver={() => handleItemIsHovered(greenColor)}
                  onMouseOut={() => handleItemIsNotHovered()}
                  className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#5BAF4F]`}>
                    <RiFileList2Line 
                      size={homeItemIconSize} 
                      color={itemIsHovered.color === greenColor ? "white" : greenColor} 
                    />
              </span>
            </HomeItem>
            <HomeItem count={""} >
              <span
                  onMouseOver={() => handleItemIsHovered(pinkColor)}
                  onMouseOut={() => handleItemIsNotHovered()}
                  className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#E02963]`}>
                    <IoGridOutline 
                      size={homeItemIconSize} 
                      color={itemIsHovered.color === pinkColor ? "white" : pinkColor} 
                    />
              </span>
            </HomeItem>
            <HomeItem count={""} >
              <span
                  onMouseOver={() => handleItemIsHovered(purpleColor)}
                  onMouseOut={() => handleItemIsNotHovered()}
                  className={`border-2 border-[${menuItemBorderColor}] rounded-full flex justify-center items-center p-7 hover:bg-[#9C27B0]`}>
                    <BsFolder2 
                      size={homeItemIconSize} 
                      color={itemIsHovered.color === purpleColor ? "white" : purpleColor} 
                    />
              </span>
            </HomeItem>
          </div>

          <div className={`mt-8 text-white font-['PoppinsMedium]`}>
            <div className='w-full flex justify-center items-center h-5 bg-[#BBBBBB] rounded-lg mb-3 relative'>
              <span className='z-10'>
                Stockage interne: 9.04GB/22.42GB
              </span>  
              <span className='rounded-l-lg w-2/5 h-5 bg-[#E46E2C] absolute top-0 left-0'></span>
            </div>
            <div className='w-full h-5 flex justify-center items-center bg-[#BBBBBB] rounded-lg relative'> 
              <span className='z-10'>
                Carte SD: 1.44GB/14.73GB
              </span>
              <span className='rounded-l-lg w-1/6 h-5 bg-[#65BBC0] absolute top-0 left-0'></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage