import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import Banner  from './components/Banner';
import About from './components/About';
import Explore from './components/Explore';
import { Nav } from 'react-bootstrap';
import Projects from './components/Projects';
import Credits from './components/Credits';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <div id="content">
      <NavBar />
     <Banner></Banner>
     <About></About>
     <Explore></Explore>
     <Projects></Projects>
     <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
