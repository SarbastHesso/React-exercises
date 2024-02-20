import './Timeline.css'

const Timeline = () => {
  return (
    <div className="timeline">
      <span>1:55</span>
      <form className='form'>
        <input type="range" className="time-range" id="time-range" min="0" step="1"/>
      </form>
      <span>3:44</span>
    </div>
  );
}

export default Timeline