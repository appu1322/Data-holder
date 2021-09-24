import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import ErroePage from './components/ErrorPage'
import {Switch, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route>
        <ErroePage/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
