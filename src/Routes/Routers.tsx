import React from 'react'
import HomeLayout from '../Layout/Home/HomeLayout'
import LaunchesLayout from '../Layout/Launches/LaunchesLayout'
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Components/NotFound';


const Routers = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="launches" element={<LaunchesLayout />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Routers;
