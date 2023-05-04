import logo from "./logo.svg";
import "./App.css";
import PasswordField from "./PasswordField";

function App() {
  return (
    <div className="App">
      <h1>A useId hook demo!</h1>
      {/* Now, even if PasswordField appears multiple times on the screen, the generated IDs won’t clash. */}
      <PasswordField />
      <PasswordField />
      <PasswordField />
    </div>
  );
}

export default App;
