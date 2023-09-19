let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides() {
          let i;
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.display = "none";
          }
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
          slides[slideIndex-1].style.display = "block";
          slides[slideIndex-1].style.display = "block";
          setTimeout(showSlides, 2000); // Change image every 2 seconds