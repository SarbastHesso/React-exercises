import logo from '../assets/todo-list.svg';
interface IHeaderProps {
  isFiltred: boolean;
  handleFilter: () => void;
}

const Header = (props: IHeaderProps) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Todo-icon" className="logo" />
      </div>
      <h1 className="title">TODO</h1>
      <button className='filter-btn' onClick={() => props.handleFilter()}>{props.isFiltred ? "Get all Todos" : "Get today's Todos"}</button>
    </div>
  );
}

export default Header