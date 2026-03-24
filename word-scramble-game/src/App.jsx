import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-pink-50">
      <header>
        <Header />
      </header>
      <GameBoard />
    </div>
  );
}

export default App;