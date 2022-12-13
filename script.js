let passwordShow = false;
let popularLessonsMobileCurrent = 0;

window.addEventListener("DOMContentLoaded", function () {
  const slider = () => {
    const arrowRight = document.getElementById("learning-tools-arrow-to-right");
    const arrowLeft = document.getElementById("learning-tools-arrow-to-left");
    const circleNav = document.querySelectorAll(".learning-tools-circle");
    const arrowLeftMobile = document.querySelector(
      ".popular-lessons-arrow-left"
    );
    const arrowRightMobile = document.querySelector(
      ".popular-lessons-arrow-right"
    );
    arrowLeftMobile.addEventListener("click", () => {
      if (popularLessonsMobileCurrent == 0) return;
      slideElementMobile(popularLessonsMobileCurrent - 1, true);
      popularLessonsMobileCurrent--;
    });
    arrowRightMobile.addEventListener("click", () => {
      if (popularLessonsMobileCurrent == 2) return;
      slideElementMobile(popularLessonsMobileCurrent + 1, false);
      popularLessonsMobileCurrent++;
    });

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

  const toogleSignup = () => {
    const signUpButton = document.querySelector(".nav-button-signup");
    const closeButton = document.querySelector("#close-signup");

    signUpButton.addEventListener("click", () => {
      resetForm();
      showElement(document.querySelector(".signup"));
    });

    closeButton.addEventListener("click", () =>
      hideElement(document.querySelector(".signup"))
    );
  };

  const switchLoginRegister = () => {
    const toLogin = document.querySelector(".to-login");
    const toRegister = document.querySelector(".to-signup");

    toLogin.addEventListener("click", () => {
      hideElement(document.querySelector(".signup"));
      showElement(document.querySelector(".login"));
    });

    toRegister.addEventListener("click", () => {
      hideElement(document.querySelector(".login"));
      resetForm();
      showElement(document.querySelector(".signup"));
    });
  };

  const toogleLogin = () => {
    const loginButton = document.querySelector(".nav-button-login");
    const loginElement = document.querySelector(".login");
    const closeLogin = document.getElementById("close-login");

    loginButton.addEventListener("click", () => {
      resetForm();
      showElement(loginElement);
    });
    closeLogin.addEventListener("click", () => hideElement(loginElement));
  };

  const tooglePassword = () => {
    const passwordButton = document.querySelectorAll(".open-password");

    passwordButton.forEach((button) =>
      button.addEventListener("click", changeType)
    );
  };

  const loginAndSignup = () => {
    const submitButtons = document.querySelectorAll(".submit-button");
    const loginGoogle = document.querySelectorAll(".login-google");

    loginGoogle.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        handleLogin();
      })
    );

    submitButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        handleLogin();
      })
    );
  };

  const showAccountInformation = () => {
    const accountButton = document.querySelector(".nav-account-button");

    accountButton.addEventListener("click", () => {
      document
        .querySelector(".account-information-container")
        .classList.toggle("active");
    });
  };

  const logout = () => {
    const logoutButton = document.querySelector(".account-logout");

    logoutButton.addEventListener("click", () => {
      showElement(document.querySelector(".nav-button"));
      hideElement(document.querySelector(".nav-account"));
      hideElement(document.querySelector(".account-information-container"));
    });
  };

  const slidePopularLessonMobile = () => {
    const leftArrow = document.querySelector(".learning-tools-arrow-left");
    const rightArrow = document.querySelector(".learning-tools-arrow-right");

    let bool = true;

    leftArrow.addEventListener("click", () => {
      bool = !bool;

      jalankan(bool);
    });

    rightArrow.addEventListener("click", () => {
      bool = !bool;

      jalankan(bool);
    });
  };

  function jalankan(bool) {
    if (bool) {
      document
        .querySelector(".learning-tools-mobile-container.kedua")
        .classList.add("active");
      document
        .querySelector(".learning-tools-mobile-container.pertama")
        .classList.remove("active");
    } else {
      document
        .querySelector(".learning-tools-mobile-container.kedua")
        .classList.remove("active");
      document
        .querySelector(".learning-tools-mobile-container.pertama")
        .classList.add("active");
    }
  }

  function slideElementMobile(element, directionToLeft) {
    const popularLessons = document.querySelectorAll(".popular-lesson-mobile");

    popularLessons[element].classList.add("active");
    popularLessons[
      directionToLeft ? element + 1 : element - 1
    ].classList.remove("active");
  }

  function resetForm() {
    const mataBuka = document.querySelectorAll(".mata-buka");
    const mataTutup = document.querySelectorAll(".mata-tutup");
    const forms = document.querySelectorAll(".signup-form");
    mataBuka[0].style.display = "none";
    mataBuka[1].style.display = "none";
    mataTutup[0].style.display = "block";
    mataTutup[1].style.display = "block";
    passwordShow = false;
    forms[0].reset();
    forms[1].reset();
  }

  function changeType() {
    const password1 = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const mataBuka = document.querySelectorAll(".mata-buka");
    const mataTutup = document.querySelectorAll(".mata-tutup");
    passwordShow = !passwordShow;
    password1.setAttribute("type", passwordShow ? "text" : "password");
    password2.setAttribute("type", passwordShow ? "text" : "password");

    if (passwordShow) {
      mataBuka[0].style.display = "block";
      mataBuka[1].style.display = "block";
      mataTutup[0].style.display = "none";
      mataTutup[1].style.display = "none";
    } else {
      mataBuka[0].style.display = "none";
      mataBuka[1].style.display = "none";
      mataTutup[0].style.display = "block";
      mataTutup[1].style.display = "block";
    }
  }

  function handleLogin() {
    hideElement(document.querySelector(".login"));
    hideElement(document.querySelector(".signup"));
    hideElement(document.querySelector(".nav-button"));
    showElement(document.querySelector(".nav-account"));
  }

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

  function showElement(element) {
    element.classList.add("active");
  }

  function hideElement(element) {
    element.classList.remove("active");
  }

  slider();
  linkScroll();
  toogleSignup();
  toogleLogin();
  tooglePassword();
  loginAndSignup();
  showAccountInformation();
  logout();
  switchLoginRegister();
  slidePopularLessonMobile();
});
