import React from 'react'


import Footer from './Footer';
import "./HairService.css";
import Hair from "../images/Hair_Services.jpg";
import Haircut from "../images/HairCut.jpg";
import Color from "../images/color.jpg";
import everything from "../images/Everything.jpg";
import AddOns from "../images/AddOn.jpg";


export default function HairService() {
    return (

        <div className="components">
            
            
            <div className="card-body">
                <img className='ServiceBackground' src={Hair} alt="Hair Services Loading" />

                <div className="card-img-overlay">
                    <p className="card-text">HAIR SERVICES MENU</p>
                    <h3 className="card-text">Discover What We Do</h3>
                    <br />
                    <br />
                    <h3 className="card-text">We use Goldwell and KEVIN.MURPHY products in our color services.</h3>

                </div>
            </div>
            <div>
                <div className="about-section">
                    <h1>HAIR SERVICES</h1>

                    <h5>Note: Prices quoted here are starting prices. Actual prices may be higher,
                        based on desired end result. If you have any questions, please don't hesitate to
                        consult with your stylist.</h5>
                </div>


            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col-1">
                    <div class="card">
                        <img src={Haircut} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Haircut</h5>
                            <p class="card-text">Haircut, New Talent         .......................................................		$50.00</p>
                            <p class="card-text">Haircut, Stylist        .......................................................		$70.00</p>
                            <p class="card-text">Haircut, Lead Stylist	 .......................................................		$86.00+</p>
                            <p class="card-text">Clipper Cut, New Talent .......................................................		$38.00</p>
                            <p class="card-text">Clipper Cut, Stylist .......................................................		$62.00</p>
                            <p class="card-text">Clipper Cut, Lead Stylist .......................................................		$68+.00</p>
                            <p class="card-text">Extended Haircut, New Talent .......................................................		$74.00</p>
                            <p class="card-text">Extended Haircut, Stylist	         ......................................................  $99.00</p>
                            <p class="card-text">HExtended Haircut, Lead Stylist     ......................................................  $111.00+</p>
                            <p class="card-text">Extended Plus Haircut, Stylist	     ......................................................	  $123.00</p>
                            <p class="card-text">Extended Plus Haircut, Lead Stylist ......................................................  $135.00+</p>
                            <p class="card-text">Cut + Scalp Treatment, New Talent	.......................................................	$99.00</p>
                            <p class="card-text">Cut + Scalp Treatment, Stylist	.......................................................	$123.00</p>
                            <p class="card-text">Cut + Scalp Treatment, Lead Stylist	.......................................................	$135.00+</p>
                            <p class="card-text">Cut with KM Treat.Me, New Talent .......................................................		$89.00</p>
                            <p class="card-text">Cut with KM Treat.Me, Stylist	.......................................................	$114.00</p>
                            <p class="card-text">Cut with KM Treat.Me, Stylist	.......................................................	$114.00</p>
                            <p class="card-text">Cut with KM Treat.Me, Lead Stylist	 .......................................................	$125.00+</p>
                            <p class="card-text">Cut + Specialty Wig Design	.......................................................	$222.00+</p>
                            <p class="card-text">11 & Under Cut, New Talent	.......................................................	$29.00</p>

                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="card">
                        <img src={Color} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Color</h5>
                            <p class="card-text">Balayage Color Service, New Talent	......................................................	$156.00+</p>
                            <p class="card-text">Balayage Color Service	......................................................	$208.00+</p>
                            <p class="card-text">Foilyage Custom Color, New Talent	......................................................	$197.00+</p>
                            <p class="card-text">Foilyage Custom Color	......................................................	$262.00+</p>
                            <p class="card-text">Bleach Retouch, 5 wk, New Talent	......................................................	$145.00+</p>
                            <p class="card-text">Bleach Retouch, 5 wk ......................................................	$194.00+</p>
                            <p class="card-text">Bleach Retouch, 6-10 wk, New Talent ......................................................		$166.00+</p>
                            <p class="card-text">Bleach Retouch, 6-10 wk	......................................................	$220.00+</p>
                            <p class="card-text">Bleach Retouch + Fashion Toner, N.T.   ......................................................		$191.00+</p>
                            <p class="card-text">Bleach Retouch + Fashion Toner	......................................................	$256.00+</p>
                            <p class="card-text">Bleach Service, Roots to Ends, N.T  .......................................................		$208.00+</p>
                            <p class="card-text">Bleach Service, Roots to Ends	......................................................	$277.00+</p>
                            <p class="card-text">Glaze Refresher + Cut, Stylist	......................................................	$137.00+</p>
                            <p class="card-text">Glaze Refresher + Cut, Lead Stylist ......................................................		$148.00+</p>
                            <p class="card-text">Mini Highlights, New Talent ......................................................		$99.00+</p>
                            <p class="card-text">Mini Highlights	......................................................	$123.00+</p>
                            <p class="card-text">Partial Head Highlights, New Talent	......................................................	$111.00+</p>
                            <p class="card-text">Partial Head Babylights ......................................................		$204.00+</p>
                            <p class="card-text">Full Head Highlights, New Talent	......................................................	$139.00+</p>
                            <p class="card-text">Full Head Babylights ...................................................... $262.00+ </p>


                        </div>
                    </div>
                </div>
                <div class="col-1">
                    <div class="card">
                        <img src={everything} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Everything Else</h5>

                            <p class="card-text">Hair Design Consultation ......................................................		Free</p>
                            <p class="card-text">Shampoo & Blow-Dry	......................................................	$56.00</p>
                            <p class="card-text">Deep Treatment & Blow-Dry	......................................................	$100.00+</p>
                            <p class="card-text">Scalp Treatment + Blow-Dry	......................................................	$110.00+</p>
                            <p class="card-text">Detangling	......................................................	$83.00+</p>
                            <p class="card-text">Keratin Smoothing Treatment ......................................................		$166.00+</p>
                            <p class="card-text">Up-Do Styling	......................................................	$142.00+</p>
                            <p class="card-text">Specialty Wig Design ......................................................		$123.00+</p>
                            <p class="card-text">Hair Extension Installation ......................................................		$1,213.00+</p>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="card">
                    <img src={AddOns} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Add-Ons</h5>
                            <p class="card-text">Silent Services  ...................................................... Free</p>
                            <p class="card-text">A Silent Service add-on is the same quality service, only without the chatter! Questions 
                            will be kept to a minimum and once the consultation is finished, all extraneous conversation will be turned off
                             so you can close your eyes, relax and enjoy some quiet “me” time.</p>
                            <p class="card-text">Elumen, GW Developer Free Color ......................................................		$17.00+</p>
                            <p class="card-text">Additional Bowl of Color Used ......................................................		$14.00+</p>
                            <p class="card-text">Extra Long or Thick Hair ......................................................		$25.00+</p>
                            <p class="card-text">Fashion Shade ......................................................		$62.00+</p>
                            <p class="card-text">Base Break	 ......................................................	$25.00+</p>
                            

                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomone"><Footer /></div>


        </div>

    )
}



