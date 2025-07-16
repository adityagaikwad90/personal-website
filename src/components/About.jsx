import React from 'react';
import './About.css';
import myPhoto from '../assets/aditya2.jpeg'; // Replace with your image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Aditya Gaikwad" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
<p className="about-text">
  Hi! I'm <strong>Aditya Gaikwad</strong> — a passionate full-stack developer with experience in the <strong>MERN stack</strong> and a deep love for creating functional, responsive web applications.
  <br /><br />
  I’ve built projects using <strong>MongoDB, Express, React, Node.js</strong> and also have strong skills in <strong>HTML, CSS, JavaScript</strong>. I enjoy building elegant UI with React and writing clean, maintainable code.
  <br /><br />
  I’m also comfortable working with <strong>PostgreSQL</strong> databases and have hands-on experience with <strong>AWS Cloud</strong> tools.
  Beyond that, I’ve explored <strong>blockchain development</strong> and have knowledge of the <strong>Motoko language</strong> used in the Internet Computer ecosystem.
  <br /><br />
  Currently, I’m focused on improving my problem-solving skills by learning <strong>Data Structures and Algorithms (DSA)</strong> in <strong>Java</strong> and actively solving problems using Java.
  <br /><br />
  I love learning, building, and sharing — and I’m always open to exciting new projects and collaborations!
</p>

        </div>
      </div>
    </section>
  );
};

export default About;
