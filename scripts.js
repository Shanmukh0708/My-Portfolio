$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Student",
        
        "Front-end Engineer",
       
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Student",
        
        "Front-end Engineer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)", "Created by @Shanmukh"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });

  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 1000, 
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',  
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(error) {
      error.style.display = 'none';
    });
  

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      valid = false;
      document.getElementById('emailError').textContent = 'Email is required.';
      document.getElementById('emailError').style.display = 'block';
    } else if (!emailPattern.test(email)) {
      valid = false;
      document.getElementById('emailError').textContent = 'Invalid email address.';
      document.getElementById('emailError').style.display = 'block';
    }
 
  
    // If any field is invalid, prevent form submission
    if (!valid) {
      event.preventDefault();
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  
