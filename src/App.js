// import logo from "./logo.svg";
import Skills from "./components/skills";
import Header from "./components/header";
import "./App.css";
console.log(process.env)
function App() {
  return (
    <>
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
              <div style={{ padding: 1 + "em" }}>
                {process.env.REACT_APP_STATUS ? 
                  `This app is in ${process.env.REACT_APP_STATUS}. check back for updates!` : 
                  "This app is in development. Check back for updates!"
                }
                <br/>
                {process.env.REACT_APP_TIMESTAMP ?
                  `Last deployment: ${process.env.REACT_APP_TIMESTAMP}` :
                  ""
                }
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign: "right"}}>
          {process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : ""}
        </div>
      </div>
    </>
  );
}

export default App;
