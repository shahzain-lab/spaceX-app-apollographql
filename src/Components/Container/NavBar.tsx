import React from 'react'
import { Link } from 'react-router-dom';
import logoX from '../../assets/images/logoX.png';


const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 text-white py-2 px-1">
            <a href="#" className="flex">
                <i className="fa fa-rocket rounded-full py-2 px-2 mx-1 bg-purple-600" aria-hidden="true"></i>
                <img
                    src={logoX}
                    alt="logo"
                    className="w-20 font-lg"
                />
            </a>
            <Link to="launches"><button className="rounded text-lg mx-1  bg-purple-600 hover:bg-purple-700 px-2 py-1">Visit Launches <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>

        </div>
    )
}

export default NavBar
