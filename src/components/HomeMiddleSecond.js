import React from 'react'
import images from '../images/img-d-investment-hover.png';
import brand from '../images/img-d-brands.png';
import cards from '../images/regiscorp.png';
import "./HomeMiddleSecond.css";


export default function HomeMiddleSecond() {
    return (
        <div class="middlsection">
            <div class="card text-bg-dark border border-0 rounded-0">

                <img src={images} class="card-img object-fit-cover" alt="loading.." />
                <div class="card-img-overlay">
                    <h5 class="card-title">SALON BRAND</h5>
                    <a class="nav-link " href="!#">ALL SALON BRAND</a>
                </div>

            </div>
            <div class="card-group">
                <div class="card text-bg-dark border border-0 rounded-0 one">
                    <img src={brand} class="card-img object-fit-cover" alt="loading.." />
                    <div class="card-img-overlay one">
                       <a class="nav-link one" href="!#">About Salon Registrtion</a>
                        <p class="card-text one">See the History of this Salon Leader.</p>
                    </div>

                </div>
                <div class="card text-bg-dark border border-0 rounded-0 two">
                    <img src={cards} class="card-img object-fit-cover" alt="loading.." />
                    <div class="card-img-overlay two">
                        <a class="nav-link two" href="!#">About Customer Registrtion</a>
                        <p class="card-text two">This card has supporting Registrtion prosses</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
