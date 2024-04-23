import "./App.css";
import TeamMember from "./components/TeamMember";

function App() {
  const members = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      role: "Software Engineer",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="App">
      <TeamMember members={members} />
    </div>
  );
}

export default App;
