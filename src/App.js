import { Switch, Route } from "react-router-dom";
import Home from "./templates/home";
import Landing from "./templates/landing";
import Navbar from "./components/navbar";
import EventDetails from "./components/details";
import Survey from "./templates/survey";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/survey" exact component={Survey} />

        <Route path="/events/:id" component={EventDetails} />
      </Switch>
    </div>
  );
};

export default App;
