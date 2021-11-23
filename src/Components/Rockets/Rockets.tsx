import React from 'react'
import { useRocketsFlightQuery } from '../../generated/graphql';


const Rockets = () => {
    const { loading, error, data } = useRocketsFlightQuery();
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>error...</h1>
    console.log(data)
    return (
        <div className="flex flex-wrap justify-around h-auto w-full">
            {
                data?.rockets?.map(rocket => (
                    <div className="flex flex-col justify-center bg-gray-900 md:w-1/3 w-6/12 md:h-2/3 h-1/2 p-3 rounded-lg m-2 " >
                        {
                            rocket?.flickr_images?.slice(0, 1).map(image => (
                                <div className="w-full h-72 pb-2 bg-purple-900 bg-opacity-100 bg-cover bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url(' + image + ')' }}>

                                </div>
                            ))
                        }
                        <div>
                            <h2 className="text-gray-300 font-sans font-semibold text-2xl p-2">{rocket?.rocket_name}</h2>
                            <p className="text-gray-500 my-6 overflow-ellipsis">{rocket?.description}</p>
                            <a href={`${rocket?.wikipedia}`} rel="noreferrer" target="_blank"
                                className="rounded text-lg mx-2 bg-purple-600 hover:bg-purple-700 px-2 py-1 text-white font-semibold">Wikipedia</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Rockets;
