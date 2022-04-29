import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
// import Menu from './Pages/Shared/Menu/Menu';
import MenuTest from './Pages/Shared/Menu/MenuTest';

function App() {
  return (
    <Router>
      <MenuTest />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
