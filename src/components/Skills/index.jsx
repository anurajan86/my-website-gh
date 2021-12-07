import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>HTML/CSS</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Pandas/NumPy/Matplotlib</li>
          <li>React.js</li>
          <li>Keras/Tensorflow</li>
          <li>Flask</li>
          <li>SQL Alchemy</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>MySQL Workbench</li>
          <li>IntelliJ</li>
          <li>PyCharm</li>
          <li>Git & Github</li>
        </div>
      </div>
    </div>
  );
};

export default About;