const keyBox = document.getElementById("keyBox");

document.addEventListener("keydown", (event) => {
  const key = event.key === " " ? "Space" : event.key;
  keyBox.textContent = key;

  // Random Color
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Re-trigger animation
  keyBox.style.animation = "none";
  keyBox.offsetHeight; // Trigger reflow
  keyBox.style.animation = null;
});
