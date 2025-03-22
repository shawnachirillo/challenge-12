import resumeFile from '../assets/portrait.jpg';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href={resumeFile} download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
};

export default Resume;
