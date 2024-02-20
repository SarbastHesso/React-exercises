import Control from '../control/Control';
import CurrentSongImage from '../currentSongImage/CurrentSongImage';
import CurrentSongInfo from '../currentSongInfo/CurrentSongInfo';
import Timeline from '../timeline/Timeline';
import './CurrentSong.css';

const CurrentSong = ({ currentSong}) => {
    const {id, artist, song, img} = currentSong;
  return (
    <section className="current-song" id={id}>
      <CurrentSongImage img={img}/>
      <CurrentSongInfo artist= {artist} song={song}/>
      <Timeline/>
      <Control/>
    </section>
  );
};

export default CurrentSong