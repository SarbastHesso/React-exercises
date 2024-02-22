
interface IMovieGenre {
    id: number;
    name: string;
}

const AddForm = () => {

    const genreCategories:IMovieGenre [] = [
        {id: 1, name: 'drama'},
        {id: 2, name: 'comedy'},
        {id: 3, name: 'fantasy'},
        {id: 4, name: 'horror'},
        {id: 5, name: 'romance'},
        {id: 6, name: 'action'},
    ]

  return (
    <form className="add-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <div className="rating-wrapper">
          <span>1</span>
          <input
            type="range"
            name="rating"
            id="rating"
            min="1"
            max="5"
            value="2"
          />
          <span>5</span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          {
            genreCategories.map((category) => {
                <option defaultValue={category.name} key={category.id}>{category.name}</option>;
            })
          }
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
      </div>
      <div className="btns">
        <button className="add-btn">ADD</button>
        <button className="clear-btn">CLEAR</button>
      </div>
    </form>
  );
}

export default AddForm






