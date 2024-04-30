import styles from './Campus.module.css'
import gallery1 from '../../assets/program1.jpg'
import gallery2 from '../../assets/program2.jpg'
import gallery3 from '../../assets/program3.jpg'
import gallery4 from '../../assets/program1.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";


const Campus = () => {
  return (
    <div className={styles.campus} id='campus'>
      <div className={styles.gallery}>
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className="btn dark-btn">See More Here <FaLongArrowAltRight /></button>
    </div>
  )
}

export default Campus

