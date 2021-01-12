import { Switch, Route } from "react-router-dom";
import Home from "./templates/home";
import LoginSignup from "./templates/login_signup";
import Navbar from "./components/navbar";
import EventDetails from "./components/details";
import Admin from "./templates/admin";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login_signup" exact component={LoginSignup} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/events/:id" component={EventDetails} />
      </Switch>
    </div>
  );
};

export default App;
