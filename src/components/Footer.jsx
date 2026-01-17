import { FaFacebook } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-white p-4 text-center text-dark my-5">
      <div className="d-flex justify-content-center mb-3 ">
        <Link className="navbar-brand " to="/">
          <img
            className="img rounded "
            src="/images/1765431524778.jpg"
            alt="Brand-logo"
            width="100"
            height="100"
          />
        </Link>
        {/* <p style={{ fontWeight: 600, fontSize: 60 }}>ZERO BALANCE</p> */}
      </div>
      <p style={{ fontWeight: 900, fontSize: 30 }}>
        © Copyright
        <span style={{ fontWeight: 700, color: '#0d6efd' }}>ZERO BALANCE</span>
        All Rights Reserved
      </p>

      <div className="d-flex justify-content-center mb-3 ">
        <a
          href="https://www.facebook.com/profile.php? id=100036783411763"
          target="_blank"
          rel="noopener noreferrer"
          className="footerlink p-3 border rounded-circle border-info-subtle mx-2"
        >
          <FaFacebook />
        </a>
        <a
          href="https://m.me/your.username"
          target="_blank"
          rel="noopener noreferrer"
          className="footerlink p-3 border rounded-circle border-info-subtle mx-2"
        >
          <FaFacebookMessenger />
        </a>

        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="footerlink p-3 border rounded-circle border-info-subtle mx-2"
        >
          <IoLogoWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="footerlink p-3 border rounded-circle border-info-subtle mx-2"
        >
          <AiFillInstagram />
        </a>
      </div>

      <p style={{ fontWeight: 700, fontSize: 20 }}>
        Designed by
        <span style={{ fontWeight: 900, color: '#0d6efd' }}> Sabbir khan</span>
      </p>
    </div>
  );
};

export default Footer;
