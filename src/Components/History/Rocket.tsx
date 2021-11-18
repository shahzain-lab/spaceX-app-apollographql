import React from 'react'
import { useRocketFlightQuery } from '../../generated/graphql'

interface Props {
    id: string
}

const Rocket: React.FC<Props> = ({ id }) => {

    const { loading, error, data } = useRocketFlightQuery({ variables: { id: id } })
    if (loading) return <h1>Loading...</h1>
    if (error) console.log(error);


    return (
        <div className="bg-gray-800  w-2/3">
            {
                <div className="p-4">
                    <h1 className="text-gray-300 font-mono text-2xl">{data?.rocket?.rocket_name}</h1>
                    <p className="text-gray-500 px-2 py-5">{data?.rocket?.description}</p>
                </div>
            }
        </div>
    )
}

export default Rocket
