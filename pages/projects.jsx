import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import { useState } from "react";

import ProjectDetailsModal from "../components/ProjectDetailsModal";

// import { Icon } from "@iconify/react";

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
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedProjectIndex(null);
    setShowModal(false);
  };
  const renderProjectModal = () => {
    if (selectedProjectIndex === null) return null;
    return (
      <ProjectDetailsModal
        show={showModal}
        onHide={handleModalClose}
        selectedProjectIndex={selectedProjectIndex}
        projects={projects}
      />
    );
  };

  return (
    <>
      <h3>Stuff I've Built So Far - Upgrading In Progress </h3>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => {
              handleProjectClick(index);
            }}
          />
        ))}
      </div>

      {renderProjectModal()}
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
