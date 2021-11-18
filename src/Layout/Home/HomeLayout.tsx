import React from 'react'
import Header from '../../Components/Container/Header';
import HistoryList from '../../Components/History/Rockets';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-800 w-full min-h-screen">
                <HistoryList />
            </div>
        </div>
    )
}

export default Home
