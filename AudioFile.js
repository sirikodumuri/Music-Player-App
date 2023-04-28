import React from 'react'

function AudioFile({song,getSongData,index}) {
  return (
    <div className='Player-Container' onClick={() => getSongData(song, index)}>
       <h4 className='song-name'> {song.name} </h4>
    </div>
  )
}

export default AudioFile