import './App.css';
import SignUp from "./Components/SignUp/SignUp.js";
import UserUpdates from "./Components/UserUpdates/UserUpdates.js";
import {Route, HashRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/home' component={UserUpdates}/>
          <Route path='/' component={SignUp} />
        </Switch>
      </Router>
            
    </div>
  );
}

export default App;
