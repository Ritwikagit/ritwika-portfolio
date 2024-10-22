/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/photo-1671716784499-a3d26826d844.avif";

const imageAltText = "abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at Haldia Institute Of Technology.Passionate about solving complex problems through efficient coding practices and continuously learning new technologies to enhance development skills.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML,CSS,BOOTSTRAP,JS",
  "DSA using Java",
  "Problem solving",
  "Spring Boot",
  "DBMS",
  "OOPS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Proficient in HTML, CSS, Bootstrap, and JavaScript for building responsive web applications, and skilled in DSA using Java to solve algorithmic challenges. Strong in Spring Boot for backend development, DBMS for database management, and OOPs for designing modular, maintainable code.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
