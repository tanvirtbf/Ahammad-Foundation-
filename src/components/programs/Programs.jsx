import styles from './Programs.module.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import { MdFoundation } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { SiInteractiondesignfoundation } from "react-icons/si";


const Programs = () => {
  return (
    <div className={`${styles.programs}`} id='program'>
      <div className={styles.program}>
        <img src={program1} alt="" />
        <div className={styles.caption}>
          <MdFoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program2} alt="" />
        <div className={styles.caption}>
          <SiWikimediafoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program3} alt="" />
        <div className={styles.caption}>
          <SiInteractiondesignfoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program1} alt="" />
        <div className={styles.caption}>
          <MdFoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program2} alt="" />
        <div className={styles.caption}>
          <SiWikimediafoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program3} alt="" />
        <div className={styles.caption}>
          <SiInteractiondesignfoundation className={styles.icon}/>
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
