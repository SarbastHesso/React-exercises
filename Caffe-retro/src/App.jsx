import './App.css';
import Section from './section/Section';
import {hot, juicy, cosy} from "./data";
import Header from './header/Header';
import hotImage from './assets/hot.jpg';
import juicyImage from './assets/juicy.jpg';
import cosyImage from './assets/cosy.jpg';

function App() {
  return (
    <div className="app">
      <Header />
      <Section id={"hot"} data={hot} bgImage={hotImage} />
      <Section id={"juicy"} data={juicy} bgImage={juicyImage} />
      <Section id={"cosy"} data={cosy} bgImage={cosyImage} />
    </div>
  );
}

export default App
