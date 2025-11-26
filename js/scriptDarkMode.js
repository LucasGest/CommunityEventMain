document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const body = document.body;
  const icon = toggle.querySelector("i");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("bx-moon", "bx-sun");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
      icon.classList.replace("bx-moon", "bx-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("bx-sun", "bx-moon");
      localStorage.setItem("theme", "light");
    }
  });
});
