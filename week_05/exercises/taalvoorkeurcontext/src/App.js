import "./App.css";
import { LanguageSelector } from "./components/LanguageSelector";
import { LanguageProvider } from "./context/LanguageContext";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LanguageSelector />
        <HomePage />
      </LanguageProvider>
    </div>
  );
}

export default App;
