
const Card = () => {
  return (
    <div className="card">
      <div className="title-rating-wrapper">
        <h3 className="title">Movie Title</h3>
        <span className="rating">3/5</span>
      </div>
      <div className="genre">
        <span>Genre</span>
      </div>
      <div className="description-wrapper">
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi culpa
          vitae exercitationem eveniet nostrum dolorem ratione sapiente at iste
          assumenda.
        </p>
      </div>
    </div>
  );
}

export default Card