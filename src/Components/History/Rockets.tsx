import React, { useState } from 'react'
import { useRocketsFlightQuery } from '../../generated/graphql';
import Rocket from './Rocket';

const RocketList = () => {
    const { loading, error, data } = useRocketsFlightQuery();
    const [active, setActive] = useState(0);
    const [rocketId, setRocketId] = useState('1')

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>error...</h1>


    const activeClass = ' bg-black border-purple-700  border-l-4';

    return (
        <div className="w-screen">
            <h1 className="text-white font-bold text-3xl pt-10 px-5 mx-4">Rocket</h1>
            <div className="h-1 mx-8 w-20 bg-indigo-600"></div>
            <div className="container mx-auto m-10 w-4/5 flex">
                <ul className=" w-2/6 bg-gray-900 list">
                    {
                        !!data &&
                        data?.rockets?.map((rocket, i) =>
                            !!rocket && (
                                <li
                                    key={rocket.id}
                                    onClick={() => {
                                        setActive(i)
                                        setRocketId(`${rocket.id}`)
                                    }}
                                    className={`text-gray-300 truncate px-10 py-4 outline-none transition-all duration-500 hover:border-purple-700 border-transparent border-l-4 cursor-pointer ${active === i ? activeClass : ""}`}
                                >{rocket?.rocket_name}</li>
                            )
                        )
                    }
                </ul>
                <Rocket id={rocketId} />
            </div>
        </div>
    )
}

export default RocketList;