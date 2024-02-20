import './CurrentSong.css';

const CurrentSong = ({ currentSong}) => {
    const {id, artist, song, img} = currentSong;
  return (
    <section className="current-song" id={id}>
      <div className="img-container-large">
        <img src={img} alt="" className="current-img" />
      </div>
      <div className="song-info">
        <span className="material-icons add-btn">add_circle</span>
        <div className="info-container">
          <p className="artist">{artist}</p>
          <p className="song">{song}</p>
        </div>
        <span className="material-icons favorite-btn">favorite</span>
      </div>
      <div className="timeline">
        <span>1:02</span>
        <input type="range" className="time-range" id="time-range" min="0" value="30" step="1"/>
        <span>3:44</span>
      </div>
      <div className="control">
            <span className="material-icons repeat-btn" id="repeat-btn">repeat</span>
            <span className="material-symbols-outlined previous-btn" id="previous-btn">skip_previous</span>
            <span className="material-icons play-btn" id="play-btn">play_circle</span>
            {/* <span className="material-symbols-outlined">pause_circle</span> */}
            <span className="material-symbols-outlined next-btn" id="next-btn">skip_next</span>
            <span className="material-icons shuffle-btn" id="shuffle-btn">shuffle</span>
       </div>
    </section>
  );
};

export default CurrentSong