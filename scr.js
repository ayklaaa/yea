//включение меню
document.getElementById("amongus").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("menu-active");
});

document.getElementById("anti-amongus").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("menu-active");
});

//стилизация навигационных кнопок
const navItem = document.querySelectorAll(".navigation-link");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    for (let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("navigation-link--active");
    }
    navItem[i].classList.add("navigation-link--active");
  });
}

//читать далее
document.getElementById("article__read-more").addEventListener("click", () => {
  document
    .getElementsByClassName("main__article")[0]
    .classList.toggle("main__article--active");
});
window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    "(max-width: 426px)",
    ".slider-1",
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    someFunc
  );
});
function moreRead() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Подробнее";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Скрыть";
    more.style.display = "flex";
  }
}

const modal = document.querySelector(".modall");

document.getElementById("settingsss").addEventListener("click", () => {
  document.querySelector(".modall__fon").style.display = "block";
  modal.style.display = "flex";
});

document.getElementById("close__modall").addEventListener("click", () => {
  document.querySelector(".modall__fon").style.display = "none";
  modal.style.display = "none";
});

const modall__call = document.querySelector(".modall__call");

document.getElementById("messagee").addEventListener("click", () => {
  document.querySelector(".modall__call").style.display = "block";
  modal.style.display = "flex";
});

document.getElementById("close__modall").addEventListener("click", () => {
  document.querySelector(".modall__calL").style.display = "none";
  modal.style.display = "none";
});
