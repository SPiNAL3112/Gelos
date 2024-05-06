// nav 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// slides
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000); 
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

var touchstartX = 0;
var touchendX = 0;
slider.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
  if (touchendX < touchstartX) {
      next.click(); // User swiped left, go to the next slide
  }
  if (touchendX > touchstartX) {
      prev.click(); // User swiped right, go to the previous slide
  }
}

// Initial setup call to position everything correctly
reloadSlider();

// accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

 accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;

     }
     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")){
       accordionItemBody.style.maxHeight =accordionItemBody.scrollHeight + "px";
     }
     else{
       accordionItemBody.style.maxHeight = 0;
     }
   });
 });

 // Form Validating code
 document.getElementById('contactForm').addEventListener('submit', function (e) {
   e.preventDefault();
   var name = document.getElementById('fname').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
   var subject = document.getElementById('subject').value;
   var hasError = false;

   // Validate Name
   if (!/^[A-Za-z\s.]+$/.test(name)) {
     document.getElementById('nameError').textContent = 'This field allows only letters, space, and dots.';
     hasError = true;
   } else {
     document.getElementById('nameError').textContent = '';
   }

   // Validate Email
   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
     document.getElementById('emailError').textContent = 'Please enter a valid email address.';
     hasError = true;
   } else {
     document.getElementById('emailError').textContent = '';
   }

   // Validate Phone Number
   if (!/^\d{10}$/.test(phone)) {
     document.getElementById('phoneError').textContent = 'This field allows only numbers.';
     hasError = true;
   } else {
     document.getElementById('phoneError').textContent = '';
   }

   // Check for empty fields
   if (!name || !email || !phone || !subject) {
     document.getElementById('formError').textContent = 'Enter the complete details.';
     hasError = true;
   } else {
     document.getElementById('formError').textContent = '';
   }

   if (!hasError) {
     document.getElementById('successMessage').textContent = 'Thank you! Your message was sent successfully. You will hear back from us soon.';
     // For demonstration purposes, we're not actually submitting the form.
   }
 });
// nav links scrolling
 document.addEventListener("DOMContentLoaded", function() {
    // Select all nav-link elements
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href attribute of the clicked link
            const targetSection = document.querySelector(targetId); // Select the target section based on the href attribute value

            if (targetSection) {
                // Calculate the position of the target section
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 70;

                // Scroll to the target section with offset
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// back to top button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}