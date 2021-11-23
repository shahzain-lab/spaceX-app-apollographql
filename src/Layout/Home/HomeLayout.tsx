import React from 'react'
import Header from '../../Components/Container/Header';
import Missions from '../../Components/Missions/Missions';
import Rockets from '../../Components/Rockets/Rockets';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-800 w-full min-h-screen">
                <Missions />
                <Rockets />
            </div>
        </div>
    )
}

export default Home
