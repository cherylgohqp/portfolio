import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h4 className={styles.welcome}>Hi there, I'm</h4>
            <h1 className={styles.name}>Cheryl Goh</h1>
            <h6 className={styles.bio}>
              {" "}
              Software Engineer By Day, Dancer By Night
            </h6>
            <div className={styles.buttonContainer}>
              <Link href="/projects">
                <button className={styles.button}>View Work</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
