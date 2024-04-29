import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero} container`} id="hero">
      <div className={styles.heroText}>
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus nam alias, dicta at iusto libero obcaecati suscipit
          vero excepturi ea quia voluptate dolorem quod itaque magnam? Harum
          possimus voluptatibus repudiandae qui pariatur distinctio. Libero,
          perspiciatis? Nihil quas excepturi fugit laudantium dolores aliquid
        </p>
        <button className="btn">
          Explore More <FaLongArrowAltRight className={styles.heroIcon}/>
        </button>
      </div>
    </div>
  );
};

export default Hero;
