import "./App.css";
import { GET_ALL_TODOS } from "./graphql/queries";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;
  console.log(data);
  console.log(error);

  return (
    <div className="App">
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
