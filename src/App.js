import React from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
