import myPhoto from '../assets/portrait.jpg';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={myPhoto} alt="Shawna Chirillo" width="150" />
      <p>I’m a React developer with a passion for design, storytelling, and creating experiences for users. I specialize in web development, branding, and building powerful interfaces using React.</p>
    </section>
  );
};

export default About;
