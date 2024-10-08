import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import Image from "next/image";
import styles from "../styles/ProjectsPage.module.css";
import { XCircleIcon } from "@heroicons/react/outline";
import "react-awesome-slider/dist/styles.css";
import { Icon } from "@iconify/react";

// import Video from "next-video";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectDetailsModal = ({
  show,
  onHide,
  projects,
  selectedProjectIndex,
}) => {
  const imagesMap = projects[selectedProjectIndex].image.map((image) => {
    return (
      <div key={image} className={styles.sliderImageContainer}>
        <Image
          className={styles.projectimage}
          src={image}
          layout="fill" // This makes the image fill its container
          objectFit="contain"
          alt={projects[selectedProjectIndex].name}
        />
      </div>
    );
  });

  const videosMap =
    projects[selectedProjectIndex].video &&
    projects[selectedProjectIndex].video.length > 0 &&
    projects[selectedProjectIndex].video.map((videoUrl, index) => {
      return (
        <div key={videoUrl} className={styles.sliderVideoContainer}>
          <iframe
            key={index}
            src={videoUrl}
            allowFullScreen
            width="100%"
            height="100%"
            title={`Video ${index + 1}`}
          />
        </div>
      );
    });

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

        <div className={styles.imageSlider}>
          <AutoplaySlider
            animation="scaleOutAnimation"
            play={true}
            cancelOnInteraction={true}
            interval={4000}
          >
            {imagesMap}
          </AutoplaySlider>
        </div>
        <div className={styles.projectDetails}>
          <h3 className={styles.header}>
            {projects[selectedProjectIndex].name}
          </h3>
          <p className={styles.description}>
            {projects[selectedProjectIndex].description}
          </p>

          <p
            className={styles.additionalDetails}
            dangerouslySetInnerHTML={{
              __html: projects[selectedProjectIndex].details,
            }}
          />
          {projects[selectedProjectIndex].video &&
            projects[selectedProjectIndex].video.length > 0 && (
              <AutoplaySlider
                animation="scaleOutAnimation"
                cancelOnInteraction={true}
                interval={4000}
              >
                {videosMap}
              </AutoplaySlider>
            )}

          <div className={styles.cta}>
            {projects[selectedProjectIndex].source_code && (
              <a
                href={projects[selectedProjectIndex].source_code}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tag}
              >
                Source Code
                <Icon className={styles.icon} icon="akar-icons:github-fill" />
              </a>
            )}
            {projects[selectedProjectIndex].demo && (
              <a
                href={projects[selectedProjectIndex].demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoTag}
              >
                Live Site{" "}
                <Icon className={styles.icon} icon="bx:link-external" />
              </a>
            )}

            {projects[selectedProjectIndex].casestudy && (
              <a
                href={projects[selectedProjectIndex].casestudy}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.casestudy}
              >
                Case Study{" "}
                <Icon className={styles.icon} icon="bx:link-external" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ProjectDetailsModal;
