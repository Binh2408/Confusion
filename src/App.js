
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import store from './shared/store';

const store = ConfigureStore();
function App() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
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
