import React from "react"
import Project from "./Project.js"
import hug from "../img/HUG.png"
import huglogo from "../img/hug-logo.png"
import hesso from "../img/HES-SO.png"
import hepialogo from "../img/hepia-logo.png"
 
function Projects(props) {
    return (
      // Render a Thumbnail component
      <div className="projects">
        <h1 className="section">Some of my projects.</h1>
        {listProject.map(p => 
          <Project 
            title={p.title} 
            subtitle={p.subtitle}
            description={p.description} 
            technos={p.technos}
            github={p.github}
            img={p.img}
            client={p.client}
          ></Project> )}
      </div>
    )
  }

const listProject = [
  {
    title: 'HOST', 
    subtitle: 'Moderation/debriefing App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. at? Sed fortuna fortis; Nihil opus est exemplis hoc facere longius. At certe gravius. Quid de Pythagora? Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. Tollenda est atque extrahenda radicitus. Verum hoc idem saepe faciamus. Beatum, inquit. Nihil opus est exemplis hoc facere longius.', 
    technos: ['Python', 'C#', 'Flask', 'Unity', 'SQLite'], 
    github: 'ff',
    img: hug,
    client: [huglogo, hepialogo],
  },
  {
    title: 'EventFinder', 
    subtitle: 'Web App to find event around you',
    description: 'Amazing', 
    technos: ['Python', 'C#'], 
    github: 'https://github.com/maximehutinet/EventFinder',
  },
  {
    title: 'HES-SO.NET', 
    subtitle: 'Location based social network',
    description: 'Amazing', 
    technos: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'PostgreSQL'], 
    github: 'https://github.com/maximehutinet/HES-SO.NET',
    img: [hesso]
  },
];
   
export default Projects;
