import Image from "next/image";
import classes from "../styles/AboutPage.module.css";

const AboutPage = () => {
  let skillsList = [
    "React",
    "Typescript",
    "Javascript",
    "NodeJs",
    "SCSS",
    "HTML",
    "Java",
    "Python",
    "Git",
    "Gitlab",
    "Visual Studios",
    "MongoDB",
    "Springboot",
    "Express",
  ];
  return (
    <>
      <div className={classes["about-me-container"]}>
        <div className={classes["overlay"]}>
          <div className={classes["content"]}>
            <div className={classes["section-container"]}>
              <h1 className={classes["section-title"]}>About Me</h1>
              <p className={classes["about"]}>
                Hi there, I'm Cheryl, a software engineer who loves bringing
                figma designs to life and building user-friendly websites and
                webapps.
                <br></br>
                <br></br>My coding journey began with Python and Java. Over
                time, I transitioned to working primarily with React,
                TypeScript, and SCSS as a software engineer in my current role.
                <br></br>
                <br></br>When I'm not coding, you might find me sweating it out
                at dance classes or going on nature trail walks!
                <br></br>
                <br></br> Some of my skills include:
              </p>
              <ul className={classes["skillsList"]}>
                {skillsList.map((skill) => {
                  return (
                    <li>
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
              {/* future work: maybe I can add some testimonials here */}
              <div className={classes["picture"]}>
                <Image
                  src="/Me-cropped.jpg"
                  alt="this is me"
                  height={800}
                  width={800}
                  objectFit="cover"
                />
              </div>
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
