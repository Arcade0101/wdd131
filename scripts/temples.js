// 1. Dynamic Footer Information
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

// Set current year
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Set last modified date
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// 2. Responsive Hamburger Menu Toggle
const hamburgerButton = document.querySelector("#menu");
const navigationMenu = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});