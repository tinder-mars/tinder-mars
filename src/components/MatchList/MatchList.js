/* - render all the favourites 
  - when click on robot goes to chat 
*/

import { Link } from "react-router-dom";
import lonely_robot from "../assets/lonely_robot.svg";
import "./MatchList.css";
import matchlist_image from "../assets/matchlist.svg";

const MatchList = ({ favourites }) => {
  return (
    <div>
      <img src={matchlist_image} className='matchlist_image'/>
      <div className="list_container">
        {favourites.length ? (
          favourites.map((item) => (
            <div key={item.id}>
              <Link to={`/chat/${item.id}`} className="favourite_container">
                <img
                  className="avatar"
                  src={item.profile_image}
                  alt={item.name}
                />
                <h2 className="avatar_name">{item.name}</h2>
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h1 className='No_Match_message'>You have no matches yet!</h1>
            <br />
            <img src={lonely_robot} alt="lonely_robot" className='lonely_robot'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchList;
