import React from 'react'
import rocketImg from '../../assets/images/rocket.jpg';

const HeaderLeft = () => {
    return (
        <div className="relative w-100% h-full">
            <img
                className="rounded-full z-30"
                src={rocketImg}
                alt="rocket"
            />
            <div style={{ clipPath: "polygon(0 100%, 0 60%, 100% 5%, 100% 100%, 19% 100%, 15% 100%)" }} className=" w-full bg-gray-800 h-full">

            </div>
        </div>
    )
}

export default HeaderLeft
