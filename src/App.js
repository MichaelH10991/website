import { Skills, Header, Section, CodeBlock } from "./components/";

import { paragraph, skills } from "./components/data";

import "./App.css";

const info = process.env.REACT_APP_TIMESTAMP
  ? `Last deployment: ${process.env.REACT_APP_TIMESTAMP}`
  : "";

const appStatus = process.env.REACT_APP_STATUS
  ? `This app is in ${process.env.REACT_APP_STATUS}. Check back for updates!`
  : "This app is in development. Check back for updates!";

const appEnv = process.env.REACT_APP_ENV || "";

const aboutMe = `
~~~js
  const me = () => ({
    fullName: "Michael Humphries",
    age: 26,
    email: "michaelhumphries1997@gmail.com"
  });
~~~
`;

const customDark = {
  // background: "#1e1e1e",
  fontSize: 1.5 + "em",
  background: "transparent",
  marginTop: 0 + "em",
  border: "none",
  boxShadow: "none",
};

function App() {
  return (
    <>
      <div className="App">
        <div className="App-content">
          <Header />
          <div style={{ padding: 10 + "px" }}>
            <CodeBlock codeBlock={aboutMe} customStyle={customDark} />
          </div>
          <Section header={"About Me"}>
            {/* <CodeBlock
              codeBlock={aboutMe}
              customStyle={customDark}
              showLineNumbers={true}
            /> */}
            <div className="content">{paragraph.big}</div>
          </Section>
          <Section header={"Skills"}>
            <div style={{ textAlign: "center" }}>
              <Skills skills={skills} />
            </div>
          </Section>
          <Section header={"Experience"}>
            <div className="content">
              <h3>Senior Software Developer - Raytheon - 2022 - 2023</h3>
              <p>{paragraph.big}</p>
              <h3>Software Developer - Raytheon - 2019 - 2022</h3>
              <p>{paragraph.big}</p>
              <h3>Junior Software Developer - Raytheon - 2018 - 2019</h3>
              <p>{paragraph.big}</p>
            </div>
          </Section>
          <Section header={"Education"}>
            <div className="content">
              <h3>Cardiff Metropolitan University</h3>
              <p>First Class with Honours in Computing</p>
              <h3>Royal Forest of Dean College</h3>
              <p>3 A Levels</p>
              <h3>Various Schools/academies</h3>
              <p>GCSEs</p>
            </div>
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
