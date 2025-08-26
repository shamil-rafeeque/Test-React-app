import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { PlayerProvider } from './context/PlayerContext';
import Timer from './components/Timer'
import Userefs from './components/Userefs';
import Userefs1 from './components/Userefs1';
import Sidebar from './components/dashboard/Sidebar';
import Body from './components/dashboard/Body';
// import Todo from './todo/Todo'

function App() {
  return (
    <PlayerProvider>

    <div className="App">
      {/* <p>dd</p>
      <Home />
      <h4>KKKKKKKKKKK</h4>
      <Timer /> */}
      {/* <h4>KKKKKKKKKK</h4> */}
      {/* <Userefs/> */}
      {/* <h3>ksksksksk</h3> */}
      <div className="first">
      <Sidebar />
      <Body />
      
      {/* <Todo /> */}
      </div>
      {/* <Userefs1 /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </PlayerProvider>

  );
}

export default App;
