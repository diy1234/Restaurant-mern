import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our Food Reservation Website simplifies the dining experience by allowing customers to book tables effortlessly. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the platform offers a seamless reservation system where users can provide their name, date, time, email, and phone number to secure a table. With real-time booking and immediate confirmation, the website ensures a smooth and hassle-free experience. It features a responsive design optimized for both desktop and mobile use, enhancing accessibility. Powered by a backend with MongoDB and Express.js, the system ensures reliable data storage and quick access. Additionally, the website is deployed via Docker on AWS, ensuring high availability, scalability, and robust performance. This project aims to reduce wait times, improve customer satisfaction, and enable restaurants to manage their bookings more efficiently.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
