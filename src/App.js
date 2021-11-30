// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Web from './components/main/index.jsx';
import NoMatch from './components/nomatch/index';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/** Redux Provider */
import { Provider } from 'react-redux';

/** Store */
// import store from './store';


function App() {
  return (
    // <Provider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Web} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    // </Provider>
  );
}

export default App;

