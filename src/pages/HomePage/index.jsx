import './style.css';

export const HomePage = () => {
  return (
      <div className="profile-container">
        <div className="profile-card">
          <img src="/src/assets/fester.jpeg" alt="Fester A." className="profile-image" />
          <div className="profile-info">
            <h1 className="profile-name">Fester A.</h1>
            <p className="profile-age">Age: ???</p>
            <p className="profile-description">Greetings fellow weirdo, my name is Fester. If you're looking for a strange and unusual time, then look no further.</p>
            <button className="read-more">Read More</button>
            <div className="profile-interests">
              <button className="interest explosive">Explosives</button>
              <button className="interest arson">Arson</button>
              <button className="interest curio">Curios</button>
              <button className="interest howling">Howling</button>
              <button className="interest scary-movies">Scary Movies</button>
              <button className="interest gardening">Gardening</button>
            </div>
            <div className="action-buttons">
              <button className="action-button dislike"><i className="fas fa-times"></i></button>
              <button className="action-button like"><i className="fas fa-heart"></i></button>
            </div>
            <button className="message-button">Send Message</button>
          </div>
        </div>
      </div>
  );
};
