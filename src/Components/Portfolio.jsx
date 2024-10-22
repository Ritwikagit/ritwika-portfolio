/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/photo-1471107191679-f26174d2d41e.avif";

const imageAltText = " books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Stock Market Analysis",
    description:
      "Developed a stock market analysis web application using HTML, CSS, JavaScript, and APIs to display real-time stock data over various time ranges.",
    url: "https://github.com/Ritwikagit/Stock-Market-Analysis.git",
  },
  {
    title: "Quiz Game",
    description:
      "Created an interactive quiz game app with HTML, CSS, and JavaScript, featuring multiple-choice questions, a timer, and real-time score tracking.",
    url: "https://github.com/Ritwikagit/Quiz-App.git",
  },
  {
    title: "Movie Recommendation",
    description:
      "Developed a movie recommendation website using HTML, CSS, and JavaScript, providing personalized movie suggestions through a user-friendly interface and interactive features.",
    url: "https://github.com/Ritwikagit/Movie-Recommendation.git",
  },
  {
    title: "Pokemon game",
    description:
      "Developed a Pokemon game using HTML, CSS, and JavaScript, where players engage in battles, with the more powerful character emerging victorious.",
    url: "https://github.com/Ritwikagit/Pokemon-game.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
