const themes = [
  {
    name: "black",
    message: "black theme is on!"
  },
  {
    name: "orange",
    message: "orange theme is on!"
  },
  {
    name: "red",
    message: "red theme is on!"
  },
  {
    name: "green",
    message: "green theme is on!"
  },
  {
    name: "blue",
    message: "blue theme is on!"
  }
]


const dropdown = document.getElementById("theme-dropdown");
const button = document.getElementById("theme-switcher-button");
const statusMessage = document.getElementById("status-message");

button.addEventListener("click", () => {

    const expanded = button.getAttribute("aria-expanded") === "true";
    if (expanded) {
        button.setAttribute("aria-expanded", "false");
        dropdown.hidden = true;
    } else {
        button.setAttribute("aria-expanded", "true");
        dropdown.hidden = false;
    }
})


document.addEventListener("click", (e) => {
    if((!button.contains(e.target) && (!dropdown.contains(e.target)))) {
        button.setAttribute("aria-expanded", "false");
        dropdown.hidden = true;
    }
})

dropdown.addEventListener("click", (e) => {
    if(e.target.matches("li")) {

        const selectedTheme = e.target.textContent;
        // console.log(selectedTheme);

        themes.forEach(theme => {
            document.body.classList.remove(`theme-${theme.name}`)
        });

        document.body.classList.add(`theme-${selectedTheme}`);

        const themeObj = themes.find(t => t.name === selectedTheme);
        statusMessage.textContent = themeObj.message;

        button.setAttribute("aria-expanded", "false");
        dropdown.hidden = true;
    }
})