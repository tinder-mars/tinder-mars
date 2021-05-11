import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [allRobots, setAllRobots] = useState([]);
  const [currentRobot, setCurrentRobot] = useState(0);

  return <div className="App"></div>;
}

export default App;
