import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.png'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand} alt=""/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt=""/>
            </div>
        </div>
        <div className="hero-right">
           <img src={hero} alt=""/>
        </div>
    </div>
  )
}

export default Hero