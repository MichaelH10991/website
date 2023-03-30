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

const codeBlock = `
~~~js
  const experience = [
    {
      company: "Raytheon",
      dateFrom: 2018,
      dateTo: 2022,
      jobTitle: "Junior developer",
      jobDescription: "fullstack CI/CD developer on anlytics website."
    },
    {
      company: "Raytheon",
      dateFrom: 2022,
      dateTo: 2023,
      jobTitle: "Senior developer",
      jobDescription: "fullstack CI/CD developer on anlytics website."
    }
  ]
~~~
`;

const aboutMe = `
~~~js
  const me = () => ({
    name: "Michael Humphries",
    age: 26,
    email: "michaelhumphries1997@gmail.com"
  });
~~~
`;

function App() {
  return (
    <>
      <div className="App">
        <div className="App-content">
          <div className="Header">
            <Header />
          </div>
          <Section header={"About Me"}>
            <CodeBlock codeBlock={aboutMe} />
            {/* <div className="content">{paragraph.big}</div> */}
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
              <h3>First Class with Honours in Computing - Cardiff </h3>
              <p>{paragraph.big}</p>
              <h3>3 A levels, Royal Forest of Dean College</h3>
              <p>{paragraph.big}</p>
              <h3>GCSE's</h3>
              <p>{paragraph.big}</p>
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
