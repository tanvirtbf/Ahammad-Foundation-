import styles from "./SingleSlider.module.css";

const SingleSlider = () => {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cardCover}>
          <img
            src="https://cdn.assunnahfoundation.org/donation/sadaqah.jpg"
            alt=""
          />
        </div>
        <div className={styles.cardBody}>
          <p>
            যাকাত একদিকে যেমন ইসলামের অন্যতম মৌলিক স্তম্ভ, তেমনই এটি একটি মানবিক
            ইবাদত। যাকাত অর্থনৈতিক বৈষম্য দূর করতে সব থেকে বড় ভূমিকা পালন করে।
            আপনার প্রদানকৃত যাকাতের মাধ্যমে সচল হতে পারে একটি অচল সংসারের চাকা।
          </p>
          <a href="#">দান করুন</a>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
