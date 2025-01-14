import React from 'react';
import './HoleCss.css'; 
function Home() {
  return (
    <section id="home" className="text-center py-5">
      <div className="overlay"></div> 
      <div className="container">
        <h1>Benvenuto!</h1>
        <p className="lead">Io sono Loïc Hernandez, sviluppatore full-stack.</p>
        <a href="#projects" className="btn btn-primary">Scopri i miei progetti</a>
      </div>
    </section>
  );
}

export default Home;
