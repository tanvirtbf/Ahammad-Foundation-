import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero} container`} id="hero">
      <div className={styles.heroText}>
        <h1>আমরা কাজ করি মানুষের স্বার্থে </h1>
        <p>
          আহাম্মদ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক ও পূর্ণত মানবকল্যাণে নিবেদিত
          সেবামূলক প্রতিষ্ঠান। এই প্রতিষ্ঠান আর্তমানবতার সেবা, সমাজ সংস্কার,
          মহত্তম নীতিচেতনার সঞ্চার, কর্মসংস্থান তৈরি, দারিদ্র্য বিমোচন, বহুমুখী
          শিক্ষায়ন প্রকল্প পরিচালনা, ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে
          স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি
          পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে সত্য
          ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি
          প্রচেষ্টা চালিয়ে যাচ্ছে।
        </p>
        <a href="https://www.facebook.com/profile.php?id=100092790835360">
          <button className="btn">
            ফেইসবুক পেজ <FaLongArrowAltRight className={styles.heroIcon} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
