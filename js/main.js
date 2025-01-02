/////tabs active in about us///////////////
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('activet'));
  
      // Add active class to clicked tab
      this.classList.add('activet');
  
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(content => content.classList.add('d-none'));
  
      // Show the related tab content
      const contentId = this.getAttribute('data-content');
      document.getElementById(contentId).classList.remove('d-none');
    });
  });
  /////tabs active in about us///////////////
//   <!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay:2000,
      disableOnInteraction: false,
    }
  });
//   <!-- Initialize Swiper -->
 ///year under footer/////// -->

document.getElementById('year').textContent = new Date().getFullYear();
 ///year under footer/////// -->

// Gsap////////

