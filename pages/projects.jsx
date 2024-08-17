import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import { useState } from "react";
import Image from "next/image";
// import Video from "next-video";
// import getStarted from "/videos/get-started.mp4";

// export default function Page() {
//   return <Video src={getStarted} />;
// }

const ProjectsPage = ({ projects }) => {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [isOpen, setisOpen] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
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

              <div className={styles.closepreview}>
                <button onClick={handleModalClose}>Close Preview</button>
              </div>
              <Image
                className={styles.projectimage}
                src={projects[selectedProjectIndex].image}
                height={450}
                width={450}
                alt={projects[selectedProjectIndex].name}
              />
              {/* <Video src={getStarted} /> */}
              <h3>{projects[selectedProjectIndex].name}</h3>
              <p>{projects[selectedProjectIndex].description}</p>
              <div className={styles.cta}>
                {projects[selectedProjectIndex].source_code && (
                  <a
                    href={projects[selectedProjectIndex].source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline}
                  >
                    Source Code
                  </a>
                )}
                {projects[selectedProjectIndex].demo && (
                  <a
                    href={projects[selectedProjectIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline}
                  >
                    Live Demo
                  </a>
                )}
              </div>

              {/* Add any other relevant project details */}
            </div>
            {/* <div className={styles.modalOverlay} onClick={handleModalClose} />  this allows the closing of modal when user clicks outside of the modal */}
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
