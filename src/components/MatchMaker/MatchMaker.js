import { useState } from "react";
import { Link } from "react-router-dom";
import lonely_robot from "../assets/lonely_robot.svg";

/*

1) - create a state isPopupDisplayed (boolean)
2) - if the robot id is divisable by 2 show popup
3) - inject images from user and currentRobot
4) - 'X' button to close the popup (isPopUpDisplayed set to false)
 


*/

const MatchMaker = ({
  favourites,
  setFavourites,
  allRobots,
  currentRobot,
  setCurrentRobot,
  user,
}) => {
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  const moveForward = () => {
    setCurrentRobot(currentRobot + 1);
  };

  const moveForwardAndSetFavourite = (robot) => {
    setCurrentRobot(currentRobot + 1);

    if (robot.id % 2 === 0) {
      setIsPopupDisplayed(true);
      setFavourites([...favourites, robot]);
    }
  };

  return (
    <div>
      {isPopupDisplayed ? (
        <div>
          <p>It's a match</p>
          <img
            src={allRobots[currentRobot - 1].profile_image}
            alt="match"
            height="50"
          />
          <img src={user.profile_image} alt="match" height="50" />
          <button onClick={() => setIsPopupDisplayed(false)}>&#10005;</button>
        </div>
      ) : null}
      {currentRobot <= 9 ? (
        allRobots
          .filter((item, index) => index === currentRobot)
          .map((robot) => (
            <div key={robot.id}>
              <img src={robot.profile_image} alt={robot.name} height="80" />
              <h2>{robot.name}</h2>
              <h3>{robot.age}</h3>
              <h3>{robot.bio}</h3>
              <h3>{robot.location}</h3>
              <button onClick={moveForward}>&#128148;</button>
              <button onClick={() => moveForwardAndSetFavourite(robot)}>
                &#128151;
              </button>
            </div>
          ))
      ) : (
        <div>
          <h1>NO MORE ROBOTS AROUND YOU!</h1>
          <br />
          <img src={lonely_robot} alt="lonely_robot" height="80" />
        </div>
      )}
      <Link to="/matchlist">Go to the match list</Link>
    </div>
  );
};

export default MatchMaker;
