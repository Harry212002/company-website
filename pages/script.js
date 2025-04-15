const swiper = new Swiper('.wrapper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: false, // Important for spacing
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // Get the current page name
    const currentPage = window.location.pathname.split("/").pop();

    // Get all the nav links
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through the nav links
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop(); // Get the last part of the href attribute

        // If the link's href matches the current page, add the 'active' class
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});


