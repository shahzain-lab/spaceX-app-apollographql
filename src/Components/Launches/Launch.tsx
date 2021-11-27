import React from 'react'

interface ILaunchLinks {
    wikipedia?: string
    video_link?: string
    article_link?: string
    flickr_images?: string[]
}

interface ILaunch {
    flight_number?: number
    mission_name?: string
    details?: string
    launch_success?: boolean
    launch_year?: number
    links?: ILaunchLinks
}

interface Props {
    launch?: any
}



const Launch: React.FC<Props> = ({ launch }) => {
    return (
        <div className="bg-gray-900 p-3 h-72 w-8/12 m-2 mt-5 ">
            <div className="h-40 grid grid-cols-2">
                {launch?.links?.flickr_images?.map((image: string, i: number) => (
                    <img src={`${image}`} className={`${i === 2 ? 'col-start-1 col-end-3' : ""} h-1/3`} alt={`${launch.mission_name}`} />
                ))}
            </div>
            <h1>{launch?.mission_name}</h1>

        </div>
    )
}

export default Launch
