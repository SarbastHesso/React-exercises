import './Control.css';

const Control = () => {
  return (
    <div className="control">
      <span className="material-icons repeat-btn" id="repeat-btn">repeat</span>
      <span className="material-symbols-outlined previous-btn"id="previous-btn">skip_previous</span>
      <span className="material-icons play-btn" id="play-btn">play_circle</span>
      {/* <span className="material-symbols-outlined">pause_circle</span> */}
      <span className="material-symbols-outlined next-btn" id="next-btn">skip_next</span>
      <span className="material-icons shuffle-btn" id="shuffle-btn">shuffle</span>
    </div>
  );
}

export default Control