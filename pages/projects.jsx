import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import { useState } from "react";

const ProjectsPage = ({ projects }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  const handleModalClose = () => {
    setSelectedProjectIndex(null);
  };
  return (
    <>
      <h3>Stuff I've Built So Far - TO BE EDITED!! </h3>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => {
              console.log("clicked!");
              handleProjectClick(index);
            }}
          />
        ))}

        {selectedProjectIndex !== null && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              {/* Project preview content here */}
              <h3>{projects[selectedProjectIndex].name}</h3>
              <p>{projects[selectedProjectIndex].description}</p>
              {/* <Image
                src={projects[selectedProjectIndex].image}
                height={300}
                width={600}
                alt={projects[selectedProjectIndex].name}
              /> */}
              {/* Add any other relevant project details */}
              <button onClick={handleModalClose}>Close Preview</button>
            </div>
            <div className={styles.modalOverlay} onClick={handleModalClose} />
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
