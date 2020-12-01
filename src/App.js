import { Switch, Route } from "react-router-dom";
import Home from "./templates/home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
