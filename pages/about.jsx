import Image from "next/image";
import classes from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={classes["about-me-container"]}>
        <div className={classes["overlay"]}>
          <div className={classes["content"]}>
            <Image
              src="/Me.jpg"
              className={classes["picture"]}
              alt="this is me"
              height={450}
              width={800}
            />
            <div className={classes["section-container"]}>
              <h1 className={classes["section-title"]}>About Me</h1>
              <p className={classes["about"]}>
                Hi there, I'm Cheryl, a front end engineer who loves bringing
                figma designs to life and building user-friendly websites and
                webapps.
                <br></br>
                <br></br>My coding journey began with Python and Java, and now
                I'm mainly working with ReactJS, typescript and SCSS.
                <br></br>
                <br></br>When I'm not coding, you might find me sweating it out
                at dance classes or going on nature trail walks!
                <br></br>
                <br></br> Some of my skills include:
              </p>
              <ul className={classes["skillsList"]}>
                <li>
                  <span>Figma</span>
                </li>
                <li>
                  <span>Java</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>ReactJS</span>
                </li>
                <li>
                  <span>TypeScript</span>
                </li>
                <li>
                  <span>SCSS</span>
                </li>
                <li>
                  <span>Git</span>
                </li>
              </ul>
              {/* maybe can add some testimonial part here? */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
