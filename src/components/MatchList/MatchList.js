/* - render all the favourites 
  - when click on robot goes to chat 
*/

import { Link } from "react-router-dom";

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
        <h1>You have no matches yet!</h1>
      )}
    </div>
  );
};

export default MatchList;
