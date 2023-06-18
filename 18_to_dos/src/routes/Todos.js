import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getTodos } from "../data/todos";

function Todos() {
  const todos = useLoaderData();

  const addButton = (
    <Link className="btn-cta" to="/new">
      Add Todo
    </Link>
  );

  let content = (
    <main>
      <h1>No todos found</h1>
      <p>Start adding some!</p>
      <p>{addButton}</p>
    </main>
  );

  if (todos && todos.length > 0) {
    content = (
      <main>
        <section>{addButton}</section>
        <ul id="todos">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link to={todo.id}>{todo.text}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <>
      {content}
      <Outlet />
    </>
  );
}

export default Todos;

export function loader() {
  return getTodos();
}
