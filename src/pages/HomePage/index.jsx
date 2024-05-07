import './style.css';
import {HeartIcon, PaperAirplaneIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";

export const HomePage = () => {
  return (
      <div className="profile-container">
        <div className="profile-card">
          <img src="src/assets/fester.jpeg" alt="Fester A." className="profile-image" />
          <div className="action-buttons">
            <button className="action-button dislike">
              <XMarkIcon className="icon"/>
            </button>
            <button className="action-button like">
              <HeartIcon className="icon"/>
            </button>
          </div>
          <div className="profile-info">
            <div className="profile-info--content">
              <div className="profile-info--text">
                <h1 className="profile-name">Fester A.</h1>
                <p className="profile-age">Age: ???</p>
              </div>
              <button className="send-message">
                <PaperAirplaneIcon className="icon icon--square" />
              </button>
            </div>
             <div className="profile-description">
               <h2>About</h2>
               <p className="profile-description--content">Greetings fellow weirdo, my name is Fester. If you're looking for a strange and unusual time, then look no further.</p>
               <button className="read-more">Read More...</button>
             </div>
            <h2>Interests</h2>
            <div className="profile-interests">
              <button className="interest explosive">Explosives</button>
              <button className="interest arson">Arson</button>
              <button className="interest curio">Curios</button>
              <button className="interest howling">Howling</button>
              <button className="interest scary-movies">Scary Movies</button>
              <button className="interest gardening">Gardening</button>
            </div>
          </div>
        </div>
      </div>
  );
};
