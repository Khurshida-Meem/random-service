import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
// import Menu from './Pages/Shared/Menu/Menu';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
