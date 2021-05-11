/* - render all the favourites 
  - when click on robot goes to chat 
*/

import { Link } from "react-router-dom";
import lonely_robot from "../assets/lonely_robot.svg";

const MatchList = ({ favourites }) => {
  return (
    <div>
      {favourites.length ? (
        favourites.map((item) => (
          <div key={item.id}>
            <Link to={`/chat/${item.id}`}>
              <img src={item.profile_image} alt={item.name} height="40" />
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))
      ) : (
        <div>
          <h1>You have no matches yet!</h1>
          <br />
          <img src={lonely_robot} alt="lonely_robot" height="80" />
        </div>
      )}
    </div>
  );
};

export default MatchList;
