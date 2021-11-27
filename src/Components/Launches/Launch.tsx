import React from 'react'



interface Props {
    launch: any
}



const Launch: React.FC<Props> = ({
    launch
}) => {
    return (
        <div className="bg-gray-900 p-3 w-8/12 m-2 mt-5 rounded-lg border-l-2 border-gray-700">
            <div className="h-50 flex w-full">
                {launch?.links?.flickr_images?.slice(0, 2).map((image: string, i: number) => (
                    <img src={`${image}`} key={i} className="w-1/2" alt={`${launch.missionName}`} />
                ))}
            </div>
            <div className="flex justify-between m-3">
                <h1 className="text-gray-500 font-serif font-semibold text-2xl m-2">{launch?.missionName}</h1>
                <span className="flex text-xl text-gray-300 pt-2">Launch Year: <h1 className="text-gray-500 font-serif font-semibold text-2xl ml-1"> {launch?.launchYear}</h1></span>
            </div>
            <p className="text-gray-400 text-lg">{launch.details}</p>
            {launch.launchSuccess ? <h3 className="text-green-700 font-bold italic m-2">| Launch Succesfull</h3> : <h3 className="text-red-700 font-light m-2 italic">| Launch Failed</h3>}
            <div className="flex justify-between text-white">
                <div className="mt-2">
                    <a target="_blank" rel="noreferrer" title="wikipedia" href={launch.links?.wikipedia} className="p-2 m-1 text-lg rounded-full bg-purple-600"> <i className="fab fa-wikipedia-w"></i></a>
                    <a target="_blank" rel="noreferrer" title="video source" href={launch.links?.video_link} className="p-2 m-1 text-lg rounded-full bg-purple-600"> <i className="fas fa-video"></i></a>
                </div>
                <a target="_blank" rel="noreferrer" title="article link" href={launch.links?.article_link} className="p-2 text-lg rounded-full bg-purple-600"><i className="fas fa-paper-plane"></i></a>
            </div>
        </div>
    )
}

export default Launch
