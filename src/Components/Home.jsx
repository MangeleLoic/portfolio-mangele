import React from 'react';
import './HoleCss.css'; 
function Home() {
  return (
    <section id="home" className="text-center py-5">
      <div className="overlay"></div> 
      <div className="container">
        <h1>Benvenuto nel mio portfolio!</h1>
        <p className="lead">Ciao! Sono Loïc Hernandez Behon Mangele, uno sviluppatore full-stack con una passione per la creazione di soluzioni digitali efficienti e intuitive. Dopo aver completato una formazione intensiva in Full-Stack Development presso Epicode, ho acquisito competenze in Java, JavaScript, React, Spring Boot, PostgreSQL e altre tecnologie fondamentali per lo sviluppo web.

Mi piace affrontare nuove sfide e lavorare in team per trasformare idee in prodotti funzionali. Il mio obiettivo è continuare a crescere professionalmente e contribuire a progetti innovativi.

Nel mio portfolio troverai alcuni dei miei lavori più recenti. Se vuoi collaborare o semplicemente scambiare idee, non esitare a contattarmi!</p>

<hr />
<p>Hi! I'm Loïc Hernandez Behon Mangele, a full-stack developer passionate about building efficient and user-friendly digital solutions. After completing an intensive Full-Stack Development training at Epicode, I gained experience with Java, JavaScript, React, Spring Boot, PostgreSQL, and other essential web development technologies.

I enjoy tackling new challenges and working in a team to turn ideas into functional products. My goal is to keep growing professionally and contribute to innovative projects.

In my portfolio, you'll find some of my latest work. If you're interested in collaborating or just exchanging ideas, feel free to reach out!

</p>
        <a href="#projects" className="btn btn-primary">I miei progetti</a>
      </div>
    </section>
  );
}

export default Home;
