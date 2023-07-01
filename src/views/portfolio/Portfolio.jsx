import '../../style/style.scss';

function Portfolio() {
//Side navbar
//I added variables for all the elements in order to make the code readable
const navbar = document.getElementsByClassName("navbar")[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const body = document.body;
const gradient = document.getElementsByClassName('gradient-div-brand')[0];
const fontColor = document.getElementById('app');
const scrollDisappear = document.getElementsByClassName('scroll')[0];
const blocker = document.getElementsByClassName('blocker')[0];


//This is the function that is triggered on click on burger menu button. It basically shows the sidebar, changes the colour of the background, the color of the hero text, stops the scrolling option for the page and shows the blocker div on top. This last thing allows the user to close the sidebar by clicking anywhere but on it.
function openNav() {
    navbar.style.display = 'block';
    // gradient.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    fontColor.style.color = '#ffffff9e';
    scrollDisappear.style.position = 'initial';
    blocker.style.zIndex = 100;
    blocker.style.display = 'block';
    body.style.overflow = 'hidden';
}

//The second function was needed because console gives errors as some of the properties in the first one are not available on other pages. This way on click it opens the sidenav for all pages but index.html
function openNav2() {
  navbar.style.display = 'block';
  blocker.style.zIndex = 100;
  // blocker.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  blocker.style.display = 'block';
  body.style.overflow = 'hidden';
}


//This is the function that closes the sidebar on clicking anywhere on the page but the sidebar
function closeNav() {
    navbar.style.display = 'none';
    navbar.style.backgroundColor = 'none';
    // gradient.style.backgroundColor = 'initial';
    fontColor.style.color = 'white';
    scrollDisappear.style.position = 'block';
    blocker.style.zIndex = 0;
    blocker.style.display = 'none';
    body.style.overflow = 'auto';
    hamburger.style.left = '0px';
  }

//Again second function for all the pages but index.html
  function closeNav2() {
    navbar.style.display = 'none';
    navbar.style.backgroundColor = 'none';
    // gradient.style.backgroundColor = 'initial';
    // fontColor.style.color = 'white';
    // scrollDisappear.style.position = 'block';
    blocker.style.zIndex = 0;
    // blocker.style.backgroundColor = 'initial';
    blocker.style.display = 'none';
    body.style.overflow = 'auto';
    hamburger.style.left = '0px';
  }


//Second function for all the pages but index.html. It does absolutely the same as the next one but ignores some of the elements that do not exist on those pages
// function showNavbar2(y) {
//   if (y.matches) { // If media query matches
//     navbar.style.display = 'block';
//     blocker.style.display = 'none';
//     body.style.overflow = 'auto';
//     hamburger.style.left = '0px';
//     blocker.style.backgroundColor = 'initial';
//   }  else {
//     navbar.style.display = 'none';
//   }
// }

// var y = window.matchMedia("(min-width: 768px)")
// showNavbar2(y) // Call listener function at run time
// y.addListener(showNavbar2) // Attach listener function on state changes


  //This has been added in order to make sure that the sidebar for small screens disappears if the user changes their viewport. Now they can change between small and big screen and there should be no issues. 
  // function showNavbar(x) {
  //   if (x.matches) { // If media query matches
  //     navbar.style.display = 'block';
  //     blocker.style.zIndex = 0;
  //     gradient.style.backgroundColor = 'initial';
  //     fontColor.style.color = 'white';
  //     scrollDisappear.style.position = 'block';
  //     blocker.style.zIndex = 0;
  //     body.style.overflow = 'auto';
  //     hamburger.style.left = '0px';
  //   }  else {
  //     navbar.style.display = 'none';
  //   }
  // }
  
  // var x = window.matchMedia("(min-width: 768px)")
  // showNavbar(x) // Call listener function at run time
  // x.addListener(showNavbar) // Attach listener function on state changes
  
  
// jQuery plugin for typing effect for the brand text
var app = document.getElementById('app');
const typewriter = 'fggf';
// var typewriter = new Typewriter(app, {
//   loop: false,
//   cursor: "",
//   delay: 50
// });

// typewriter.typeString('<h1>My Name is Angel Angelov</h1>').pauseFor(50).typeString('<h2 class="strapline">I\'m a Web Developer').start(); 



//Code for the More info button in projects
// (function showText(){
//   var buttons = document.getElementById('portfolio-link').getElementsByTagName('button');
//     for (i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click', function (e)  {
//         e.target.nextElementSibling.classList.toggle('shown');
//         if (e.target.innerHTML === 'Close') {
//           e.target.innerHTML = 'More Info...';
//         }
//         else {
//           e.target.innerHTML = 'Close';
//         }
//       });
//   };
// })();


//Email validation
const email = document.getElementById('email');
let validation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const error = document.getElementById('error-message');

function emailValidationFunction() {
  if (email.value.match(validation)) {
    console.log('Email correct');
    error.style.display = 'none';
    return true;
  } else {
    console.log('error with email');
    error.style.display = 'block';
    return false;
  }
}

// document.getElementById("submit").addEventListener("click", emailValidationFunction);

  return (
    <>
    {/* // <!-- Font Awesome -->
        // <script src="https://kit.fontawesome.com/ebb02e5adb.js" crossorigin="anonymous"></script>
        
    // <!-- CSS -->
        // <link rel="stylesheet" href="style/style.css">
        
    // <!-- Poppins font -->
        // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    
    // <!-- Favicon -->
        // <link rel="shortcut icon" type="image/jpg" href="images/favicon.png"/> */}
    <header>
    {/* // <!-- SIDE NAVBAR for screens over M--> */}
          <nav class="navbar">
            <div class="logo">
              <a href="index.html">A</a>
            </div>
            <div class="navbar-items">
              <div class="about-me">
                <a href="about-me.html">About Me</a>
              </div>
              <div class="my-portfolio">
                <a href="#portfolio-link">My Portfolio</a>
              </div>
              <div class="coding-examples">
                <a href="coding-examples.html">Coding Examples</a>
              </div>
              <div class="scs">
                <a href="scs-scheme.html">SCS Scheme</a>
              </div>
            </div>
            <div class="contact-me">
              <a href="#contact">Contact Me</a>
            </div>
            <div class="social-media">
              <div class="social-links">
                  <div class="gap"></div>
                <a class="github" href="https://github.com/angelangelov88" target="_blank" rel="noreferrer">
                  <i class="fab fa-github social-logo"></i>
                </a>
                  <div class="gap"></div>
                <a class="linkedin" href="https://www.linkedin.com/in/ang-angelov/" target="_blank" rel="noreferrer">
                  <i class="fab fa-linkedin-in social-logo"></i>
                </a>
                  <div class="gap"></div>
                  <a class="facebook" href="https://www.facebook.com/ang.angelov88" target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook-f social-logo"></i>
                  </a>
                    <div class="gap"></div>
                  <a class="twitter" href="https://twitter.com/Angel69010637" target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter social-logo"></i>
                  </a>
              </div>
            </div>
          </nav>

    {/* Small hamburger style navbar for small screens */}
    <div class="blocker" onclick="closeNav()"></div>
    
          <div class="hamburger" onclick="openNav()">
              <div id="menu-lines">
                <div class="menu-line"></div>
                <div class="menu-line"></div>
                <div class="menu-line"></div>	
              </div>
              <p class="hamburger-title">MENU</p>							
          </div>
        </header>
      
     {/* Beginning of the main content. I have added content div to wrap everything up */}
        <div class="content">
    
    {/* <!-- Hero image and text part --> */}
          <div class="hero-image">
            <div class="gradient-div-brand"></div>
    
            <div class="hero-text">
              <h1>My Name is Angel Angelov</h1>
              <h2>I'm a Software Developer</h2>
              <div id="app"></div>
    
            </div>
    {/* <!-- Scroll down text and arrow --> */}
            <div class="scroll">
              <a href="#portfolio-link" class="scroll-down-arrow">
              Scroll Down
                <br />
              <i class="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
    
    {/* <!-- Container of the project cards --> */}
          <div id="portfolio-link" class="projects-container">
    
    {/* <!-- Project 1 --> */}
            <div class="project-1 project">
              <a href="https://angelangelov88.github.io/" target="_blank" rel="noreferrer">
                <div class="img-container">
                  <img src="images/netmatters-reflection2.png" class="photo-reflection photo-project" alt="reflection" />
                </div>
                <p class="project-title project-title-1">Netmatters Reflection</p>   
              </a>         
              <a href="https://github.com/angelangelov88/angelangelov88.github.io" target="_blank" class="project-details" rel="noreferrer" >View Project Files
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              
              <button class="btn-project more-info-btn-1">More Info...</button>
              <div class="text-holder">My first project was to replicate the website of Netmatters. I started the project from scratch and had to add the HTML and CSS coding in order to make the website look identical to the actual one. I used my knowledge of HTML and CSS (including SASS) to implement the task. 
              </div>   
            </div>
    
    {/* <!-- Project 2 --> */}
            <div class="project-2 project">
              <a href="https://axure-project.angel-angelov.netmatters-scs.co.uk" target="_blank" rel="noreferrer">
                <div class="img-container">
                  <img src="images/axure-prototype2.png" class="photo-axure photo-project" alt="axure" />
                </div>
                <p class="project-title project-title-2">Axure Prototype</p>  
              </a>      
              <a href="https://github.com/angelangelov88/axure" target="_blank" class="project-details" rel="noreferrer">View Project Files 
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              <button class="btn-project more-info-btn-2">More Info...</button>
              <div class="text-holder">
              My second project was to create an online shopping website prototype with the functionality to order products from a product page. The requirements were to create a prototype with a basket page, sign-in and sign-up pages as well as option to add or remove items from the basket. The task is to be done with Axure. 
              </div>
            </div>
    
    {/* <!-- Project 3 --> */}
            <div class="project-3 project">
                <div class="img-container">
                  <img src="images/portfolio.PNG" class="photo-portfolio photo-project" alt="portfolio" /></div>
                <p class="project-title project-title-3">Portfolio</p> 
                    
              <a href="https://github.com/angelangelov88/portfolio" target="_blank" class="project-details" rel="noreferrer">View Project Files
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              <button class="btn-project more-info-btn-3">More Info...</button>
              <div class="text-holder">My third project was to create my Portfolio. The requrirement was to add a few pages to my website with information about myself, the program and my projects. I added a contact form which I later made interactive and a navbar for different screens. The navbar for big screens was implemented in the beginning with HTML and CSS only and the small screen navbar was added after I learnt JavaScript. I had to use my HTML, CSS and JavaScript skills to implement the task. I used my first JavaScript functions and jQuery in this project to make it interactive. I added jQuery plugin in the brand text to make it looks like it's been typed. I have also added code snippets to some of the code I've used in my projects.
              </div>
            </div>
    
    {/* <!-- Project 4 --> */}
            <div class="project-4 project">          
              <a href="https://reflection.angel-angelov.netmatters-scs.co.uk/" target="_blank" rel="noreferrer">
                <div class="img-container">
                  <img src="images/js-reflection.PNG" class="photo-reflection-js photo-project" alt="change-name" /></div>
                <p class="project-title project-title-3">JavaScript Reflection</p> 
              </a>       
              <a href="https://github.com/angelangelov88/Reflection-JavaScript" target="_blank" class="project-details" rel="noreferrer">View Project Files
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              <button class="btn-project more-info-btn-4">More Info...</button>
              <div class="text-holder">My task was to add JavaScript to the Netmatters website I've created earlier. The challenge was to add side navbar, sticky header, cookie pop-up and a slider for the hero images. I started with the header and added some JavaScript to make it stay on top. I added the same to the main navbar and added scroll down/up statement to make the page respond to user interaction. After that I added a jQuery plugin called owlCarousel to make my hero images change. I have also added some code to check if user has accepted the cookies and if not ask them to do so. The last and most important part of this task was to create a side navbar for different screen sizes that appears on click on the burger icon. 
              </div>
            </div>
    
    {/* <!-- Project 5 --> */}
            <div class="project-5 project">          
              <a href="http://js-image-assigner.angel-angelov.netmatters-scs.co.uk/"  target="_blank" rel="noreferrer">
                <div class="img-container">
                  <img src="images/image-assigner-task.PNG" class="photo-image-assigner photo-project" alt="assigner" /></div>
                <p class="project-title project-title-3">Image Assigner</p>  
              </a>      
              <a href="https://github.com/angelangelov88/JavaScript-Reflection-Task2" target="_blank" class="project-details" rel="noreferrer">View Project Files 
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              <button class="btn-project more-info-btn-5">More Info...</button>
              <div class="text-holder">That is my second JavaScript project. We had to create a page with randomly generated image shown. There should be option to refresh and show another one, add an email which is validated and assign an image to this email. Also there should be an option to add image to another email and show them all at the bottom of the page.
              </div>
            </div>
    
    {/* <!-- Project 6 --> */}
            <div class="project-6 project">          
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#"  target="_blank">
                <div class="img-container">
                  <img src="images/code.jpg" class="photo-change-name photo-project" alt="change-name" /></div>
                <p class="project-title project-title-3">Project 6</p> 
              </a>       
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" class="project-details">View Project Files 
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              <button class="btn-project more-info-btn-6">More Info...</button>
              <div class="text-holder">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
    
    {/* <!-- Contact form container. I have added second container for the purpose of styling and in order to make sure that it works on all screen sizes--> */}
          <div id="contact" class="contact">
            <div class="contact-2">
    
    {/* <!-- Get in touch part --> */}
              <div class="get-in-touch">
                <div class="get-in-touch-2">
                  <h2>Get In Touch</h2>
                  <ul class="contact-ul">
                    <li>sed interdum est vel solicitudin bibendum. Proin at accumsan nulla, non facilisis massa.</li>
                    <li class="phone"><a href="tel:07553692967">07553692967</a></li>
                    <li class="phone"><a href="mailto:ang.angelov88@gmail.com">ang.angelov88@gmail.com</a></li>
                    <li>Phasellus cursus urna in neque faucibus, eu dapibus magna vehicula. Sed tempus cursus mauris et scelerisque. Pellentesque ornare mi at fringilla egestas.</li> 
                  </ul>
                </div>
              </div>
    
    {/* <!-- Actual contact form with the fields and placeholders--> */}
              <form class="contact-form">
                <div class="contact-form-2">
                  <input id="fname" type="text" required="required" placeholder="First Name*" />
                  <input id="lname" type="text" required="required" placeholder="Last Name*" />
                  <input id="email" type="email" required="required" placeholder="Email Address*" />
                  <label id="error-message">Make sure you type a valid email address!</label>
                  <input id="subject" type="text" required="required" placeholder="Subject*" />
                  <input id="message" type="text" placeholder="Your text here..." />
                  <input id="submit" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
    
    {/* <!--Scroll up button  --> */}
          <div class="scroll-up">
            <a href="index.html" class="scroll-up-text">
            <i class="fas fa-chevron-up"></i>
            <br />
            Back To Top
            </a>
          </div>
        </div>  
    
        {/* <script src="https://cdn.jsdelivr.net/npm/typeit@7.0.4/dist/typeit.min.js"></script>
        <script src="js/core.js"></script>
        <script src="js/index-page.js"></script>
        <script src="js/main.js"></script> */}
    </>
      );
}

export default Portfolio;