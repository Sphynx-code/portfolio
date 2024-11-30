let button = document.querySelector(".button");
let loadingDiv = document.querySelector(".loading-projects");
let projectsDiv = document.querySelector(".fade-in");
let HTML = `
    <h3>Loading Projects</h3>
    <div class="loading-bar-projects">
        <div class="loading-line-projects"></div>
    </div>`;
let clicked = false;

button.addEventListener("click", () => {
  if (!clicked) {
    loadingDiv.insertAdjacentHTML("beforeend", HTML);
    clicked = true;
    setTimeout(() => {
      loadingDiv.classList.add("hide");
      setTimeout(() => {
        loadingDiv.innerHTML = "";
        projectsDiv.classList.add("show");
      }, 1700); // Delay for the opacity transition (2 seconds)
    }, 3100);
  }
});
