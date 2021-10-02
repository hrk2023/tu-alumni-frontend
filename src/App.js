import './App.css';
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';


import Homepage  from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Feeds from './pages/Feeds/Feeds';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/feeds" component={Feeds}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
