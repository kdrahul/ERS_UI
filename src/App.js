import { Switch, Route } from "react-router-dom";
import Home from "./templates/home";
import Landing from "./templates/landing";
import Navbar from "./components/navbar";
import EventDetails from "./components/details";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />

        <Route path="/events/:id" component={EventDetails} />
      </Switch>
    </div>
  );
}

export default App;
