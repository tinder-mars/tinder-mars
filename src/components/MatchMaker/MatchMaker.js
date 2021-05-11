import { useState } from "react";
import { Link } from "react-router-dom";

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
}) => {
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);
  const showPopup = () => {
    const currentRobotMatch = allRobots.find(
      (robot, index) => index === currentRobot
    );
    console.log(currentRobotMatch);
  };

  const moveForward = () => {
    setCurrentRobot(currentRobot + 1);
  };

  const moveForwardAndSetFavourite = (robot) => {
    setCurrentRobot(currentRobot + 1);
    setFavourites([...favourites, robot]);
  };

  return (
    <div>
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
        <h1>NO MORE ROBOTS AROUND YOU!</h1>
      )}
      <Link to="/matchlist">Go to the favourite list :)</Link>
    </div>
  );
};

export default MatchMaker;
