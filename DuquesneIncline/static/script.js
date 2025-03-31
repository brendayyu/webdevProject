// copyright year for the footer
function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
}

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function myFunction() {
    var x = document.getElementById("hamnavlinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

// Funtion to validate the information submitted to the mailing form
function validate() {
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const commentInput = document.getElementById('commentInput');
  const numberInput = document.getElementById('numberInput');
  const zipInput = document.getElementById('zipInput');

  if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity() || !numberInput.checkValidity() || !zipInput.checkValidity()) {
    document.getElementById("error").innerHTML="Make sure to enter all the required information to be apart of our mailing list!";
    document.getElementById("thankYouMessage").innerHTML="";

  } else {
    document.getElementById("error").innerHTML="";
    document.getElementById("thankYouMessage").innerHTML="Thank you for joining!";
    document.getElementById("mailingform").display = 'none';
    document.getElementById("thankYouMessage").style.display = 'block';
  }
  
}

// Function to change slideshow photos automatically (every 2 seconds)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}


