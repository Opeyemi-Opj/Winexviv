document.addEventListener("DOMContentLoaded", () => {

const lpMainHeader = document.getElementById("lpMainHeader");
const lpScrollHeader = document.getElementById("lpScrollHeader");

if (lpMainHeader && lpScrollHeader) {
  function handleScroll() {
    if (window.scrollY > 80) {
      lpScrollHeader.classList.add("show");
      lpMainHeader.style.opacity = "0";
      lpMainHeader.style.pointerEvents = "none";
    } else {
      lpScrollHeader.classList.remove("show");
      lpMainHeader.style.opacity = "1";
      lpMainHeader.style.pointerEvents = "auto";
    }
  }

  window.addEventListener("scroll", handleScroll);
}

/* MOBILE MENU SYSTEM */

function setupMobileMenu(toggleClass, navClass) {
  const toggles = document.querySelectorAll(toggleClass);

  toggles.forEach(toggle => {
    const header = toggle.closest("header");
    const navbar = header.querySelector(navClass);

    if (!navbar) return;

    toggle.addEventListener("click", function () {
      navbar.classList.toggle("active");

      const bars = toggle.querySelector(".fa-bars");
      const close = toggle.querySelector(".fa-xmark");

      if (navbar.classList.contains("active")) {
        bars.style.display = "none";
        close.style.display = "inline-block";
      } else {
        bars.style.display = "inline-block";
        close.style.display = "none";
      }
    });
  });
}

/* Landing page menu */
setupMobileMenu(".lpmenu-toggle", ".lpnavbar");

/* Other pages menu */
setupMobileMenu(".Opmenu-toggle", ".Opnavbar");

/*MOBILE DROPDOWNS*/
document.querySelectorAll(
  ".lphas-dropdown > a, .Ophas-dropdown > a"
).forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});


  // SLIDER
  const slideBox = document.getElementById("slideBox");
  const dots = document.querySelectorAll(".dot");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  if (slideBox && dots.length && next && prev) {
    let index = 0;
    const totalSlides = dots.length;

    function updateSlider() {
      slideBox.style.transform = `translateX(${-100 * index}%)`;
      dots.forEach(dot => dot.classList.remove("active-dot"));
      dots[index].classList.add("active-dot");
    }

    next.onclick = () => {
      index = (index + 1) % totalSlides;
      updateSlider();
    };

    prev.onclick = () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlider();
    };

    setInterval(() => {
      index = (index + 1) % totalSlides;
      updateSlider();
    }, 4000);
  }

  // BACK TO TOP
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
