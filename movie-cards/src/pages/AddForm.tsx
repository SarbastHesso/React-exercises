
const AddForm = () => {
  return (
    <form className='add-form'>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
        </div>
        <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input type="range" name="rating" id="rating" min="1" max="5" value="2"/>
        </div>
        <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre">
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" />
        </div>
        <div className="btns">
            <button>Clear</button>
            <button>Add</button>
        </div>
    </form>
  )
}

export default AddForm