import { Switch, Route } from "react-router-dom";
import Home from "./templates/home";
import Navbar from "./components/navbar";
import EventDetails from "./components/details";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events/:id" component={EventDetails} />
      </Switch>
    </div>
  );
}

export default App;
