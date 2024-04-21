import Image from "next/image";
import classes from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={classes["about-me-container"]}>
        <div className={classes["overlay"]}>
          <div className={classes["content"]}>
            {/* <div className={classes["picture"]}> */}
            <span className={classes["paper-clip"]}></span>
            <Image
              src="/Me.jpg"
              className={classes["picture"]}
              alt="this is me"
              height={450}
              width={950}
            />
            {/* </div> */}
            <div className={classes["section-container"]}>
              <h3 className={classes["section-title"]}>About Me</h3>
                <p>
                  Hi there! I'm Cheryl, a front-end developer based in SG. I
                  love building beautiful and responsive websites. When I'm not
                  coding, you can find me dancing or exploring new places.
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
