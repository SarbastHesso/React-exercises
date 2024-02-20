import './CurrentSongImage.css';

const CurrentSongImage = ({img}) => {
  return (
    <div className="current-song-image">
      <img src={img} alt="" className="current-img" />
    </div>
  );
}

export default CurrentSongImage