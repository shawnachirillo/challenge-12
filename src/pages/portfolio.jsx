import Project from '../components/Project';
import project1 from '../assets/portrait.jpg';
// Add up to 6 projects

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        <Project 
          title="Cool App"
          image={project1}
          deployedLink="https://yourapp.netlify.app"
          repoLink="https://github.com/yourusername/cool-app"
        />
        {/* Repeat <Project /> for more apps */}
      </div>
    </section>
  );
};

export default Portfolio;
