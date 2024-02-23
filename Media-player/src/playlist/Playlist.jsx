import './Playlist.css';

const Playlist = ({data, currentSong, changeCurrentSong}) => {


  return (
    <section className="playlist">
      {
        data.map(item => {
            if (item.id === currentSong.id){
                return (
                  <div
                    className="item flex"
                    id={item.id}
                    key={item.id}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="img-container">
                      <img className="item-img" src={item.img} alt="" />
                    </div>
                    <div className="item-info">
                      <p className="item-artist" style={{ color: "#ffffff" }}>
                        {item.artist}
                      </p>
                      <p className="item-song">{item.song}</p>
                    </div>
                    <span
                      className="material-icons"
                      style={{ color: "#ffffff" }}
                    >
                      play_circle
                    </span>
                  </div>
                );
            } else {
                return (
                  <div className="item flex" id={item.id} key={item.id} onClick={() => changeCurrentSong(item)}>
                    <div className="img-container">
                      <img className="item-img" src={item.img} alt="" />
                    </div>
                    <div className="item-info">
                      <p className="item-artist">{item.artist}</p>
                      <p className="item-song">{item.song}</p>
                    </div>
                    <span className="material-icons">play_circle</span>
                  </div>
                );
            }
        })
      }
    </section>
  );
}

export default Playlist;