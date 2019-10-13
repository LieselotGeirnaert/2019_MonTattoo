{
  let slideIndex = 1;
  let clientsVisible;

  showSlides(slideIndex);

  // Next/previous controls
  function plusSlide(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    if (slides.length > 0) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
      }
      slides[slideIndex - 1].classList.remove("hidden");

      let dots = document.getElementsByClassName("slider__bullet");
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(
          " slider__bullet--active",
          ""
        );
      }
      dots[slideIndex - 1].className += " slider__bullet--active";
    }
  }

  function toggleNav() {
    let nav = document.getElementsByClassName("header__nav mobile");
    nav = nav[0];
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  }

  const init = () => {
    clientsVisible = 4;
  };

  function showClients() {
    clientsVisible += 4;

    let clients = document.getElementsByClassName("list__item clients");
    if (clientsVisible > clients.length) {
      clientsVisible = clients.length;
    }
    for (i = 0; i < clientsVisible; i++) {
      clients[i].classList.remove("hidden");
    }
  }

  init();
}
