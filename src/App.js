import React from "react";
import logo from "./png.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="placeholder" />
        <div className="info">
          <h2>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h2>
          <p className="address">
            235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar
            Haryana - 125001
          </p>
          <div className="contact">
            <p>
              Contact: 9015702702 <span> Email: infopb77@gmail.com</span>
            </p>
          </div>
          <p className="cin">CIN NO.: U65999HR2018PLC077024</p>
        </div>
      </div>

      <div className="container">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg"
          alt="img"
          className="photo"
        />
        <div className="box1">
          <div className="para-box">
          <p className="para">
            Motivated Developer with a keen eye for detail and a strong drive to
            create inventive and intuitive web applications. Excited to apply my
            expertise in front-end development.
          </p>
          <h3 className="name">Priyanka Chaudhary</h3>
          <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="box2">
          <div className="b1">
            <h1>Become a member</h1>
            <div className="flex">
              <p className="active">E-kyc</p>
              <p className="de-active">manual kyc</p>
            </div>
            <label>Enter Aadhar no.</label>
            <input type="text" placeholder="Enter Aadhar Number" />
            <br />
            <button>Get OTP</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="cat-1">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>
        <div className="cat-1">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Safety Center</p>
            <p>Community Guidelines</p>
        </div>
        <div className="cat-1">
            <h4>Legal</h4>
            <p>Cookies Policy</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Low  Enforcement</p>
        </div>
        <div className="cat-1">
            <h4>Install App</h4>
        </div>
      </footer>
    </>
  );
}

export default App;
