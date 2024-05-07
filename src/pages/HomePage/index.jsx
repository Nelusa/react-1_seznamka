import './style.css';
import ProfileInfo from "../../components/ProfileInfo.jsx";
import ActionButtons from "../../components/ActionButtons.jsx";
import Image from "../../components/Image.jsx";

const userData = {
  name: "Fester A.",
  age: "???",
  description: "Greetings fellow weirdo, my name is Fester. If you're looking for a strange and unusual time, then look no further."
};

const interests = [
  {name: "Explosives", className: "explosive"},
  {name: "Arson", className: "arson"},
  {name: "Curios", className: "curio"},
  {name: "Howling", className: "howling"},
  {name: "Scary Movies", className: "scary-movies"},
  {name: "Gardening", className: "gardening"},
];

export const HomePage = () => {
  return (
      <div className="profile-container">
        <div className="profile-card">
          <Image src="src/assets/fester.jpeg" alt="Fester A."/>
          <ActionButtons/>
          <ProfileInfo interests={interests} userData={userData}/>
        </div>
      </div>
  );
};
