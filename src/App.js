import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Chat from "./components/Chat";
import CreateProfile from "./components/CreateProfile";
import HomePage from "./components/HomePage";
import MatchList from "./components/MatchList";
import MatchMaker from "./components/MatchMaker";

function App() {
  const [user, setUser] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [allRobots, setAllRobots] = useState([]);
  const [currentRobot, setCurrentRobot] = useState(0);

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
          render={(props) => <MatchMaker />}
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
