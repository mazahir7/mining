"use strict";

const aboutSection = document.getElementById("about-section");
const productSection = document.getElementById("product-section");
const valueSection = document.getElementById("value-section");
const creditSection = document.getElementById("credit-section");
const commitSection = document.getElementById("commit-section");
const innovationSection = document.getElementById("innovation-section");
const contactSection = document.getElementById("contact-us-here");

const allsections = document.querySelectorAll(".container section");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function animate(entries, observer) {
  const isIntersecting = entries[0].isIntersecting;
  const target = entries[0].target;

  if (isIntersecting) {
    target.style.opacity = 1;
    target.style.marginTop = "12rem";
  }

  if (target.id == "contact-us-here" || target.id == "innovation-section") {
    allsections.forEach((el) => {
      el.style.opacity = 1;
      el.style.marginTop = "12rem";
    });
  }
}

const observer = new IntersectionObserver(animate, options);

observer.observe(aboutSection);
observer.observe(productSection);
observer.observe(valueSection);
observer.observe(creditSection);
observer.observe(commitSection);
observer.observe(innovationSection);
observer.observe(contactSection);
