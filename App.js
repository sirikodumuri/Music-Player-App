
import AudioFile from './COMPONENTS/AudioFile';
import { useState } from 'react';
import  {audio}  from './AudioContent';
import Player from './COMPONENTS/Player';
import './App.css';


function App() {
  const [songs, setSongs] = useState(audio);
  const [currentIndex, setCurrentindex] = useState(null);
  const [currentSong , setCurrentsong] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentindex(index)
       setCurrentsong(song)
  }
  const nextSong = () => {
     setCurrentindex(currentIndex + 1)
     setCurrentsong(audio[currentIndex + 1])
  }
  const prevSong = () => {
     setCurrentindex(currentIndex - 1)
     setCurrentsong(audio[currentIndex - 1])
  }
   return (
    <div>
      <div className='Player-main'>
      <Player currentSong={currentSong}
      currentIndex={currentIndex}
      nextSong={nextSong}
      prevSong={prevSong}/>
      </div>
    </div>
  );
}

export default App;
