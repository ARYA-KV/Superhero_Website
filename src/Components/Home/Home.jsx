import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import img1 from '../../assets/img/women.png';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate('/mission'); 
  };

     
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img className="image" src={img1} alt="Woman" />
        </div>
        <div className="content-card">
          <div className="content">
            <h1 className='main-intro'>Adhira: Guardian <br /> of Justice</h1>
            <p className='intro'>
              Meet Adhira, the city's fearless protector, delivering swift justice with unmatched power.
              If you're facing injustice, she's here to help.
            </p>
            <p className='intro'>
              This platform connects you directly to Adhira. Submit your grievance, and she’ll ensure every voice is heard.
            </p>

            <div className="btn btn-dark" onClick={handleNavigateToAbout}>Get Started</div>
          </div>
        </div>
      </div>

      <div className="second-container">      </div>
    </>
  );
};

export default Home;
