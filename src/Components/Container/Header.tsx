import React from 'react'
import HeaderLeft from './HeaderLeft'

const Header = () => {
    return (
        <div className="bg-rocket-image flex justify-between items-center w-full h-screen backdrop-opacity-2 bg-fixed">
            <div className="text-center p-10 mb-10">
                <h2 className="bg-clip-text font-mono text-4xl text-transparent font-semibold bg-gradient-to-r from-green-400 to-purple-500">ROAD TO THE RED PALNET</h2>
                <p className="text-gray-500 py-5 text-xl">spaceX design,Launches and manufactures adavanced rockets and spacecraft</p>
                <button className="rounded text-lg mx-1 text-white bg-purple-600 hover:bg-purple-700 px-2 py-1">Visit Launches <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            </div>
            {/* <HeaderLeft /> */}
        </div>
    )
}

export default Header
