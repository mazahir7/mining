"use strict";

const productInfo = [
  {
    info: "At Rajlaxmi Minchem, we offer premium barites, a barium sulfate mineral essential in various industrial applications. Barites are widely used in the oil and gas, paint, plastics, rubber, and pharmaceutical industries. Our barites are known for their high specific gravity, chemical inertness, and consistent particle size.Rajlaxmi Minchem is dedicated to providing high-quality barites that meet the specific needs of our customers. Rely on us for dependable, top-grade barites products designed to optimize your industrial processes.",

    application:
      "Oil and gas drilling (drilling mud);Paints and coatings;Plastics manufacturing;Rubber products;Pharmaceutical formulations",
  },
  {
    info: "At Rajlaxmi Minchem, we supply high-grade calcite, a calcium carbonate mineral with diverse industrial applications. Calcite is widely used in the construction, plastics, paints, rubber, paper, and ceramics industries. Our calcite is prized for its high purity, consistent particle size, and exceptional brightness.Rajlaxmi Minchem is dedicated to delivering top-quality calcite that meets the unique requirements of our customers. Choose us for dependable and superior calcite products designed to optimize your industrial processes",

    application:
      "Construction materials;Plastics manufacturing;Paints and coatings;Rubber products;Paper production;Ceramics industry",
  },
  {
    info: "At Rajlaxmi Minchem, we supply high-quality clay, a versatile mineral widely used across various industries. Clay is extensively utilized in ceramics, paper, paints, rubber, and cosmetics. Our clay is known for its excellent plasticity, fine particle size, and high purity.Rajlaxmi Minchem is committed to providing superior quality clay that meets the specific requirements of our customers. Choose us for reliable, premium clay products tailored to enhance your industrial and commercial applications.",

    application:
      "Ceramics production;Paper manufacturing;Paints and coatings;Rubber products;Cosmetics and personal care products",
  },
  {
    info: "At Rajlaxmi Minchem, we provide high-quality dolomite, a versatile mineral essential in various industries. Dolomite is widely used in the construction, glass, steel, agriculture, ceramics, and environmental sectors. Our dolomite is known for its high purity, brightness, and customizable particle size, making it suitable for a wide range of applications. With a commitment to quality and customer satisfaction, Rajlaxmi Minchem ensures that our dolomite products meet the highest standards, tailored to your specific needs. Choose us for reliable and high-quality dolomite solutions.",

    application:
      "Cement production;Aggregate for construction;Glass manufacturing;Fluxing agent in steelmaking;Soil conditioner in agriculture;Ceramics production;Water treatment",
  },
  {
    info: "At Rajlaxmi Minchem, we provide top-quality silica, a crucial mineral with extensive applications across various industries. Silica is extensively used in glass manufacturing, construction, electronics, ceramics, paints, and filtration. Our silica is known for its high purity, uniform particle size, and excellent chemical stability. Rajlaxmi Minchem is committed to supplying high-quality silica that meets the specific needs of our customers. Trust us for reliable, superior silica products tailored to enhance your industrial applications.",

    application:
      "Glass manufacturing;Construction materials;Electronics and semiconductors;Ceramics production;Paints and coatings;Water filtration",
  },
  {
    info: "At Rajlaxmi Minchem, we offer premium quality talc, a soft mineral known for its excellent physical and chemical properties. Talc is extensively used in various industries such as cosmetics, pharmaceuticals, paints, plastics, ceramics, paper, and rubber. Our talc is renowned for its high purity, fine particle size, and exceptional brightness. Rajlaxmi Minchem is committed to providing high-quality talc that meets the specific needs of our customers. Trust us for reliable, top-grade talc solutions tailored to enhance your products and processes.",

    application:
      "Cosmetics and personal care products;Pharmaceutical formulations;Paints and coatings;Plastics and rubber manufacturing;Ceramics production;Paper manufacturing",
  },
];

const mobileNav = document.querySelector(".mobile-nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const contentContainer = document.querySelector(".content-holder");
const over = document.querySelector(".over");
let contentCloseBtn = "";
const cards = document.querySelector(".cards");

const form = document.querySelector(".form");

form &&
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.reset();
  });

cards &&
  cards.addEventListener("click", function (e) {
    const target = e.target;
    if (!target.classList.contains("card-info")) return;

    const productCode = target.getAttribute("data-product-code");

    const productApp = productInfo[productCode].application
      .split(";")
      .map((el) => `<li>${el}</li>`)
      .join("");

    const productHTML = `<ion-icon class="close-content" name="close-outline"></ion-icon>
          <p>${productInfo[productCode].info}</p>
          <h6>Applications</h6>
          <ul>${productApp}</ul>`;

    contentContainer.innerHTML = productHTML;

    toggleOverview();
    toggleContent();

    contentCloseBtn = document.querySelector(".close-content");
    contentCloseBtn.addEventListener("click", () => {
      toggleOverview();
      toggleContent();
    });
  });

mobileNav.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.closest(".dropper") || target.classList.contains("item")) return;

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
