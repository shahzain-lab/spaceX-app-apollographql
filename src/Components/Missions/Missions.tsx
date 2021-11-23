import React, { useState } from 'react'
import { useMissionsQuery } from '../../generated/graphql';
import Mission from './Mission';

export interface IMission {
    id?: string | null
    name?: string | null
    twitterPg?: string | null
    description?: string | null
    website?: string | null
}


const Missions = () => {
    const { loading, error, data } = useMissionsQuery();
    const [active, setActive] = useState(0);
    const [missionE, setmission] = useState<IMission>()

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>error...</h1>


    const activeClass = ' bg-black border-purple-700  border-l-4';

    return (
        <div className="w-full">
            <h1 className="text-white font-bold text-3xl pt-10 px-5 mx-4">Missions</h1>
            <div className="h-1 mx-8 w-20 bg-indigo-600"></div>
            <div className="container mx-auto m-10 w-4/5 flex ">
                <ul className=" w-2/6 bg-gray-900 list">
                    {
                        data?.missions?.map((mission, i) =>
                            !!mission && (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setActive(i)
                                        setmission({
                                            id: mission.mission_id,
                                            name: mission.mission_name,
                                            twitterPg: mission.twitter,
                                            description: mission.description,
                                            website: mission.website
                                        })

                                    }}
                                    className={`text-gray-300 truncate px-10 py-4 outline-none transition-all duration-500 hover:border-purple-700 border-transparent border-l-4 cursor-pointer ${missionE && active === i ? activeClass : ""}`}
                                >{mission?.mission_name}</li>
                            )
                        )
                    }
                </ul>
                <Mission mission={missionE} />
            </div>
        </div>
    )
}

export default Missions;