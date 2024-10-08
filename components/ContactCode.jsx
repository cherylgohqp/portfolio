import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "cherylgoh.com",
    href: "https://cherriel-designs.vercel.app/",
  },
  {
    social: "email",
    link: "cheryl_goh@alumni.sutd.edu.sg",
    href: "mailto:cheryl_goh@alumni.sutd.edu.sg",
  },
  {
    social: "linkedin",
    link: "cheryl.goh",
    href: "https://www.linkedin.com/in/cheryl-g-899546159",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
