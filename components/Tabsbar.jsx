import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
    </div>
  );
};

export default Tabsbar;

// Understanding Next.js Routing:
//  const router = useRouter();
// -> File-Based Routing: Next.js uses a file-based routing system where the structure of files inside the pages directory directly corresponds to routes in your application. For example:
//A file named about.js or about.jsx inside the pages directory would correspond to the /about route.
//Similarly, index.js (or index.jsx) inside the pages folder corresponds to the root route /.
