import React from 'react'


import Footer from './Footer';
import "./Shop.css";
import Hair from "../images/Product/Hair-Product.jpg";
import Hempz from "../images/Product/Hempz.jpg";
import Redken from "../images/Product/Redken.jpg";
import Joice from "../images/Product/Joice.jpg";
import Sebastian from "../images/Product/Sebastian.jpg";
import Biolage from "../images/Product/Biolage.jpg";
import Biolagea from "../images/Product/Biolage-1.jpg";
import miracle from "../images/Product/miracle.jpg";
import Hadrating from "../images/Product/hadrating.jpg";
import paul from "../images/Product/paul.jpg";
import Travel from "../images/Product/travel.jpg";

export default function Shop() {
  return (

    <div className="components">
     
      <div className="card-body">
        <img className='ServiceBackground' src={Hair} alt="Hair Services Loading" />
      </div>
      <div>
        <div className="about-section">
          <h1>Shop by Product</h1>

          <h5>Buy your favorite hair products</h5>
        </div>


      </div>
      <div class="row row-cols-1 row-cols-md-5 g-4">
      <div class="col">
          <div class="card h-100">
            <img src={Hempz} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">HEMPZ</h5>
                <h6 class="card-text">Deep Conditioner, Colored Hair Conditioners & Gentle Conditioner </h6>
                <h10>Salon Hair Products, Color Care Hair Conditioner & Deep Conditioner for Curly Hair</h10>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Redken} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">REDKEN</h5>
                <h6 class="card-text">Redken Color Extend Shampoo For Color-Treated Hair</h6>
                <h10>Redken Color Extend Shampoo for Color-Treated Hair gently cleanses and protects to leave hair manageable, refreshed and shiny.</h10>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Joice} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h6 class="card-text">Joico K-PAK Conditioner</h6>
                <h10>Joico K-PAK Conditioner is designed to strengthen, moisturize and detangle.</h10>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Sebastian} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h6 class="card-text">SEBASTIAN Shaper 80%</h6>
                <h10>SEBASTIAN Shaper 80% gives a touchable, brushable hold and creates the most memorable shapes, looks and styles on the world's fashion stage.</h10>
                
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Biolage} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Biolage Color Last Shampoo</h5>
                <p class="card-text">Biolage Colorlast Shampoo by Matrix gently cleanses your hair while helping you maintain the depth and tone of your beautiful salon color. </p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Biolagea} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Biolage Ultra Hydra Source Conditioner</h5>
                <p class="card-text">Quench parched hair with Biolage Ultra Hydrasource Conditioner by Matrix, which is inspired by the juicy aloe plant. Bring super-dry hair back to life with this intense treatment that instantly renews moisture.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Hadrating} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Moroccanoil Hydrating Shampoo</h5>
                <p class="card-text">Moroccanoil Hydrating Shampoo gently cleanses, while infusing strands with antioxidant-rich argan oil and vitamins.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={paul} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Paul Mitchell Smoothing Super Skinny Serum Travel Size</h5>
                <p class="card-text">Paul Mitchell Smoothing Super Skinny Serum Travel Size makes it easier and faster to achieve silky-smooth hair when you're away from home.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={miracle} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">It's A 10 Miracle Leave-In</h5>
                <p class="card-text">Treat your hair to It's a 10 Miracle Leave-In, the restorative multitasker that conditions and nourishes hair.</p>
              </div>
          </div>
          
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Travel} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Moroccanoil Treatment Travel Size</h5>
                <p class="card-text">Moroccanoil Treatment Travel Size is perfect for on-the-go styling! It is a completely transformative treatment that leaves hair healthy, shiny and more manageable.</p>
              </div>
          </div>
        </div>
      </div>



      <div className="bottomone"><Footer /></div>


    </div>

  )
}





