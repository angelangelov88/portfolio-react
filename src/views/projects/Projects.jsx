import reflection from '../../images/netmatters-reflection2.png'
import axure from '../../images/axure-prototype2.png'
import imageAssigner from '../../images/image-assigner-task.PNG'
import bakery from '../../images/bakers-dozen.PNG'
import weather from '../../images/react-weather.PNG'
import vueFilms from '../../images/vue-films-poster.PNG'
import contact from '../../images/contact.PNG'
import reactHolidays from '../../images/react-holidays.PNG'
import wordpress from '../../images/wordpress.PNG'
import woocommerce from '../../images/woocommerce3.PNG'
import pinpoint from '../../images/pinpoint.PNG'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Netmatters Reflection',
      image: reflection,
      link: 'https://netmatters.angelov.uk/',
      github: 'https://github.com/angelangelov88/reflection/tree/php-reflection',
      description: 'My first project was to replicate the website of Netmatters. I started the project from scratch and had to add the HTML and CSS in order to make the website look identical to the actual one. I used my knowledge of HTML and CSS (including SASS) to implement the task. After this initial setup I had to update the website twice. I added JavaScript to make it interactive. In my JavaScript update I added functions such as hamburger menu, side navigation bar, hero image slider, sticky header and cookies. Once I completed my PHP studies I added PHP functionality to the website by adding a new contact page with a contact form and map API. The contact form is validated by client-side validation - HTML5, JavaScript and server-side validation - PHP. I also added a database connection for the submitted form. In the main page I created a database and connected it to the news cards. I pull the data from the database and show it to the user. I have added a SQL statement that allows random news to be pulled from the database and shown to the user.'
    },
    {
      id: 2,
      title: 'Bakery Website',
      image: bakery,
      link: 'https://bakers-dozen.angelov.uk/',
      github: 'https://github.com/donk3ylee/trifecta-perfecta',
      description: 'That was a project we had to do in a team. Three of us worked together to create a website for a local bakery. We had to create the website from scratch with an image as a guide for the design. We divided the index page in 3 parts and I was in charge of the header and footer. After that I created the About Us and Products pages. I used the knowledge I\'ve gained throughout the course including but not limited to HTML, CSS, JavaScript. I was also in charge for the responsiveness of the website on different screen sizes as well as browser compatibility. We worked in a team and used to have a catch-up meeting every day in order to make sure we are at the same page. I was debugging our code, when needed, to make it work on all screens and browsers.'
    },
    {
      id: 3,
      title: 'React Weather App',
      image: weather,
      link: 'https://react-weather.angelov.uk/',
      github: 'https://github.com/angelangelov88/react-weather-app',
      description: 'This was my second React project. I created a weather app using openweathermap API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the weather constants and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the city, country, temperature, feels like temperature and the weather to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 4,
      title: 'Vue Films App',
      image: vueFilms,
      link: 'https://vue-films.angelov.uk/',
      github: 'http://vue-films.angel-angelov.netmatters-scs.co.uk/',
      description: 'This was my first Vue project. I created a films app using the Movie Database API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the movies and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the movies to the user\'s screen. I created the app for a mobile view only.',
    }, 
    {
      id: 5,
      title: 'Contact Form',
      image: contact,
      link: 'https://contact-form.angelov.uk/',
      github: 'https://github.com/angelangelov88/reflection/tree/php-reflection',
      description: 'This was my first PHP project. I created a contact form using PHP. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the movies and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the movies to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 6,
      title: 'React Holidays App',
      image: reactHolidays,
      link: 'https://react-holidays.angelov.uk/',
      github: 'https://github.com/angelangelov88/react-holidays',
      description: 'This was my third React project. I created a holidays app using the Holiday API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the holidays and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the holidays to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 7,
      title: 'JavaScript Image Assigner',
      image: imageAssigner,
      link: 'https://js-image-assigner.angelov.uk/',
      github: 'https://github.com/angelangelov88/JavaScript-Reflection-Task2',
      description: 'This was my second JavaScript project. I created an image assigner using JavaScript. I used an array of images and a function to assign a random image to the user. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 8,
      title: 'Wordpress Travel Website',
      image: wordpress,
      link: 'https://wordpress.angelov.uk/',
      github: 'https://github.com/angelangelov88/wordpress',
      description: 'This was my first WordPress project. I created a travel website using WordPress. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 9,
      title: 'WooCommerce Website',
      image: woocommerce,
      link: 'https://woocommerce.angelov.uk/',
      github: 'https://github.com/angelangelov88/Woocommerce',
      description: 'This was my first WooCommerce project. I created a WooCommerce website using WordPress. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 10,
      title: 'Axure Prototype',
      image: axure,
      link: 'https://axure.angelov.uk/',
      github: 'https://github.com/angelangelov88/axure',
      description: 'This was my first Axure project. I created a prototype using Axure. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user\'s screen. I created the app for a mobile view only.',
    },
    {
      id: 11,
      title: 'Website Landing Page',
      image: pinpoint,
      link: 'https://pinpoint.angelov.uk/',
      github: 'https://github.com/angelangelov88/pinpoint-task',
      description: 'This was my first Pinpoint project. I created a landing page using Pinpoint. I used a theme and added the content to the website. I also added a function to determine the date and render it to the screen. Last but not least I rendered the image to the user\'s screen. I created the app for a mobile view only.',
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
        <a href={project.github} target="_blank" className="project-details" rel="noreferrer" >View Project Files
          <i className="fas fa-arrow-circle-right"></i>
        </a>
        
        <button className="btn-project more-info-btn-1">More Info...</button>
        <div className="text-holder">{project.description}</div>   
      </div>
    ))}
        {/* <!-- Project 1 - Netmatters reflection --> */}
                {/* <div className="project-1 project">
                  <a href="https://netmatters.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={reflection} className="photo-reflection photo-project" alt="reflection" />
                    </div>
                    <p className="project-title project-title-1">Netmatters Reflection</p> 
                  </a>         
                  <a href="https://github.com/angelangelov88/reflection/tree/php-reflection" target="_blank" className="project-details" rel="noreferrer" >View Project Files
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  
                  <button className="btn-project more-info-btn-1">More Info...</button>
                  <div className="text-holder">My first project was to replicate the website of Netmatters. I started the project from scratch and had to add the HTML and CSS in order to make the website look identical to the actual one. I used my knowledge of HTML and CSS (including SASS) to implement the task. After this initial setup I had to update the website twice. I added JavaScript to make it interactive. In my JavaScript update I added functions such as hamburger menu, side navigation bar, hero image slider, sticky header and cookies. Once I completed my PHP studies I added PHP functionality to the website by adding a new contact page with a contact form and map API. The contact form is validated by client-side validation - HTML5, JavaScript and server-side validation - PHP. I also added a database connection for the submitted form. In the main page I created a database and connected it to the news cards. I pull the data from the database and show it to the user. I have added a SQL statement that allows random news to be pulled from the database and shown to the user.
                  </div>   
                </div> */}
        
        {/* <!-- Project 2 Bakery website--> */}
                {/* <div className="project-2 project">
                  <a href="https://bakers-dozen.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={bakery} className="photo-axure photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">Bakery Website</p>  
                  </a>      
                  <a href="https://github.com/donk3ylee/trifecta-perfecta" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">
                  That was a project we had to do in a team. Three of us worked together to create a website for a local bakery. We had to create the website from scratch with an image as a guide for the design. We divided the index page in 3 parts and I was in charge of the header and footer. After that I created the About Us and Products pages. I used the knowledge I've gained throughout the course including but not limited to HTML, CSS, JavaScript. I was also in charge for the responsiveness of the website on different screen sizes as well as browser compatibility. We worked in a team and used to have a catch-up meeting every day in order to make sure we are at the same page. I was debugging our code, when needed, to make it work on all screens and browsers.  
                  </div>
                </div> */}
        
        {/* <!-- Project 3 React Weather app --> */}
        {/* <div className="project-2 project">
                  <a href="https://react-weather.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={weather} className="photo-axure photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">React Weather App</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/react-weather-app" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">This was my second React project. I created a weather app using openweathermap API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the weather constants and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the city, country, temperature, feels like temperature and the weather to the user's screen. I created the app for a mobile view only.
                </div>
                </div> */}
        
        {/* <!-- Project 4 Vue Films App --> */}
                {/* <div className="project-4 project">          
                  <a href="https://vue-films.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={vueFilms} className="photo-reflection-js photo-project" alt="change-name" /></div>
                    <p className="project-title project-title-3">Vue Films App</p> 
                  </a>       
                  <a href="https://github.com/angelangelov88/Vue-Films-App" target="_blank" className="project-details" rel="noreferrer">View Project Files
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-4">More Info...</button>
                  <div className="text-holder">This is my Vue project. I had to create a SPA using an API. I decided to create a films app where the user can check information about films, series, etc. I used omdbapi which returns data based on IMDb ID. I created 3 components - Home, SearchQuery and MovieDetail. On the first one I added the search engine where the user types their query. I have added error message to warn the user when the input does not return any data. After that I route the user to the SearchQuery page where the results are shown. Here user can select a film and will be routed to the MovieDetail page with all the available information about the movie. I added the Back button based on feedback from fellow developers and made the styling a bit better too.
                  </div>
                </div> */}
        
        {/* <!-- Project 5 - Contact Form --> */}
                {/* <div className="project-5 project">          
                  <a href="http://netmatters.angelov.uk/"  target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={contact} className="photo-image-assigner photo-project" alt="assigner" /></div>
                    <p className="project-title project-title-3">Contact Form</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/reflection/tree/php-reflection" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-5">More Info...</button>
                  <div className="text-holder">This is the contact form from the Netmatters reflection and therefore it is a part of that project too. I have added it as a separate project as it was quite different than the rest of the project. I used HTML to create a form, JavaScript to validate on client side and PHP to validate on server side. I created a connection.php file and pushed the data from the user input to the database I've created for this task. I have also added a map API on the page to show the user where Netmatters' offices are located.
                  </div>
                </div> */}

        {/* <!-- Project 6 - React Holidays app --> */}
                {/* <div className="project-5 project">          
                  <a href="http://react-holidays.angelov.uk/"  target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={reactHolidays} className="photo-image-assigner photo-project" alt="assigner" /></div>
                    <p className="project-title project-title-3">React Holidays App</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/react-holidays" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-5">More Info...</button>
                  <div className="text-holder">I had to create a SPA in React using an API. I decided to make a holiday calendar where you can choose a country from the populated list or go to All where a search function with all countries globally is available. I used Holiday API. I took advantege of React componenets and Routes. Everything is populated on the front-end. I created different pages for some major countries where the data is fetched from the API when the user clicks on the country name. Alternatively, user can go to All where a list with all countries is available. I used Fuse.js library to create the search function and it allows the user to narrow it down to only a few countries or a complete match. Then the user can click on the Show List button and React will call the API and request the holidays for this particular country. I used Axios for some of the requests and useFetch for others in order to make sure I have experience with both. 
                  </div>
                </div> */}

        {/* <!-- Project 7 - Image Assigner --> */}
                {/* <div className="project-5 project">          
                  <a href="http://js-image-assigner.angelov.uk/"  target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={imageAssigner} className="photo-image-assigner photo-project" alt="assigner" /></div>
                    <p className="project-title project-title-3">JavaScript Image Assigner</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/JavaScript-Reflection-Task2" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-5">More Info...</button>
                  <div className="text-holder">That is my second JavaScript project. We had to create a page with randomly generated image shown. There should be option to refresh and show another one, add an email which is validated and assign an image to this email. Also there should be an option to add image to another email and show them all at the bottom of the page.
                  </div>
                </div> */}
        
        {/* Project 8 - WordPress Travel Website*/}
                {/* <div className="project-2 project">
                  <a href="https://wordpress.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={wordpress} className="photo-axure photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">WordPress Travel Website</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/wordpress" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">
                  This is my WordPress website. I had to create a website with 4 required pages - Homepage, Contact page, News and Gallery with lightbox. I decided to add some extra ones - About Us, Destinations and Reviews. I used some WordPress plugins to make my life easier. I used Contact Form 7 plugin to create a contact form, Elementor for all my editing and style settings, Imagify to make my website lighter, Ocean Extra as a theme, Yoast SEO to improve its visibility online and Duplicator to upload it to cPanel. I have used many different ways to make it appeal to customers. I added videos in my headers on each page as well as hero video of a beautiful beach for the homepage. I have added image carousels to encourage users look in different photos which can be slided. The website is responsive for different screen sizes and I have removed the hero video for smaller screens and changed it with a photo. 
                  </div>
                </div> */}
        {/* Project 9 - WooCommerce Website */}
                {/* <div className="project-2 project">
                  <a href="https://woocommerce.angelov.uk/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={woocommerce} className="photo-axure photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">WooCommerce Website</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/Woocommerce" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">
                  This is my WordPress E-commerce website. I used WordPress and WooCommerce plugin to create a website with a home page, about us page, contact page, products page and option for selecting products and adding them to a basket. I used some plugins in my project such as Contact Form 7 plugin to create a contact form, Elementor for all my editing and style settings, Blocksy Companion, WooCommerce and Duplicator to upload it to cPanel. I used the included Blocksy theme to make it easier to implement the e-commerce features. I have added different products in 3 categories and some products have more than one option to choose from like sizes, types, etc. I have added different prices depending on the sizes and inventory. Users can customise their output depending on their needs. I have also added an offer with a huge discount for one of the items.  
                  </div>
                </div> */}
        {/* Project 10 - Axure prototype */}
                {/* <div className="project-2 project">
                  <a href="https://axure-project.angel-angelov.netmatters-scs.co.uk" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={pinpoint} className="photo-pinpoint photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">Axure Prototype</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/axure" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">
                  My second project was to create an online shopping website prototype with the functionality to order products from a product page. The requirements were to create a prototype with a basket page, sign-in and sign-up pages as well as option to add or remove items from the basket. The task is to be done with Axure. 
                  </div>
                </div> */}

        {/* Project 10 - Website Landing Page */}
                {/* <div className="project-2 project">
                  <a href="https://angelangelov88.github.io/pinpoint-task/" target="_blank" rel="noreferrer">
                    <div className="img-container">
                      <img src={axure} className="photo-axure photo-project" alt="axure" />
                    </div>
                    <p className="project-title project-title-2">Website Landing Page</p>  
                  </a>      
                  <a href="https://github.com/angelangelov88/pinpoint-task" target="_blank" className="project-details" rel="noreferrer">View Project Files 
                    <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-2">More Info...</button>
                  <div className="text-holder">
                  This is a landing page for an HR website I was asked to do as a task for a job interview. I had an image with the design and had to replicate it using only HTML, CSS and JavaScript. I used mainly HTML and SASS to create the website. I started by adding the markup and then styled it as required. Using CSS I added a sticky header which changes its colour when the user scrolls down. I have used mobile first approach and made sure the page is responsive for any screen size as well as browser compatible. I added an extra hamburger menu for mobile screen sizes. 
                  </div>
                </div> */}
          
                {/* <div className="project">
                  <a href="' . $projects['link'] . '" target="_blank">
                  <div className="img-container">
                  <img src="' . $projects['image_link'] .'" className="photo-project" alt="project-photo" />
                  </div>
                  <p className="project-title">'. $projects['title'] .'</p>
                  </a>
                  <a href="' . $projects['project_files_link'] .'" target="_blank" className="project-details">View Project Files 
                  <i className="fas fa-arrow-circle-right"></i>
                  </a>
                  <button className="btn-project more-info-btn-1">More Info...</button>
                  <div className="text-holder">' . $projects['text'] .'</div>
                </div> */}
              </div>
    
   );
}
 
export default Projects;