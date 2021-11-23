import React from 'react'
import { IMission } from './Missions'

interface Props {
    mission?: IMission
}

const Mission: React.FC<Props> = ({ mission }) => {



    return (
        <div className=" w-2/3">
            {mission &&
                <div className="p-4 bg-gray-700 h-full rounded-r-lg">
                    <h1 className="text-gray-300 font-serif text-2xl">{mission?.name}</h1>
                    <div className="h-1 w-20 bg-indigo-600"></div>
                    <p className="text-gray-400 px-2 text-lg py-5 font-sans">{mission?.description}</p>
                    <a href={`${mission?.twitterPg}`} rel="noreferrer" target="_blank" className="rounded text-lg mx-1  bg-purple-600 hover:bg-purple-700 px-2 py-1 text-white font-semibold">Twitter</a>
                    <a href={`${mission?.website}`} rel="noreferrer" target="_blank" className="rounded text-lg mx-1  bg-purple-600 hover:bg-purple-700 px-2 py-1 text-white font-semibold">Website</a>
                </div>
            }
        </div>
    )
}

export default Mission
