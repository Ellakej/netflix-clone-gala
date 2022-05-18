import React from 'react'
import ReactPlayer from 'react-player';

function Extra() {
  return (
    <div className="App" style={{ width: '100%', height:'100%', position: 'absolute'}}>
          <ReactPlayer
                url='https://vimeo.com/710987485'
                width='100%'
                height='100%'
                controls
                playing
                volume='0.8'
            />
      </div>
  )
}

export default Extra