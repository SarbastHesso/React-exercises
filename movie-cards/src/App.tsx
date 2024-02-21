import Header from "./components/Header"
import AddForm from "./pages/AddForm"
import MoviesList from "./pages/MoviesList"


function App() {

  return (
    <div className="app">
      <div className="container">
        <Header/>
        {/* <MoviesList/> */}
        <AddForm/>
      </div>
    </div>
  )
    
}

export default App
