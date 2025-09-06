import "./App.scss";
import { Header } from "./components/molecules/Header/Header";
import { ThemeToggle } from "./components/molecules/ThemeToggle/ThemeToggle";
import { TictactoeTable } from "./components/molecules/TictactoeTable/TictactoeTable";

function App() {
  return (
    <div className="App">
      <Header />
      <TictactoeTable />
      <ThemeToggle />
    </div>
  );
}

export default App;
