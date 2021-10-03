import './App.css';
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';


import Homepage  from './pages/Homepage/Homepage';
import Feeds from './pages/Feeds/Feeds';
import AlumniRegister from './pages/Signup/AlumniRegister';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/feeds" component={Feeds}/>
          <Route path="/register" component={AlumniRegister}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
