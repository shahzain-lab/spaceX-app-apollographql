import React from 'react'
import Launches from '../../Components/Launches/Launches'

const LaunchesLayout = () => {
    return (
        <div className="w-full pt-60 min-h-screen bg-rocket-image backdrop-opacity-2 bg-fixed">
            <Launches />
        </div>
    )
}

export default LaunchesLayout
