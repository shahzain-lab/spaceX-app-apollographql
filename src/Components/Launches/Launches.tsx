import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch';
import LoadingBar from 'react-top-loading-bar';

// interface ILaunchLinks {
//     wikipedia?: string
//     video_link?: string
//     article_link?: string
//     flickr_images?: string[]
// }


// interface ILaunch {
//     flightNumber?: number
//     missionName?: string
//     details?: string
//     launchSuccess?: boolean
//     launchYear?: number
//     links?: ILaunchLinks
// }

const Launches = () => {
    const { loading, error, data, fetchMore } = useLaunchesQuery({ variables: { itemsUpt: 15 /* bec the API does'nt provide usefull images below 15 so I start 15 as default*/ } });

    if (loading) return <LoadingBar color="purple" height={4} progress={loading ? 100 : 0} />
    if (error) return <h1>Error...</h1>

    const updateQuery = (previousResult: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
            return previousResult;
        }
        return Object.assign({}, previousResult, {
            launches: [...previousResult?.launches, ...fetchMoreResult.launches],
        });
    };

    return (
        <div className="bg-gray-800 w-full h-full rounded-t-3xl">
            <h1 className="text-white font-bold text-3xl pt-10 px-5 mx-4">Launches</h1>
            <div className="h-1 mx-8 w-20 bg-indigo-600"></div>
            <div className="flex flex-col justify-center items-center">
                {
                    data?.launches?.map((launch, i) => launch && (
                        <Launch
                            key={i}
                            launch={{
                                flightNumber: launch.flight_number,
                                missionName: launch.mission_name,
                                details: launch.details,
                                launchSuccess: launch.launch_success,
                                launchYear: launch.launch_year,
                                links: launch.links
                            }}
                        />

                    ))
                }
            </div>
            <div className="w-full text-center py-4">
                <button
                    onClick={() => fetchMore({
                        variables: {
                            itemsUpt: data?.launches && data.launches[data.launches.length - 1]?.flight_number
                        },
                        updateQuery
                    })}
                    className="rounded text-lg mx-1 text-white bg-purple-600 hover:bg-purple-700 px-2 py-1"
                >Fetch More</button>
            </div>
        </div>
    )
}

export default Launches
