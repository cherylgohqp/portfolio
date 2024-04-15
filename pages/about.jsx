import Image from "next/image";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
