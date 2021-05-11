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
      .then((response) => console.log(response.data.robots))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/tinder-mars" render={(props) => <HomePage />} />
        <Route
          path="/tinder-mars/create-profile"
          render={(props) => <CreateProfile />}
        />
        <Route
          path="/tinder-mars/matchmaker"
          render={(props) => (
            <MatchMaker
              allRobots={allRobots}
              setFavourites={setFavourites}
              currentRobot={currentRobot}
              setCurrentRobot={setCurrentRobot}
            />
          )}
        />
        <Route
          path="/tinder-mars/matchlist"
          render={(props) => <MatchList />}
        />
        <Route path="/tinder-mars/chat" render={(props) => <Chat />} />
        <Redirect to="/tinder-mars" />
      </Switch>
    </div>
  );
}

export default App;
