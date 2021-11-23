import React from 'react'
import logoX from '../../assets/images/logoX.png';

const Footer = () => {
    return (
        <div className="bg-black h-24 flex items-center divide-x divide-gray-500">
            <a href="#" className="flex mx-1">
                <i className="fa fa-rocket text-white rounded-full py-2 px-2 mx-1 bg-purple-600" aria-hidden="true"></i>
                <img
                    src={logoX}
                    alt="logo"
                    className="w-20 font-lg"
                />
            </a>
            <div className="text-gray-400 flex flex-col px-2 ">
                <a href="http://github.com/shahzain-lab" rel="noreferrer" target="_blank" >@Github</a>
                <a href="https://twitter.com/its_shahzain" rel="noreferrer" target="_blank" >@Twitter</a>
            </div>
        </div>
    )
}

export default Footer
