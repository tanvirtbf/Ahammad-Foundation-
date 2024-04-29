import React from "react";
import { FaAddressBook, FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './Contact.module.css';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a197f4ce-a494-4a0e-a5c9-0b1e1e6ec823");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactCol}>
        <h3>Send us a Message <MdEmail style={{marginLeft: '10px', fontSize: '30px'}}/></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum quia est dolores veniam consequuntur voluptatum neque, fugiat optio iure officia incidunt nesciunt, pariatur et debitis cumque quidem velit magni eaque vel delectus aliquam maiores quibusdam! Natus repellat iusto aperiam!</p>
        <ul>
          <li><MdEmail className={styles.emailIcon} /> Contact@ahammad2022foundation@gmail.com</li>
          <li><FaPhoneAlt className={styles.phoneIcon} />  01317277858</li>
          <li><FaAddressBook className={styles.addressIcon} /> Sonir Akhra, Zia-sharani road, dhaka 1236</li>
        </ul>
      </div>
      <div className={styles.contactCol}>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className={`btn dark-btn`}>Submit Now <FaLongArrowAltRight className={styles.submitBtnIcon}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
