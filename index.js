// Scroll Animation

const viewOne = document.querySelector(".viewOne");
const viewTwo = document.querySelector(".viewTwo");
const viewThree = document.querySelector(".viewThree");

window.addEventListener("scroll", () => {
  const viewTwoTrigger = viewTwo.getBoundingClientRect().top;
  const viewTwoContainer = document.querySelector(".viewTwoContainer");

  if (viewTwoTrigger < 100) {
    viewTwoContainer.style.opacity = "1";
    setTimeout(() => {
      viewTwoContainer.style.transform = "translateY(0)";
    }, 200);
  } else {
    viewTwoContainer.style.transform = "translateY(20px)";
    setTimeout(() => {
      viewTwoContainer.style.opacity = "0";
    }, 200);
  }
});

// Main Nav Bar Script

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contacts = document.querySelector(".contacts");
const selected = document.querySelector(".selected");

const pageOne = document.querySelector(".pageOne");
const pageTwo = document.querySelector(".pageTwo");
const pageThree = document.querySelector(".pageThree");

home.addEventListener("click", () => {
  home.style.color = "white";
  contacts.style.color = "#111010";
  about.style.color = "#111010";
  selected.style.right = "220px";
  selected.style.width = "95px";

  pageOne.classList.remove("hide");
  pageTwo.classList.add("hide");
  pageThree.classList.add("hide");
});

about.addEventListener("click", () => {
  home.style.color = "#111010";
  contacts.style.color = "#111010";
  about.style.color = "white";
  selected.style.right = "130px";
  selected.style.width = "95px";

  pageOne.classList.add("hide");
  pageTwo.classList.remove("hide");
  pageThree.classList.add("hide");
});

contacts.addEventListener("click", () => {
  home.style.color = "#111010";
  contacts.style.color = "white";
  about.style.color = "#111010";
  selected.style.right = "20px";
  selected.style.width = "110px";

  pageOne.classList.add("hide");
  pageTwo.classList.add("hide");
  pageThree.classList.remove("hide");
});

// View Three Nav Bar Script

const bees = document.querySelector(".bees");
const honey = document.querySelector(".honey");
const industry = document.querySelector(".industry");
const video = document.querySelector(".viewThreeVid");

bees.addEventListener("click", () => {
  video.src = "https://www.youtube.com/embed/HdBkgBSjFXM?si=ivrqFHizcCA29htk";
});

honey.addEventListener("click", () => {
  video.src = "https://www.youtube.com/embed/nZlEjDLJCmg?si=I_2-ZBVJa4U6taZn";
});

industry.addEventListener("click", () => {
  video.src = "https://www.youtube.com/embed/RKa0T4Na8To?si=Q9ieX8zs3KPpklbL";
});
