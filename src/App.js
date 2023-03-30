import { Skills, Header, Section } from "./components/";
import { paragraph, skills } from "./components/data";

import "./App.css";

const info = process.env.REACT_APP_TIMESTAMP
  ? `Last deployment: ${process.env.REACT_APP_TIMESTAMP}`
  : "";

const appStatus = process.env.REACT_APP_STATUS
  ? `This app is in ${process.env.REACT_APP_STATUS}. Check back for updates!`
  : "This app is in development. Check back for updates!";

const appEnv = process.env.REACT_APP_ENV || "";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-content">
          <div className="Header">
            <Header />
          </div>
          <Section header={"About Me"}>
            <div className="content">{paragraph.big}</div>
          </Section>
          <Section header={"Skills"}>
            <div style={{ textAlign: "center" }}>
              <Skills skills={skills} />
            </div>
          </Section>
          <Section header={"Experience"}>
            <div className="content">{paragraph.big}</div>
          </Section>
          <Section header={"Education"}>
            <div className="content">{paragraph.big}</div>
          </Section>
          <Section header={"App Info"}>
            <div className="content">
              {appStatus}
              <br />
              {info}
              <br />
              <div style={{ paddingLeft: 20 + "px", fontSize: 10 + "px" }}>
                blind yet?
              </div>
            </div>
          </Section>
          <div style={{ color: "#c0c0c0" }}>
            <br />
          </div>
        </div>
      </div>
      {/* <div style={{ position: "absolute", bottom: 0, right: 0 }}>{appEnv}</div> */}
    </>
  );
}

export default App;
