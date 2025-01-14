import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function MyFooter() {
  return (
    <footer className="bg-dark text-white text-center py-3" id='footer'>
      <p>© 2025 Loïc Hernandez Behon Mangele </p>
      <address>
        <p>
          <a href="https://www.linkedin.com/in/loïc-hernandez-mangele-behon-129588317" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin /> LinkedIn
          </a>{' | '} <br />
          <a href="https://github.com/MangeleLoic" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub /> GitHub
          </a>{' | '} <br />
          <a href="mailto:behonloic@gmail.com" className="text-white">
            <FaEnvelope /> Email: behonloic@gmail.com
          </a>{' | '} <br />
          <a href="tel:+393389959666" className="text-white">
            <FaPhone /> Phone: 3389959666
          </a>
        </p>
      </address>
    </footer>
  );
}

export default MyFooter;

