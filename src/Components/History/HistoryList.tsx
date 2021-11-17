import React from 'react'
import { useHistoriesFlightQuery } from '../../generated/graphql';


const HistoryList = () => {
    const { loading, error, data } = useHistoriesFlightQuery();

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>error...</h1>

    return (
        <div>
            <ul>
                {
                    data?.history?.map((history) => {
                    <li key={history?.id}>{history?.title}</li>
                })
                }
            </ul>
        </div>
    )
}

export default HistoryList;