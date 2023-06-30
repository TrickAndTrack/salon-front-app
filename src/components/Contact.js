import React from 'react'

import "./Contact.css";
import Footer from './Footer';
import contact from "../images/Contact/contact.jpeg";
import Location from "../images/Contact/Location.png";
import career from "../images/Contact/career.png";
import phone from "../images/Contact/Phone.png";
import watch from "../images/Contact/watch.png";


export default function Contact() {
  return (
    <div>
      

      <div className="card-body">
        <img src={contact} className="card-img-top" alt="..." />
        <div className="card-img-overlay">
          <h3 className="card-text">Contact Regis</h3>
          <h3 className="card-text">We're here to listen to you.</h3>

        </div>
      </div>
      <h2 >Contact us</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card text-bg-light mb-3" >
          <div className="card-header">Corporate Address</div>
          <div className="card-body">
          <img src={Location} className="card-img-top a" alt="..." /> 
            <p className="card-text">Regis Corporation 3701 <br />Wayzata Boulevard, Suite 500 <br />Minneapolis, MN  55416</p>
          </div>
        </div>
        <div className="card text-bg-light mb-3" >
          <div className="card-header">Career Opportunities</div>
          <div className="card-body">
          <img src={career} className="card-img-top a" alt="..." />
          
            <p className="card-text">Expand your talent and your future <br /> Discover a new professional direction.</p>
          </div>
        </div>
        <div className="card text-bg-light mb-3" >
          <div className="card-header">Other Inquiries</div>
          <div className="card-body">
          <img src={phone} className="card-img-top a" alt="..." />
            <p className="card-text">Franchise Opportunities <br />Real Estate Contacts <br />Employment Opportunities<br />
              Vendors - If you wish to become a vendor for Regis Corporation please send information about your product
              or service to Corporate Address</p>
          </div>
        </div>
        <div className="card text-bg-light mb-3" >
          <div className="card-header">Opening Hours</div>
          <div className="card-body">
          <img src={watch} className="card-img-top a" alt="..." />
            <p className="card-text">Mon - Fri 7:00 - 13:00 & 15:00 23:00 <br />Sat - Sun 7:00 - 20:00 <br />If you wish to pre booking for Regis Corporation please send
             information about your product or date time and hair cut images or service to above address or on phone call  you wish to contact.</p>
          </div>
        </div>
      </div>
      <div className="bottomone"><Footer /></div>
    </div>
  )
}
