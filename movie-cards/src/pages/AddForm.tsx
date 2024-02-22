import { useState } from 'react';

interface IMovieGenre {
    id: number;
    name: string;
}

const AddForm:React.FC = () => {

    const genreCategories:IMovieGenre [] = [
        {id: 1, name: 'drama'},
        {id: 2, name: 'comedy'},
        {id: 3, name: 'fantasy'},
        {id: 4, name: 'horror'},
        {id: 5, name: 'romance'},
        {id: 6, name: 'action'},
    ]

    const [movieTitle, setMovieTitle] = useState<string>('');
    const [movieRating, setMovieRating] = useState<string>('0');
    const [movieGenre, setmovieGenre] = useState<string>('');
    const [movieDescription, setMovieDescription] = useState<string>('');

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMovieTitle(e.target.value);
    };
    const handleChangeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMovieRating(e.target.value);
    };
    const handleChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setmovieGenre(e.target.value);
    };
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMovieDescription(e.target.value);
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(movieTitle);
      console.log(movieRating);
      console.log(movieGenre);
      console.log(movieDescription);
    };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={movieTitle}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <div className="rating-wrapper">
          <span>{movieRating}</span>
          <input
            type="range"
            name="rating"
            id="rating"
            min="0"
            max="5"
            value={movieRating}
            onChange={handleChangeRating}
          />
          <span>5</span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          id="genre"
          value={movieGenre}
          onChange={handleChangeGenre}
        >
          <option value={genreCategories[0].name}>
            {genreCategories[0].name}
          </option>
          <option value={genreCategories[1].name}>
            {genreCategories[1].name}
          </option>
          <option value={genreCategories[2].name}>
            {genreCategories[2].name}
          </option>
          <option value={genreCategories[3].name}>
            {genreCategories[3].name}
          </option>
          {/* {
                genreCategories.map(category => {
                    <option value={category.name} key={category.id}>{category.name}</option>
                })
            } */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" value={movieDescription} onChange={handleChangeDescription}/>
      </div>
      <div className="btns">
        <button className="add-btn">ADD</button>
        <button className="clear-btn">CLEAR</button>
      </div>
    </form>
  );
}

export default AddForm






