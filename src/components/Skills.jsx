import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills & Achievements</h2>

      <div className="skills-container">

        <div className="skills-category">
          <h3>🚀 Languages & Tech</h3>
          <ul>
            <li>Java (DSA - 200+ problems)</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>MongoDB, PostgreSQL</li>
            <li>AWS (S3, EC2 basics)</li>
            <li>Motoko (Blockchain language)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>🏆 Competitive Programming</h3>
          <ul>
            <li>LeetCode: 100+ problems solved</li>
           
            <li>Java DSA track ongoing</li>

            <li><a href="https://leetcode.com/u/adityagaikwad90/" target="_blank" rel="noopener noreferrer">View LeetCode Profile</a></li>
          </ul>
        </div>
        


        <div className="skills-category">
          <h3>📜 Dsa problem solving track</h3>
          <ul>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
