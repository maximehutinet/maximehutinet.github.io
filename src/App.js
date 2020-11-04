import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Projects from './components/Projects.js'; 
import About from './components/About.js'; 
import Contact from './components/Contact.js';
import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
