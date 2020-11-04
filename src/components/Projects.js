import React from "react"
import Project from "./Project.js"
import host from "../img/host.png"
import huglogo from "../img/hug-logo.png"
import hesso from "../img/HES-SO.png"
import hepialogo from "../img/hepia-logo.png"
import hiketracker from "../img/hiketracker.png"
 
function Projects(props) {
    return (
      // Render a Thumbnail component
      <section className="projects">
        <h1>Some of my projects.</h1>
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
      </section>
    )
  }

const listProject = [
  {
    title: 'HOST', 
    subtitle: 'Moderation/debriefing App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. at? Sed fortuna fortis; Nihil opus est exemplis hoc facere longius. At certe gravius. Quid de Pythagora? Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. Tollenda est atque extrahenda radicitus. Verum hoc idem saepe faciamus. Beatum, inquit. Nihil opus est exemplis hoc facere longius.', 
    technos: ['Python', 'C#', 'Flask', 'Unity', 'SQLite'], 
    github: 'ff',
    img: host,
    client: [huglogo, hepialogo],
  },
  {
    title: 'Hike Tracker', 
    subtitle: 'Android App to track hikes and get stats about them',
    description: 'Amazing', 
    technos: ['Android', 'Kotlin', 'SQLite'], 
    img: hiketracker,
    github: 'https://github.com/maximehutinet/EventFinder',
  },
  {
    title: 'HES-SO.NET', 
    subtitle: 'Location based social network',
    description: 'Amazing', 
    technos: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'PostgreSQL', 'Docker', 'JWT'], 
    github: 'https://github.com/maximehutinet/HES-SO.NET',
    img: hesso
  },
];
   
export default Projects;
