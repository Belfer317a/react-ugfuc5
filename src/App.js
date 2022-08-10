import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import './css/main.css';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import AnyView from './views/AnyView';

export default function App() {
  return (
    <>

      <Router>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="any">Any</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/any" element={<AnyView />} />
        </Routes>
      </Router>
    </>
    // <Router>

    // <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/about">About</Link></li>

    //   </ul>

    //   <Switch>
    //     <Route path='/' exact element={<HomeView />} />
    //     <Route path='/about' element={<AboutView />} />
    //   </Switch>
    // </Router>
  );
}
