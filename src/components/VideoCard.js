import React from 'react'

const VideoCard = ({info}) => {
    const{snippet,statistics}=info;
    const{channelTitle, title,thumbnails}=snippet;

  return (
    <div className=' w-80 mx-0 ml-4 mb-6 px-2 rounded-xl overflow-hidden hover:transform hover:scale-110 transition-transform'>
        <img className="rounded-xl"alt="video" src={thumbnails.standard.url}/>
        <ul>
            <li className='font-bold py-2 text-sm font-sans'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard=({info})=>{
    return (
        <div className='p-1  m-1'>
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard