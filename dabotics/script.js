// Example JavaScript functionality (optional)
// You can add more scripts based on your specific requirements

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
    
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Image slider (example)
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }
// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.getElementById('contactForm');
  
    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Perform form validation
      if (validateForm()) {
        // If form is valid, submit the form data
        submitForm();
      }
    });
  
    // Function to validate the form fields
    function validateForm() {
      // Get form field values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Perform validation (example validation)
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all the fields.');
        return false; // Prevent form submission
      }
  
      // Add more validation logic as needed
  
      return true; // Form is valid
    }
  
    // Function to submit the form data
    function submitForm() {
      // Get form field values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Perform further processing or AJAX submission here
      // Example: You can use fetch() or XMLHttpRequest to send form data to the server
      // Replace the following code with your actual submission logic
  
      const formData = {
        name: name,
        email: email,
        message: message
      };
  
      console.log(formData); // Output the form data to the console
  
      // Reset the form fields
      contactForm.reset();
  
      // Display a success message or perform other actions after form submission
      alert('Form submitted successfully!');
    }
  });
    