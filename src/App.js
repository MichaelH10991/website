import { Skills, Header, Section } from "./components/";
import { paragraph } from "./components/data";

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
          <Section header={"Skills"}>
            <Skills />
          </Section>
          <Section header={"Experience"}>
            <div style={{ padding: 1 + "em" }}>{paragraph.big}</div>
          </Section>
          <Section header={"Education"}>
            <div style={{ padding: 1 + "em" }}>{paragraph.big}</div>
          </Section>
          <Section header={"App Info"}>
            <div style={{ padding: 0.5 + "em" }}>
              {appStatus}
              <br />
              {info}
            </div>
          </Section>
        </div>
      </div>
      {/* <div style={{ position: "absolute", bottom: 0, right: 0 }}>{appEnv}</div> */}
    </>
  );
}

export default App;
