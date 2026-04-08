// simple click animation
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.opacity = "0.7";
    setTimeout(() => {
      btn.style.opacity = "1";
    }, 200);
  });
});
