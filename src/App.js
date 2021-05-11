import "./Reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Chat from "./components/Chat/Chat";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import HomePage from "./components/HomePage/HomePage";
import MatchList from "./components/MatchList/MatchList";
import MatchMaker from "./components/MatchMaker/MatchMaker";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [allRobots, setAllRobots] = useState([]);
  const [currentRobot, setCurrentRobot] = useState(0);

  useEffect(() => {
    fetchRobots();
    //setAllRobots(robots);
  }, []);

  const fetchRobots = () => {
    axios
      .get("./Data.json")
      .then((response) => setAllRobots(response.data.robots))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/create-profile"
          render={(props) => <CreateProfile {...props} setUser={setUser} />}
        />
        <Route
          path="/matchmaker"
          render={(props) => (
            <MatchMaker
              allRobots={allRobots}
              setFavourites={setFavourites}
              favourites={favourites}
              currentRobot={currentRobot}
              setCurrentRobot={setCurrentRobot}
              user={user}
            />
          )}
        />
        <Route
          path="/matchlist"
          render={(props) => <MatchList favourites={favourites} />}
        />
        <Route
          path="/chat/:id"
          render={(props) => (
            <Chat
              {...props}
              setFavourites={setFavourites}
              favourites={favourites}
              user={user}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
