import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu,setMobileMenu] = useState(false)

  const handleNavbar = () =>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? styles.darkNav : ""}`}>
      <h1 className={styles.logoName}>
        <Link to="hero" smooth={true} offset={0} duration={500}>Ahammad Foundation</Link>
      </h1>
      <ul className={`${mobileMenu? styles.hideMobileMenuSmooth : styles.hideMobileMenu} `}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={handleNavbar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500} onClick={handleNavbar}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500} onClick={handleNavbar}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500} onClick={handleNavbar}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={handleNavbar}>
            Testimonial
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500} onClick={handleNavbar}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <RiMenu3Fill className={styles.menuIcon} onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
