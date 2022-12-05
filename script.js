const slider = () => {
  const arrowRight = document.getElementById("learning-tools-arrow-to-right");
  const arrowLeft = document.getElementById("learning-tools-arrow-to-left");
  const circleNav = document.querySelectorAll(".learning-tools-circle");

  arrowLeft.addEventListener("click", () => slideElement(0));
  arrowRight.addEventListener("click", () => slideElement(1));
  circleNav.forEach((circle, index) => {
    circle.addEventListener("click", () => slideElement(index));
  });
};

const linkScroll = () => {
  const navLogo = document.querySelector(".nav-logo");
  const navLinks = document.querySelectorAll(".nav-link a");
  navLogo.addEventListener("click", () =>
    scrollToElement(document.querySelector("#home"))
  );
  navLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", function () {
      scrollToElement(
        document.querySelector(
          "#" + navLink.innerHTML.toLowerCase().replaceAll(" ", "-")
        )
      );
    });
  });
};

function scrollToElement(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function slideElement(num) {
  const learningTools1 = document.getElementById("learning-tools-1");
  const learningTools2 = document.getElementById("learning-tools-2");
  const circleNav = document.querySelectorAll(".learning-tools-circle");

  if (num == 0) {
    learningTools1.classList.add("active");
    learningTools2.classList.remove("active");
    circleNav[0].classList.add("active");
    circleNav[1].classList.remove("active");
  } else {
    learningTools2.classList.add("active");
    learningTools1.classList.remove("active");
    circleNav[1].classList.add("active");
    circleNav[0].classList.remove("active");
  }
}

slider();
linkScroll();
