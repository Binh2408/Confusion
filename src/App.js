
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Main />
//       </div>
//     </BrowserRouter>

//   );
// }


// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Main/>
//       </div>
//     );
//   }
// }


export default App;
