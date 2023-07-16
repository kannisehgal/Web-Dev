import React from 'react';
import vg from "../assets/2.webp";
import {HashLink} from "react-router-hash-link";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      
      <div className="home" id="home">
        <main>
            <h1>Web Developer</h1>
            <p>Solution to all your needs</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            we are here for the solution to the tech problems you face 
            every day. We are a tech company whose aim is to provide an 
            online platform where you enhance your income and market .
          </p>
        </div>

      </div>
      
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p><b><h3>Website Developer</h3></b> who develope websites using 
          different languages with great knowledge of visualization. </p>
        </div>
      </div>

      {/* <div className="home4" id="brands"> */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
            
              <AiFillGoogleCircle />
              <HashLink to={"https://www.google.com/"}><p>Google</p></HashLink>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
            
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
            
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
            
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

    </>
  );
};

export default Home;