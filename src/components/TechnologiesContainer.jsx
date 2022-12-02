import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Creating HTML elements with React" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Final form of style after the usage of Sass for more efficient work" },
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Developing great CSS with frameworks (Bootstrap, Bulma etc.) and this preprocessor option" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Main programing language of choice for these kind of projects" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Back-end JavaScript runtime environment to execute JavaScript code outside a web browser" },
  { id: "react", name: "React", icon: <DiReact />, description: "JavaScript library for building user interfaces based on components" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tech</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
