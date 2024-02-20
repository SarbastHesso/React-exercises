import './CurrentSongInfo.css';

const CurrentSongInfo = ({artist, song}) => {
  return (
    <div className="current-song-info">
      <span className="material-icons add-btn">add_circle</span>
      <div className="info-container">
        <p className="artist">{artist}</p>
        <p className="song">{song}</p>
      </div>
      <span className="material-icons favorite-btn">favorite</span>
    </div>
  );
}

export default CurrentSongInfo