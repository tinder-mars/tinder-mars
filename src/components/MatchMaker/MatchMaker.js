import { Link } from "react-router-dom";

/*
- map allRobots
- render 1 Robot per page, currentRobot 
- use the navbar

1) on button (match or not match) pressed, currentRobot increases count (function that does that)
2) filter comparing robot index with currentRobot
3) the robot shown is the next one in line
 


*/
const MatchMaker = ({
  favourites,
  setFavourites,
  allRobots,
  currentRobot,
  setCurrentRobot,
}) => {
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
      <Link to="/matchlist">Go to the favourite list</Link>
    </div>
  );
};

export default MatchMaker;
