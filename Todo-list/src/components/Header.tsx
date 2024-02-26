import logo from '../assets/todo-list.svg';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Todo-icon" className="logo" />
      </div>
      <h1 className="title">TODO</h1>
    </div>
  );
}

export default Header