import styles from './Title.module.css'

const Title = ({subTitle, title}) => {
  return (
    <div className={styles.title}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
