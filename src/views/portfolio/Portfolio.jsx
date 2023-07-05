import '../../style/style.scss';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Typewriter from '../typewriter/Typewriter';

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
     {/* Beginning of the main content. I have added content div to wrap everything up */}
        <div className="content">
    
    {/* <!-- Hero image and text part --> */}
          <div className="hero-image">
            <div className="gradient-div-brand" />
            <div className="hero-text">
              <Typewriter 
                text="My Name is Angel Angelov"
                text2="I'm a Software Developer" 
                delay={100}
              />
            </div>
    {/* <!-- Scroll down text and arrow --> */}
            <div className="scroll">
              <div className="scroll-down-arrow" onClick={() => document.getElementById('portfolio-link').scrollIntoView({ behavior: 'smooth' })}>
                Scroll Down
                  <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
      
      <Projects />
      <Contact />
    {/* <!--Scroll up button  --> */}
          <div className="scroll-up scroll-up-text" onClick={() => document.getElementsByClassName('content')[0].scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-chevron-up"></i>
            <br />
            Back To Top
          </div>
        </div>  
        </>
      );
}

export default Portfolio;