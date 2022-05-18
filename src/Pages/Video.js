import React from 'react'
//import VideoPlayer from '../components/VideoPlayerView';
import ReactPlayer from 'react-player';

function Video() {
  return (
      <div className="App" style={{ width: '100%', height:'100%', position: 'absolute'}}>
          <ReactPlayer
                url='https://alikingno.wistia.com/medias/av2i8ezxqv'
                width='100%'
                height='100%'
                controls
                playing
                volume='0.8'
            />
      </div>
    
  )
}

export default Video