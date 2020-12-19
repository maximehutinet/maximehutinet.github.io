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
    description: 'Control panel for a mixed realty serious game. It allows moderators to send messages to participants, trigger virtual events, take notes and generate debriefings (video and PDF). This project integrates a tablet App along with a media server.', 
    technos: ['Python', 'C#', 'Flask', 'Unity', 'SQLite'], 
    github: '',
    img: host,
    client: [huglogo, hepialogo],
  },
  {
    title: 'Hike Tracker', 
    subtitle: 'Android App to track hikes and get stats about them',
    description: 'This App allows users to track their hikes (path, distance, duration). It is also possible to add points of interest with pictures and receiving alertes when get close to them next time you redo the path.', 
    technos: ['Android', 'Kotlin', 'SQLite'], 
    img: hiketracker,
    github: 'https://github.com/maximehutinet/EventFinder',
  },
  {
    title: 'HES-SO.NET', 
    subtitle: 'Location based social network',
    description: 'Social network based on location that allows users to post ephemeral messages at certains location. This web app integrates also a chat.', 
    technos: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'PostgreSQL', 'Docker', 'JWT'], 
    github: 'https://github.com/maximehutinet/HES-SO.NET',
    img: hesso
  },
];
   
export default Projects;
