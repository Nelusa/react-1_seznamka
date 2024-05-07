import {PaperAirplaneIcon} from "@heroicons/react/24/outline/index.js";

const interests = [
  {name: "Explosives", className: "explosive"},
  {name: "Arson", className: "arson"},
  {name: "Curios", className: "curio"},
  {name: "Howling", className: "howling"},
  {name: "Scary Movies", className: "scary-movies"},
  {name: "Gardening", className: "gardening"},
]

const ProfileInfo = ({ userData, interests }) => {
  return (
      <div className="profile-info">
        <div className="profile-info--content">
          <div className="profile-info--text">
            <h1 className="profile-name">{userData.name}</h1>
            <p className="profile-age">Age: {userData.age}</p>
          </div>
          <button className="send-message">
            <PaperAirplaneIcon className="icon icon--square" />
          </button>
        </div>
        <div className="profile-description">
          <h2>About</h2>
          <p className="profile-description--content">{userData.description}</p>          <button className="read-more">Read More...</button>
        </div>
        <h2>Interests</h2>
        <div className="profile-interests">
          {interests.map(interest => (
              <button className={`interest ${interest.className}`} key={interest.name}>{interest.name}</button>
          ))}
        </div>
      </div>
  )
}

export default ProfileInfo