// Dynamically populate the current year
const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Dynamically populate the document's last modified date
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modification: " + document.lastModified;
