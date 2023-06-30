import React from 'react'
import "./FooterBlue.css";
import images from "../images/Logo.png";

export default function Footer() {
  return (
    <div className="footerComponent">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <div className="col-one">

          <ul className="social-icon">
            <div className='logomsg'>
              <img src={images} alt="img_loading" height="72" width="10%" />
              <p><h3>We &#10084; our stylists!</h3>
                We also love consistency and quality when it comes to hair. That is why we are dedicated to our stylists’ training. All new employees are given a 1-year Ginger & Maude® training program. We also provide apprenticeships and continuing education opportunities. (Trainings are in addition to prior beauty school education.)
              </p>
              <br></br>
              <p>&copy;2023 Salon | All Rights Reserved</p>
            </div>
          </ul>
        </div>
        <div className="col-onec">

          <ul className="social-icon">
            <div>

              <h3 id='link'>Connect on Social</h3>

              <div className='icon'>
                <a id='link' href="!#"><i className="fa fa-facebook"></i>Facebook</a>
              </div>
              <br />
              <div className='icon'>
                <a id='link' href="!#"><i className="fa fa-instagram"></i>Instagram</a>
              </div>
              <br />
              <div >
                <a id='link' href="!#"><i className="fa fa-youtube"></i>Youtube</a>
              </div>
              <br />
              <div className='icon'>
                <a id='link' href="!#"><i className="fa fa-twitter"></i>Twitter</a>
              </div>
            </div>
          </ul>
        </div>
        <div className="col-onec">
          <ul className="menu">
            <div>
              <h3 id='link'>Useful Links</h3>
              <li className="menu__item"><a className="menu__link" href="!#">Home</a></li>
              <li className="menu__item"><a className="menu__link" href="!#">About</a></li>
              <li className="menu__item"><a className="menu__link" href="!#">Services</a></li>
              <li className="menu__item"><a className="menu__link" href="!#">Contact</a></li>
            </div>
          </ul>
        </div>

      </footer>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}
