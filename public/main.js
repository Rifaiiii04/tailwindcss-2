const menuToggle = document.getElementById("menuToggle");
const spans = document.querySelectorAll("span");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

let isOpen = false;

menuToggle.addEventListener("click", ()=> {
  isOpen =!isOpen;

  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");

  spans[0].classList.toggle("rotate-45");
  spans[0].classList.toggle("translate-y-[10px]");

  spans[1].classList.toggle("opacity-0");

  spans[2].classList.toggle("-rotate-45");
  spans[2].classList.toggle("-translate-y-[18px]");
})

overlay.addEventListener("click", () => {
  isOpen = false
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");

 spans[0].classList.remove("rotate-45");
  spans[0].classList.remove("translate-y-[10px]");

  spans[1].classList.remove("opacity-0");

  spans[2].classList.remove("-rotate-45");
  spans[2].classList.remove("-translate-y-[18px]");
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (anjaymabar) => {
cursor.style.left = `${anjaymabar.clientX}px`;
cursor.style.top = `${anjaymabar.clientY}px`;
});
