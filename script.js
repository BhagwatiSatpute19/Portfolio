const handle = document.getElementById("handle");
const rope = document.getElementById("rope");
const bulb = document.getElementById("bulb");

let isPulled = false;

handle.addEventListener("click", () => {
  if (isPulled) return;

  // Simulate rope pull
  rope.style.transform = "translateY(50px)";
  handle.style.transform = "translateY(50px)";

  // After 300ms, glow the bulb
  setTimeout(() => {
    bulb.classList.add("on");
  }, 300);

  isPulled = true;
});
