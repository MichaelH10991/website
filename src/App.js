import logo from "./logo.svg";
import Skills from "./components/skills";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <div className="App-content">
        <div className="Header">
          <Header />
        </div>
        <div className="Content-container">
          <div className="Sub-container">
            <div className="Sub-heading">Skills</div>
            <Skills />
          </div>
        </div>
        <div className="Content-container">
          <div className="Sub-container">
            <div className="Sub-heading">Infomation</div>
            <div Style="padding:1em;">
              This app is in development. Check back for updates!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
