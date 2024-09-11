import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import { EyeIcon } from "@heroicons/react/outline";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={project.image[0]}
        objectFit="contain"
        height={350}
        width={350}
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
      </div>
    </div>
  );
};

export default ProjectCard;
