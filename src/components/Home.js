import React from 'react';
import images from "../images/Background-video.mp4";
import HomeMiddle from './HomeMiddle';
import "./Home.css";
import HomeMiddleSecond from './HomeMiddleSecond';
import Footer from './Footer';


export default function Home() {
    return (

        <div className="components">
            <div className="card-body">
                <video autoPlay loop id='video' className='videoTag' height="1001Px">
                    <source src={images} type='video/mp4' />
                </video>
                <div className="card-img-overlay">
                    <p className="card-text">WE DON'T JUST LOVE HAIR</p>
                    <p className="card-text">WE LOVE PEOPLE</p>
                    
                </div>
            </div>
            <div className="fixed-middle"><HomeMiddle/></div>
            <div className="fixed-middle-second"><HomeMiddleSecond/></div>
            <div className="bottomone"><Footer/></div>

            
            </div>
       
    )
}
