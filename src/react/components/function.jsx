import { body } from "../theme";

const darkMode = () => {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
  localStorage.setItem("theme", "dark");
};

const lightMode = () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  localStorage.setItem("theme", "light");
};

export { darkMode, lightMode };
