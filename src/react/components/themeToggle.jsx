import { body } from "../theme";
import { darkMode, lightMode } from "./function";

function ThemeToggle() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    darkMode();
  } else {
    lightMode();
  }

  const handleClick = (e) => {
    e.target.checked ? lightMode() : darkMode();
  };

  return (
    <>
      <label className="theme-toggle">
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => handleClick(e)}
          defaultChecked={theme === "light"}
        />
        <div className="slider"></div>
      </label>
    </>
  );
}

export default ThemeToggle;
