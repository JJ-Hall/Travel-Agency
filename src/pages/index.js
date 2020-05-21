import React from "react"
import '../styles/global.css'
import Background from '../images/ryan-spencer-background.jpg'
import DownArrow from '../images/downArrow.svg'

const IndexPage = () => {
    return (
      <html lang='en'>
        <div className="body">
            <img src= {Background} />
            <div className="topDiv">
                <h1>FIVE STAR</h1>
                <h2>Travel and Cruises</h2>
                <button>Book a Trip Today!</button>
                <div className="arrowDiv">
                <a href="#bottom"><img src={DownArrow} /></a>
                </div>
            </div>
            <div className="bottomDiv" id='bottom'>
                <h3>ABOUT US</h3>
                <h3>PACKAGES</h3>
                <h3>DEALS</h3>
                <h3>DESTINATIONS</h3>
                <h3>TRAVEL BLOG</h3>
                <h3>CONTACT US</h3>
            </div>
        </div>
      </html>
    )
  }
  
  export default IndexPage