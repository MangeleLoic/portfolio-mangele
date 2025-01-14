import React from 'react';

import './HoleCss.css';  

function Projects() {
  const projects = [
    {
      title: "Clone di Spotify",
      description: "Realizzazione di un sito con ispirazione alla famosa app di streaming musicale",
      link: "https://new-spotfy.vercel.app/", 
      github: "https://github.com/MangeleLoic/new-spotfy.git",
      image: "https://www.smartworld.it/images/2023/12/05/migliori-app-android-per-la-musica_1200x675.jpeg"
    },
    {
      title: "App Meteo",
      description: "Semplice app di previsioni meteo",
      link: "https://app-meteo.vercel.app/", 
      github: "https://github.com/MangeleLoic/app_meteo.git",
      image: "https://ilbolive.unipd.it/sites/default/files/2022-05/n_meteo.jpg"
    },
    {
      title: "Progetto 3",
      description: "Descrizione breve del progetto 3",
      link: "https://link-al-tuo-progetto3", 
      github: "https://github.com/tuo-username/progetto3",
      image: "https://twproject.com/blog/wp-content/uploads/le-prestazioni-di-progetto.png"
    },
    {
      title: "Progetto 4",
      description: "Descrizione breve del progetto 4",
      link: "https://link-al-tuo-progetto4", 
      github: "https://github.com/tuo-username/progetto4",
      image: "https://twproject.com/blog/wp-content/uploads/le-prestazioni-di-progetto.png"
    },
    {
      title: "Progetto 5",
      description: "Descrizione breve del progetto 5",
      link: "https://link-al-tuo-progetto5", 
      github: "https://github.com/tuo-username/progetto5",
      image: "https://twproject.com/blog/wp-content/uploads/le-prestazioni-di-progetto.png"
    },
    {
      title: "Progetto 6",
      description: "Descrizione breve del progetto 6",
      link: "https://link-al-tuo-progetto6", 
      github: "https://github.com/tuo-username/progetto6",
      image: "https://twproject.com/blog/wp-content/uploads/le-prestazioni-di-progetto.png"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Progetti</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 text-center my-2" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-2 mx-2">
                    Vedi Progetto
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-success mb-2 mx-2">
                    Vedi Codice
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
