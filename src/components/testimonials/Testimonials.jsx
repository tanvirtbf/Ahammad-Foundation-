import { useRef } from "react";
import backIcon from "../../assets/back-icon.png";
import nextIcon from "../../assets/next-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -58.33) {
      tx -= 16.6666666667;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < -16.6666666667) {
      tx += 16.6666666667;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className={styles.testimonials} id="testimonials">
      <img
        src={nextIcon}
        alt=""
        className={styles.nextBtn}
        onClick={slideForward}
      />
      <img
        src={backIcon}
        alt=""
        className={styles.backBtn}
        onClick={slideBackward}
      />
      <div className={styles.slider}>
        <ul ref={slider}>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user1} alt="" />
                <div>
                  <h3>Tanvir Ahmed</h3>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user1} alt="" />
                <div>
                  <h3>Tanvir Ahmed</h3>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user1} alt="" />
                <div>
                  <h3>Tanvir Ahmed</h3>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user2} alt="" />
                <div>
                  <h3>Sadek Ahmed</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user3} alt="" />
                <div>
                  <h3>Sabbir Ahmed</h3>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={user4} alt="" />
                <div>
                  <h3>Rifat Ahmed</h3>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                odit natus perspiciatis distinctio adipisci eos asperiores
                accusamus aut exercitationem nam vel vitae ea atque, eius,
                aliquam fugit autem repudiandae et?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
