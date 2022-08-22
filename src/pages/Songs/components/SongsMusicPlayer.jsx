import React from 'react'
import { greenColor, greyColor } from '../../../utils/constants'
import { TbMusic, TbRepeat, TbRepeatOnce, TbArrowsShuffle, TbVolume, TbVolume2, TbVolume3, TbPlayerTrackPrev, TbPlayerTrackNext } from 'react-icons/tb'
import { useState } from 'react'
import { IoPause, IoPlay } from 'react-icons/io5'

const SongsMusicPlayer = () => {
    
    //Setting the local state
    const [isPlayerControlHovered, setIsPlayerControlHovered] = useState({
        hover: false,
        next: false,
        play: false,
        prev: false,
        slide: false,
        color: ""
    });

    const [musicPlayOrder, setMusicPlayOrder] = useState("repeat");
    const [playPause, setPlayPause] = useState("play")
    const [volumeBtn, setVolumeBtn] = useState("volume1")

    // Music player handlers
    const handleVolumeBtnClick = () => {
        switch(volumeBtn) {
            case "volume1":
                setVolumeBtn("volume2")
                break
            case "volume2":
                setVolumeBtn("volumeOff")
                break
            case "volumeOff":
                setVolumeBtn("volume1")
                break
            default:
                break
        }
    }

    const handleMusicOrderClick = () => {
        switch(musicPlayOrder) {
            case "repeat":
                setMusicPlayOrder("repeat_once")
                break
            case "repeat_once":
                setMusicPlayOrder("shuffle")
                break
            case "shuffle":
                setMusicPlayOrder("repeat")
                break
            default:
                break
        }
    }

    const handlePlayerControlIsHovered = (control) => {
        switch(control) {
            case "prev":
                setIsPlayerControlHovered({
                    hover: true,
                    prev: true,
                    color: 'white'
                })
                break;
            case "play":
                setIsPlayerControlHovered({
                    hover: true,
                    play: true,
                    color: 'white'
                })
                break;
            case "next":
                setIsPlayerControlHovered({
                    hover: true,
                    next: true,
                    color: 'white'
                })
                break;
            case "slide":
                setIsPlayerControlHovered({
                    hover: true,
                    slide: true,
                    color: 'white'
                })
                break;
            case "repeat":
                setIsPlayerControlHovered({
                    hover: true,
                    repeat: true,
                    color: 'white'
                })
                break;
            case "volume":
                setIsPlayerControlHovered({
                    hover: true,
                    volume: true,
                    color: 'white'
                })
                break;
            default: 
                break;
        }
    }

    const handleControlIsNotHovered = () => {
        setIsPlayerControlHovered({
        hover: false,
        next: false,
        play: false,
        prev: false,
        slide: false,
        volume: false,
        repeat: false,
        color: ""
      })
    }

    return (
        <div className={`bg-white h-24 absolute bottom-0 left-0 shadow-[o_o_15px_-3px_rgba(0,0,0,0.2)] px-6 flex justify-between items-center`}
        style={{
            width: "calc(100vw - 4vw)",
          }} 
        >
            <div className={`flex`}>
                <span
                    className={`border-2 border-[#a2a7a2] rounded-full flex justify-center items-center p-1`}>
                    <TbMusic 
                        size={40} 
                        color={greenColor} 
                    />
                </span>
                <p className={`ml-2 font-['PoppinsMedium']`}>Music Name</p>
            </div>
            <div className={`flex justify-center items-center`}>
                <span
                    onMouseOver={() => handlePlayerControlIsHovered("prev")}
                    onMouseOut={() => handleControlIsNotHovered()}
                    className={`border-2 hover:bg-[#5BAF4F] border-[#a7a2a2] hover:cursor-pointer rounded-full flex justify-center items-center p-2`}>
                        <TbPlayerTrackPrev 
                            size={25} 
                            color={isPlayerControlHovered.prev ? "white" : greyColor} 
                        />
                </span>
                <span
                    onMouseOver={() => handlePlayerControlIsHovered("play")}
                    onMouseOut={() => handleControlIsNotHovered()}
                    onClick={() => playPause === "play" ? setPlayPause("pause") : setPlayPause("play")}
                    className={`border-2 hover:bg-[#5BAF4F] border-[#a7a2a2] hover:cursor-pointer rounded-full flex justify-center items-center p-2 mx-5`}>
                    {playPause === "play" ? 
                    (
                        <IoPlay
                            size={40} 
                            color={isPlayerControlHovered.play ? "white" : greyColor} 
                        />
                    ) : (
                        <IoPause
                            size={40} 
                            color={isPlayerControlHovered.play ? "white" : greyColor} 
                        />
                    )}
                </span>
                <span
                    onMouseOver={() => handlePlayerControlIsHovered("next")}
                    onMouseOut={() => handleControlIsNotHovered()}
                    className={`border-2 hover:bg-[#5BAF4F] border-[#a7a2a2] hover:cursor-pointer rounded-full flex justify-center items-center p-2`}>
                    <TbPlayerTrackNext 
                        size={25} 
                        color={isPlayerControlHovered.next ? "white" : greyColor} 
                        />
                </span>
                <div className={`flex justify-center items-center mx-7`}>
                    <span
                        onMouseOver={() => handlePlayerControlIsHovered("volume")}
                        onMouseOut={() => handleControlIsNotHovered()}
                        onClick={() => handleVolumeBtnClick()}
                        className={`hover:cursor-pointer mx-2 rounded-full flex justify-center items-center`}>
                        { volumeBtn === "volume1" ? (
                            <TbVolume 
                                size={25} 
                                color={isPlayerControlHovered.volume ? greenColor : greyColor} 
                            />
                        ) : volumeBtn === "volume2" ? (
                            <TbVolume2 
                                size={25} 
                                color={isPlayerControlHovered.volume ? greenColor : greyColor} 
                            />
                        ) : (
                            <TbVolume3
                                size={25} 
                                color={isPlayerControlHovered.volume ? greenColor : greyColor} 
                            />
                        )}
                    </span>

                    <div className={`group h-1 w-24 relative cursor-pointer bg-[#a7a2a2]`}>
                        <div className={`h-1 w-16 bg-[#666666] relative top- left-0 after:absolute after:w-2.5 cursor-pointer after:h-2.5 after:rounded-full after:hover:cursor-pointer group-hover:after:bg-yellow-600 after:bg-[#a7a2a2] after:top-[-70%] after:right-0`}></div>
                    </div>

                </div>
                <span
                    onMouseOver={() => handlePlayerControlIsHovered("repeat")}
                    onMouseOut={() => handleControlIsNotHovered()}
                    onClick={() => handleMusicOrderClick()}
                    className={`hover:cursor-pointer mx-2 rounded-full flex justify-center items-center`}>
                    { musicPlayOrder === "repeat" ? (
                        <TbRepeat 
                            size={25} 
                            color={isPlayerControlHovered.repeat ? greenColor  : greyColor} 
                        />                        
                    ) : musicPlayOrder === "repeat_once" ? (
                        <TbRepeatOnce 
                            size={25} 
                            color={isPlayerControlHovered.repeat ? greenColor  : greyColor} 
                        />
                    ) : (
                        <TbArrowsShuffle 
                            size={25} 
                            color={isPlayerControlHovered.repeat ? greenColor  : greyColor} 
                        />
                    )}
                </span>
                <p className={`mx-2 font-['PoppinsLight'] select-none`}><i>00:00/00:00</i></p>
            </div>
        </div>
        )
    }

    export default SongsMusicPlayer