import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js'; 
import About from './About.js'; 
import Contact from './Contact.js';
import Nav from './Nav';
import Home from './Home';
import Credits from './Credits'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Credits 
        gitrepo={"https://github.com/maximehutinet/maximehutinet.github.io"}
      />
    </div>
  );
}

export default App;
