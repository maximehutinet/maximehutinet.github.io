import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects.js'; 
import About from './components/About.js'; 
import Contact from './components/Contact.js';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
