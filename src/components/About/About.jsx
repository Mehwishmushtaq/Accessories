import React from "react";
import "./About.css"; // Import your CSS file for styling
import bannerImage from "../../Images/about-banner.jpg"; // Import your banner image (replace with your image file)
import { FaFacebook, FaInstagram, FaStar } from "react-icons/fa"; // Import the icons
const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-banner">
                <img src={bannerImage} alt="About Image banner" className="about-banner-image" />
                <div className="about-banner-text">
                    <h2>About Us</h2>
                </div>
            </div>
            <h1 className="h1">About Mobile Accessories</h1>

            <div className="about-content">
                <p>
                    Welcome to our mobile accessories store, where you'll find a wide range of items to
                    enhance your mobile experience. We have strong covers, stylish chargers, and high-quality
                    headphones. Our primary purpose is to supply high-quality accessories for your mobile
                    devices. Explore our inventory to find the perfect items to compliment your mobile
                    lifestyle. We stay committed to quality and client satisfaction.
                    In our ever-expanding assortment, you'll find the most recent and creative mobile
                    accessories to meet all of your requirements. We offer items that keep up with the
                    fast changing world of technology, from cutting-edge wireless charging solutions to
                    fashionable and protective phone cases.
                    Our team of experts is always curating the greatest accessories.

                </p>

            </div>

            <h1 className="h1">Our Team</h1>
            <div className="card-container">
                <div className="card">
                    <img src="https://plus.unsplash.com/premium_photo-1661583945144-aa7583cb0542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt='' />
                    <h3>Hileri Keol</h3>
                    <div className="ratings">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p>CEo & Founder At Company</p>
                </div>
                <div className="card">
                    <img src="https://plus.unsplash.com/premium_photo-1677368598706-4fa4f345d579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcGxveWVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                    <h3>Hileri Keol</h3>
                    <div className="ratings">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p>CEo & Founder At Company</p>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVtcGxveWVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Hileri Keol</h3>
                    <div className="ratings">
                        <FaStar/>
                        <FaStar />
                        <FaStar/>
                        <FaStar />
                        <FaStar />
                    </div>
                    <p>CEo & Founder At Company</p>
                </div>

            </div>
               {/* Email Us Placeholder */}
               <div className="email-us">
                    <h2>Email Us</h2>
                    <input type="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="#" target="_blank"><FaFacebook size={30} /></a>
                    <a href="#" target="_blank"><FaInstagram size={30} /></a>
                </div>
        </div>
    );

};

export default AboutPage;
