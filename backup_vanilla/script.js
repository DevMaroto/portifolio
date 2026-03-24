

// Logica do carousel
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let intervalId;

controls.forEach((control) => {
  control.addEventListener("mousedown", (event) => {
    const isLeft = control.classList.contains("arrow-left");
    if (isLeft) {
      intervalId = setInterval(() => moveCarousel(-1), 100);
    } else {
      intervalId = setInterval(() => moveCarousel(1), 100);
    }
  });

  control.addEventListener("mouseup", () => {
    clearInterval(intervalId);
  });

  control.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
  });
});

function moveCarousel(direction) {
  currentItem += direction;
  if (currentItem >= maxItems) {
    currentItem = 0;
  }
  if (currentItem < 0) {
    currentItem = maxItems - 1;
  }

  items.forEach((item) => item.classList.remove("current-item"));

  items[currentItem].scrollIntoView({
    inline: "center",
    behavior: "smooth",
    block: "nearest",
  });

  items[currentItem].classList.add("current-item");
}
