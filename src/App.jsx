import "./scss/main.scss";
import "./react/theme";
import ThemeToggle from "./react/components/themeToggle";
import { listItem } from "./react/components/accd";
import "animate.css";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div>
            <span className="icon"></span>
            <h1>FAQs</h1>
          </div>
          <ul>{listItem}</ul>
        </div>
      </main>
    </>
  );
}

export default App;
