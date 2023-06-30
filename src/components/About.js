import React from 'react'
import "./Home.css";
import Footer from './Footer';
import "./About.css";
import imagesc from "../images/Certified.PNG.png";
import Ceo from "../images/Jane.jpg";
import Art from "../images/John.jpg";
import Designer from "../images/Mike.jpg";


export default function Home() {
  return (

    <div className="components">
      <div><div className="about-section">
        <h1>ABOUT SALON</h1>
        <p>We don't just love hair, we love people!</p>
        <p>SALON is on a mission—to offer hair services and products in a welcoming environment, with a focus on promoting and supporting inclusion and the well-being of our customers, employees and community.

          More than 15 years ago, I envisioned a hair salon inspired by red hair and its rare, explosively visual fabulousness. I wanted my salon to be like that also, a place where everyone feels they can come to be seen and supported while expressing their unique identity.

          Today, that original vision has shifted, pushed to change by listening to the voices that most matter: yours. We have pivoted to focus on all colors, all waves and curls and coils, all voices and people, creating a sea of colors and waves as our visual power. Our expert stylists still give customers personal attention in our boutique salons, while also—just as importantly—protecting people’s hearts and bodies. We have four locations and extended hours so we are available when and where you need us. Come join us in our ever-evolving movement towards creating positive change in the salon industry!</p>
      </div>

        <h2 >Our Team</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img className="team" src={Ceo} alt="Jane" />
              <div class="card-body">
                <h5 class="card-title">Art Director</h5>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="team" src={Art} alt="Mike" />
              <div class="card-body">
                <h5 class="card-title">CEO & Founder</h5>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>


              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="team" src={Designer} alt="John" />
              <div class="card-body">
                <h5 class="card-title">Designer</h5>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div>
        <h3>We are a Certified Sustainable Salon <img className="certified" src={imagesc} alt="Loading" /></h3>
        <p>
          SALON is committed to sustainably disposing and recycling salon waste. As a Certified Sustainable Salon with Green Circle Salons, we can sustainably dispose of: used foils, color tubes, hair clippings, and excess hair color; in addition to recycling paper, plastics, glass, and metal with our curbside disposal service.
        </p></div>
      <div className="bottomone"><Footer /></div>


    </div>

  )
}



