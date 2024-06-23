"use strict";

const mobileNav = document.querySelector(".mobile-nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const over = document.querySelector(".over");

const form = document.querySelector(".form");

const proDropped = document.getElementById("pro-droped");
const proDropped2 = document.getElementById("pro-droped-2");

const proDropped3 = document.getElementById("pro-droped-3");
const proDropped4 = document.getElementById("pro-droped-4");

proDropped &&
  proDropped.addEventListener("click", () => {
    proDropped2.classList.toggle("active");
    if (proDropped2.classList.contains("active")) {
      proDropped2.style.marginTop = "-35px";
    } else {
      proDropped2.style.marginTop = "0";
    }
  });

proDropped3 &&
  proDropped3.addEventListener("click", () => {
    proDropped4.classList.toggle("active");
    if (proDropped4.classList.contains("active")) {
      proDropped4.style.marginTop = "-35px";
    } else {
      proDropped4.style.marginTop = "0";
    }
  });

form &&
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.reset();
  });

mobileNav.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.closest(".dropper") || target.classList.contains("item")) return;
  // console.log(target.closest(".dropper"));
  target.closest(".dropper").querySelector(".drop").classList.toggle("active");
});

const toggleMobileMenu = () => {
  mobileNav.classList.toggle("active");
};

const toggleOverview = () => {
  over.classList.toggle("active");
};

const toggleContent = () => {
  contentContainer.classList.toggle("active");
};

menu.addEventListener("click", toggleMobileMenu);
close.addEventListener("click", toggleMobileMenu);
