import styles from './About.module.css'
import about from '../../assets/about.jpg'
import imageIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.aboutLeft}>
        <img src={about} alt="" className={styles.aboutImg}/>
        <img src={imageIcon} alt="" className={styles.iconImage} />
      </div>
      <div className={styles.aboutRight}>
        <h3>About Foundation</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo exercitationem nulla tempora voluptatibus aperiam corrupti, dicta illum! Eveniet esse dolore excepturi magni laborum obcaecati ducimus! Ducimus harum possimus labore fugit, ut, fuga eius totam consectetur at nesciunt tempora. Nihil voluptate maiores commodi ex, harum illo perspiciatis nobis sed consequuntur provident odio voluptas vitae quisquam atque corrupti consequatur. Quae in dolores, corrupti quibusdam recusandae omnis at minus aliquid, cum saepe eum? Accusamus accusantium veniam minima quo odit praesentium? Ut necessitatibus reprehenderit placeat corrupti aliquam commodi est totam excepturi cum praesentium unde, nostrum labore repellat beatae quae. Voluptas necessitatibus exercitationem dolorum.</p>
      </div>
    </div>
  )
}

export default About
