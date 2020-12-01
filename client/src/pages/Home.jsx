import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/index.css';
import backstage1 from '../assets/landing-page-images/backstage1.png';
import landPic2 from '../assets/landing-page-images/land-pic-2.png';
import jojo from '../assets/landing-page-images/jojo.jpg';
import landPic4 from '../assets/landing-page-images/land-pic-4.png';
import landPic3 from '../assets/landing-page-images/land-pic-3.png';
import greenBackground from '../assets/landing-page-images/green-background.png';
import whiteBackground from '../assets/landing-page-images/white-background.png';

const Home = () => {
  const history = useHistory();
  return (
    <div className="landing-page">
      <div
        className="landing-container-1 bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${backstage1}')` }}
      >
        <form
          className="form1"
          name="login-form1"
          method="POST"
          action="/api/users/login"
        >
          <div className="welcome">
            <h1 className="title-1 pt-20">WELCOME TO BACKSTAGE.</h1>
            <p className="title-paragraph-1">
              We're here to make connecting venues and artists easier.
            </p>
            <button
              type="button"
              onClick={() => {
                history.push('/signup');
              }}
              style={{
                height: '4rem',
                width: '14rem',
                backgroundColor: '#a6271f',
                borderRadius: '10px',
                color: '#fff7f1',
                fontSize: '1.5rem',
                position: 'relative',
                top: '6rem',
                left: '4rem',
                border: '1px solid white'
              }}
            >
              Join Backstage
            </button>
          </div>
        </form>
      </div>

      <div className="landing-container-back">
        <div className="landing-container-info-back">
          <h1 className="title">Save Equipment</h1>
          <p className="title-paragraph">
            No more rummaging through storage closets to take inventory.
          </p>
        </div>
        <div className="landing-container-image-back">
          <img
            className="landing-pic-back"
            src={landPic2}
            alt="backside picture of musicians playing"
          />
        </div>
      </div>

      <div
        className="landing-container-3 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('${greenBackground}')`
        }}
      >
        <div className="landing-container-3-info">
          <h1 className="title">Easily share critical info with your artist</h1>
          <p className="title-paragraph">
            Stage dimenstions? Rain plans? Tell your artist know everything they
            need to know before show time.
          </p>
        </div>
        <div className="landing-container-3-image">
          <img
            className="landing-pic-3"
            src={landPic3}
            alt="blackandwhite pic of concert with smoke"
          />
        </div>
      </div>

      <div className="landing-container-back">
        <div className="landing-container-info-back">
          <h1 className="title">Share stage plots</h1>
          <p className="title-paragraph">
            Prepare your stage based on direct artist input for a smooth,
            music-filled night.
          </p>
        </div>
        <div className="landing-container-image-back">
          <img
            className="landing-pic-back"
            src={landPic4}
            alt="artis mirror with lightbulbs"
          />
        </div>
      </div>

      <div
        className="landing-container-5 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${whiteBackground}')`
        }}
      >
        <div className="landing-container-5-info">
          <h1 className="title-2">
            Save all of your stage configurations for easy sharing
          </h1>
          <p className="title-paragraph-2">
            Multiple stages? Multiple ways to set up a single stage? Share all
            the right info with your artist in one click.
          </p>
        </div>
        <div className="landing-container-5-image">
          <img className="landing-pic-5" src={jojo} alt="DJ" />
        </div>
      </div>

      <div className="landing-footer">
        <div className="landing-footer-info"></div>
      </div>
    </div>
  );
};

export default Home;
