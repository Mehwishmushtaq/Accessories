import React from 'react';
import './Blogs.css';
import bannerImage from "../../Images/dk-banner-static.jpeg"; // Importing banner image
import blogImage1 from "../../Images/Olixar-navy.jpg";
import blogImage2 from "../../Images/earbud1.jpg";
import blogImage3 from "../../Images/charger1.jpg";
import blogImage4 from "../../Images/powerbank.webp";
import blogImage5 from "../../Images/holder1.webp";
import blogImage6 from "../../Images/protector1.jpg";
import blogImage7 from "../../Images/sounds-wireless-onAir.jpg";
import blogImage8 from "../../Images/tags-smoke.jpg";



const Blogs = () => {
    const blogData = [

        {
            title: 'The Best Phone Cases for Ultimate Protection',
            author: 'Sarah Smith',
            date: 'October 5, 2023',
            content: 'Protect your phone with style! Learn about the best phone cases that provide both protection and fashion. From rugged armor to sleek leather, we cover it all.',
            image: blogImage1,
        },
        {
            title: 'Wireless Earbuds for an Immersive Audio Experience',
            author: 'David Johnson',
            date: 'September 22, 2023',
            content: 'Cut the cords and dive into a world of wireless audio. Discover the top 5 wireless earbuds that offer exceptional sound quality and comfort for music lovers.',
            image: blogImage2,

        },
        {
            title: 'Charging Solutions Fast Chargers',
            author: 'Jennifer Lee',
            date: 'August 15, 2023',
            content: 'Struggling with slow charging times? We compare fast chargers and wireless charging pads to help you decide which one is right for your needs and devices.',
            image: blogImage3,

        },
        {
            title: 'Essential Phone Accessories for Travel Enthusiasts',
            author: 'Michael Brown',
            date: 'July 10, 2023',
            content: 'Essential phone accessories from power banks to travel adapters, these gadgets will make your journeys easier and more enjoyable.',
            image: blogImage4,

        },
        {
            title: 'Choosing the Perfect Phone Stand',
            author: 'Laura Taylor',
            date: 'June 5, 2023',
            content: 'Looking for the ideal phone stand? We break down the options, from adjustable stands for video calls to ergonomic choices for desk work. Find the perfect fit!',
            image: blogImage5,

        },
        {
            title: 'Protect Your Phone with best Screen Protectors',
            author: 'Daniel White',
            date: 'May 20, 2023',
            content: 'Ensure the safety of your phone display with high-quality screen protectors. Discover the different types and benefits of screen protectors, and learn how they can enhance the durability and longevity of your mobile device.',
            image: blogImage6,
        },
        {
            title: 'Immerse in Sound Best Bluetooth Headphones in 2023',
            author: 'Sarah Smith',
            date: 'January 15, 2023',
            content: 'Dive into the world of wireless audio with our top picks for the best Bluetooth headphones. Discover superior sound quality, noise cancellation, and comfortable designs that elevate your music experience.',
            image: blogImage7, 
          },
          {
            title: 'Never Lose Anything Effective use of Apple AirTags',
            author: 'David Johnson',
            date: 'February 8, 2023',
            content: 'Explore the innovative Apple AirTags, your ultimate companion for keeping track of your belongings. Learn how these small devices work, how to set them up, and discover creative ways to use them in your daily life.',
            image: blogImage8, 
          }
          
          

    ];


    return (

        <div className="blogs">
            <div className="about-banner">
                <img src={bannerImage} alt="banner" className="about-banner-image" />
            </div>
            <h3 className='animate-heading'>Unlocking the Power of Mobile Phone Accessories Blog</h3>
            <div className="blog-grid">
                {blogData.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <div className="blog-image-container">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                        </div>
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-meta">
                            By {blog.author} on {blog.date}
                        </p>
                        <p className="blog-content">{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
