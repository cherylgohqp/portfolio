import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import { EyeIcon } from "@heroicons/react/outline";

const ProjectCard = ({ project, onClick }) => {
  project.tags.map((tag) => console.log(tag));
  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={project.image}
        objectFit="fill"
        height={450}
        width={450}
        alt={project.name}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <EyeIcon className={styles.preview} />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
