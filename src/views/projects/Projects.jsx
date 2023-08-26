import React from "react";
import reflection from "../../images/netmatters-reflection2.png";
import axure from "../../images/axure-prototype2.png";
import imageAssigner from "../../images/image-assigner-task.PNG";
import bakery from "../../images/bakers-dozen.PNG";
import weather from "../../images/react-weather.PNG";
import vueFilms from "../../images/vue-films-poster.PNG";
// import contact from "../../images/contact.PNG";
import reactHolidays from "../../images/react-holidays.PNG";
// import wordpress from "../../images/wordpress.PNG";
// import woocommerce from "../../images/woocommerce3.PNG";
import pinpoint from "../../images/pinpoint.PNG";
import MoreInfoButton from "./MoreInfoButton";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Netmatters Reflection",
      image: reflection,
      link: "https://netmatters.angelov.uk/",
      github: "https://github.com/angelangelov88/reflection/tree/php-reflection",
      description: "My first project was to replicate the website of Netmatters. I started the project from scratch and had to add the HTML and CSS in order to make the website look identical to the actual one. I used my knowledge of HTML and CSS (including SASS) to implement the task. After this initial setup I had to update the website twice. I added JavaScript to make it interactive. In my JavaScript update I added functions such as hamburger menu, side navigation bar, hero image slider, sticky header and cookies. Once I completed my PHP studies I added PHP functionality to the website by adding a new contact page with a contact form and map API. The contact form is validated by client-side validation - HTML5, JavaScript and server-side validation - PHP. I also added a database connection for the submitted form. In the main page I created a database and connected it to the news cards. I pull the data from the database and show it to the user. I have added a SQL statement that allows random news to be pulled from the database and shown to the user."
    },
    {
      id: 2,
      title: "Bakery Website",
      image: bakery,
      link: "https://bakers-dozen.angelov.uk/",
      github: "https://github.com/donk3ylee/trifecta-perfecta",
      description: "That was a project we had to do in a team. Three of us worked together to create a website for a local bakery. We had to create the website from scratch with an image as a guide for the design. We divided the index page in 3 parts and I was in charge of the header and footer. After that I created the About Us and Products pages. I used the knowledge I've gained throughout the course including but not limited to HTML, CSS, JavaScript. I was also in charge for the responsiveness of the website on different screen sizes as well as browser compatibility. We worked in a team and used to have a catch-up meeting every day in order to make sure we are at the same page. I was debugging our code, when needed, to make it work on all screens and browsers."
    },
    {
      id: 3,
      title: "React Weather App",
      image: weather,
      link: "https://react-weather.angelov.uk/",
      github: "https://github.com/angelangelov88/react-weather-app",
      description: "This was my second React project. I created a weather app using openweathermap API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the weather constants and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the city, country, temperature, feels like temperature and the weather to the user's screen. I created the app for a mobile view only.",
    },
    {
      id: 4,
      title: "Vue Films App",
      image: vueFilms,
      link: "https://vue-films.angelov.uk/",
      github: "https://github.com/angelangelov88/Vue-Films-App",
      description: "This was my first Vue project. I created a films app using the Movie Database API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the movies and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the movies to the user's screen. I created the app for a mobile view only.",
    },
    // {
    //   id: 5,
    //   title: "Contact Form",
    //   image: contact,
    //   link: "https://contact-form.angelov.uk/",
    //   github: "https://github.com/angelangelov88/reflection/tree/php-reflection",
    //   description: "This was my first PHP project. I created a contact form using PHP. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the movies and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the movies to the user's screen. I created the app for a mobile view only.",
    // },
    {
      id: 6,
      title: "React Holidays App",
      image: reactHolidays,
      link: "https://react-holidays.angelov.uk/",
      github: "https://github.com/angelangelov88/react-holidays",
      description: "This was my third React project. I created a holidays app using the Holiday API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the holidays and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the holidays to the user's screen. I created the app for a mobile view only.",
    },
    {
      id: 7,
      title: "JavaScript Image Assigner",
      image: imageAssigner,
      link: "https://js-image-assigner.angelov.uk/",
      github: "https://github.com/angelangelov88/JavaScript-Reflection-Task2",
      description: "This was my second JavaScript project. I created an image assigner using JavaScript. I used an array of images and a function to assign a random image to the user. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user's screen. I created the app for a mobile view only.",
    },
    // {
    //   id: 8,
    //   title: "Wordpress Travel Website",
    //   image: wordpress,
    //   link: "https://wordpress.angelov.uk/",
    //   github: "https://github.com/angelangelov88/wordpress",
    //   description: "This was my first WordPress project. I created a travel website using WordPress. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user's screen. I created the app for a mobile view only.",
    // },
    // {
    //   id: 9,
    //   title: "WooCommerce Website",
    //   image: woocommerce,
    //   link: "https://woocommerce.angelov.uk/",
    //   github: "https://github.com/angelangelov88/Woocommerce",
    //   description: "This was my first WooCommerce project. I created a WooCommerce website using WordPress. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user's screen. I created the app for a mobile view only.",
    // },
    {
      id: 10,
      title: "Axure Prototype",
      image: axure,
      link: "https://axure-project.angelov.uk/",
      github: "https://github.com/angelangelov88/axure",
      description: "This was my first Axure project. I created a prototype using Axure. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user's screen. I created the app for a mobile view only.",
    },
    {
      id: 11,
      title: "Website Landing Page",
      image: pinpoint,
      link: "https://angelangelov88.github.io/pinpoint-task/",
      github: "https://github.com/angelangelov88/pinpoint-task",
      description: "This was my first Pinpoint project. I created a landing page using Pinpoint. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user's screen. I created the app for a mobile view only.",
    }
  ];

  return (
    <div id="portfolio-link" className="projects-container">
      {/* <!-- Container of the project cards --> */}
      {projects && projects.map((project) => (
        <div className="project-1 project" key={project.id}>
          <a href={project.link} target="_blank" rel="noreferrer">
            <div className="img-container">
              <img src={project.image} className="photo-reflection photo-project" alt="reflection" />
            </div>
            <p className="project-title project-title-1">{project.title}</p>
          </a>
          <a href={project.github} target="_blank" className="project-details" rel="noreferrer">
            View Project Files
            <i className="fas fa-arrow-circle-right" />
          </a>
          <MoreInfoButton project={project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
