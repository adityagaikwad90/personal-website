import React, { useState } from 'react';
import './Home.css';
import profileImage from '../assets/aditya2.jpeg';
import cvImage from '../assets/Adityafinal1.pdf'; // Your CV image

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="heading">
          <span className="hi">Hi</span>, welcome to my profile!
        </h1>
        <p className="subtext">I’m Aditya Gaikwad, a passionate developer 🚀</p>

        <button className="get-started-btn" onClick={openModal}>
          Get CV
        </button>
      </div>

      {/* <div className="image-container">
        <img src={profileImage} alt="Aditya's Avatar" className="profile-image" />
      </div> */}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={cvImage} alt="My CV" className="modal-cv-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
