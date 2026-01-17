import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="container my-5">
      <div
        className="text-center my-5"
        data-aos="zoom-in-down"
        data-aos-offset="300"
        data-aos-duration="1000"
      >
        <h1>
          Contact<span className="text-primary"> us</span>
        </h1>
        <hr className="w-25 m-auto" />
      </div>
      <div
        className="row p-4 my-5"
        style={{
          boxShadow: ' 4px 4px 25px rgba(0, 0, 0, 0.4)',
          borderRadius: '10px',
        }}
        data-aos="zoom-in-up"
        data-aos-offset="300"
        data-aos-duration="1000"
      >
        <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex">
          <a
            className="contact p-3 border rounded-circle border-info-subtle"
            href="https://www.google.com/maps?q=Sonirakhra,Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot />
          </a>

          <div className="ms-3">
            <h4 style={{ margin: ' 0', ' fontWeight': ' 900' }}>Address</h4>
            <i>Sonirakhra,Kadamtali,Dhaka-1236</i>
          </div>
        </div>

        <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex my-sm-5 my-md-5 my-lg-0 my-5">
          <a
            className="contact p-3 border rounded-circle border-info-subtle"
            href="tel:+8801XXXXXXXXX"
          >
            <IoCall />
          </a>

          <div className="ms-3">
            <h4 style={{ margin: ' 0', ' fontWeight': ' 900' }}>Call Us </h4>
            <i>+880 123456789</i>
          </div>
        </div>

        <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex">
          <a
            className="contact p-3 border rounded-circle border-info-subtle"
            href="mailto:example@email.com?subject=Hello"
          >
            <MdEmail />
          </a>
          <div className="ms-3">
            <h4 style={{ margin: ' 0', ' fontWeight': ' 900' }}>Email Us</h4>
            <i>sabbir01721@gmail.com</i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
