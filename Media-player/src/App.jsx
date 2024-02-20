import './App.css';
import CurrentSong from './currentSong/CurrentSong.jsx';
import {data} from './data.js';
import Header from './header/Header.jsx';
import Playlist from './playlist/Playlist.jsx';

function App() {
let currentSong = data[1];
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="sections-container">
          <Playlist data={data} currentSong={currentSong} />
          <CurrentSong currentSong={currentSong} />
        </div>
      </div>
    </div>
  );
}

export default App
