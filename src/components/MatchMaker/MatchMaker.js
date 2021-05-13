import { useState } from "react";
import { Link } from "react-router-dom";
import lonely_robot from "../assets/lonely_robot.svg";
import "./MatchMaker.css";
import matchmaker from "../assets/matchmaker.svg";
import no from "../assets/no.svg";
import yes from "../assets/yes.svg";
import uploadimage from "../assets/uploadimage.svg";
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
        <div className="matchmaker-popup-container">
          <div className="matchmaker-popup-inner-container">
            <p className="matchmaker-itsamatch">It's a Match!</p>
            <p className="matchmaker-itsamatch-text">
              You and {allRobots[currentRobot - 1].name} have liked eachother
            </p>
            <div className="matchmaker-profiles-images">
              <img
                src={user.profile_image || uploadimage}
                alt="User"
                height="50"
                className="matchmaker-user-profile-image"
              />
              <img
                src={allRobots[currentRobot - 1].profile_image}
                alt="match"
                height="50"
                className="matchmaker-robot-profile-image"
              />
            </div>

            <button
              onClick={() => setIsPopupDisplayed(false)}
              className="matchmaker-closepopup-button"
            >
              X
            </button>
          </div>
        </div>
      ) : null}
      {currentRobot <= 9 ? (
        allRobots
          .filter((item, index) => index === currentRobot)
          .map((robot) => (
            <div className="matchmaker-parent-container">
              <div key={robot.id} className="matchmaker-child-container">
                <img
                  src={matchmaker}
                  alt="matchmaker"
                  className="matchmaker-logo"
                />
                <div className="matchmaker-profile-image-container">
                  <img
                    src={robot.profile_image}
                    alt={robot.name}
                    className="matchmaker-profile-image"
                  />
                </div>
                <div className="matchmaker-robot-data-container">
                  <h2 className="matchmaker-name-age">
                    {robot.name}, {robot.age} years old
                  </h2>
                  <h3 className="matchmaker-location">
                    Location: {robot.location}
                  </h3>
                  <h3 className="matchmaker-bio">"{robot.bio}"</h3>
                </div>

                <div className="matchmaker-buttons">
                  <img
                    onClick={moveForward}
                    src={no}
                    alt="no_button"
                    className="no_button"
                  ></img>
                  <img
                    onClick={() => moveForwardAndSetFavourite(robot)}
                    src={yes}
                    alt="yes_button"
                    className="yes_button"
                  ></img>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="matchmaker-nomorerobots-container">
          <img src={matchmaker} alt="matchmaker" className="matchmaker-logo" />
          <h1 className="matchmaker-nomorerobots-text">
            No more robots around you!
          </h1>
          <br />
          <img
            src={lonely_robot}
            alt="lonely_robot"
            className="matchmaker-nomorerobots-robot"
          />
        </div>
      )}
      <div className="matchmaker-gotomatchlist-button-container">
        <Link to="/matchlist" className="matchmaker-gotomatchlist-button">
          Go to the match list
        </Link>
      </div>
    </div>
  );
};

export default MatchMaker;
