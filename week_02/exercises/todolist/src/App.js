import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  const todos = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Vue", completed: false },
    { id: 3, title: "Learn Angular", completed: false },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Todolist todos={todos} />
      </header>
    </div>
  );
}

export default App;
