import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import { useState } from "react";

import ProjectDetailsModal from "../components/ProjectDetailsModal";

// import { Icon } from "@iconify/react";
// import Video from "next-video";

const ProjectsPage = ({ projects }) => {
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
      <h3>Projects I've Worked On - Upgrading In Progress </h3>
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
