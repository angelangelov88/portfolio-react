const Contact = () => {
  return ( 
    <div id="contact" class="contact">
    {/* <!-- Contact form container. I have added second container for the purpose of styling and in order to make sure that it works on all screen sizes--> */}
    <div class="contact-2">

{/* <!-- Get in touch part --> */}
      <div class="get-in-touch">
        <div class="get-in-touch-2">
          <h2>Get In Touch</h2>
          <ul class="contact-ul">
            {/* <li>Interested in working together? Fill out the form below with your details or contact me with any questions you may have.</li> */}
            <li>Interested in working together? Contact me with any questions you may have.</li>
            <li class="phone"><a href="tel:07553692967">07553692967</a></li>
            <li class="phone"><a href="mailto:ang.angelov88@gmail.com">ang.angelov88@gmail.com</a></li>
            <li>I'll get back to you as soon as I can. That's a promise!</li> 
          </ul>
        </div>
      </div>

{/* <!-- Actual contact form with the fields and placeholders--> */}
      {/* <form class="contact-form">
        <div class="contact-form-2">
          <input id="fname" type="text" required="required" placeholder="First Name*" />
          <input id="lname" type="text" required="required" placeholder="Last Name*" />
          <input id="email" type="email" required="required" placeholder="Email Address*" />
          <label id="error-message">Make sure you type a valid email address!</label>
          <input id="subject" type="text" required="required" placeholder="Subject*" />
          <textarea id="message" type="text" placeholder="Your text here..." />
          <input id="submit" type="submit" value="Submit" />
        </div>
      </form> */}
    </div>
  </div>
);
}
 
export default Contact;