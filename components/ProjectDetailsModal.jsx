import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import Image from "next/image";
import styles from "../styles/ProjectsPage.module.css";
import { XCircleIcon } from "@heroicons/react/outline";
import Button from "react-bootstrap/Button";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectDetailsModal = ({
  show,
  onHide,
  projects,
  selectedProjectIndex,
}) => {
  return (
    <Modal
      className={styles.modal}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.modalContent}>
        {/* Project preview content here */}

        <div className={styles.closepreview} onClick={onHide}>
          <XCircleIcon className={styles.closeBtn} />
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
        {/* </div> */}
        {/* <div className={styles.modalOverlay} onClick={handleModalClose} />  this allows the closing of modal when user clicks outside of the modal */}
      </div>
    </Modal>
  );
};
export default ProjectDetailsModal;
