import React from 'react';
//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//Styles
import './styles/main.scss';


const App = () => (
  <div>
    <main>
      <Navbar/>
      <Home/>
    </main>
  </div>
);

export default App;