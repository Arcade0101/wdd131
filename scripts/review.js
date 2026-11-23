const count = (Number(localStorage.getItem("reviewCount")) || 0) + 1;
localStorage.setItem("reviewCount", count);
document.querySelector("#reviewCount").textContent = count;

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
