import { useState } from 'react';
import './App.css';
import CurrentSong from './currentSong/CurrentSong.jsx';
import {data} from './data.js';
import Header from './header/Header.jsx';
import Playlist from './playlist/Playlist.jsx';

function App() {
const [currentSong, setCurrentSong] = useState({});
const changeCurrentSong = (item) => {
  data.map((song) => {
    if (song.id === item.id){
      setCurrentSong(item)
    }
  })
}
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="sections-container">
          <Playlist data={data} currentSong={currentSong} changeCurrentSong={changeCurrentSong}/>
          <CurrentSong currentSong={currentSong} />
        </div>
      </div>
    </div>
  );
}

export default App
