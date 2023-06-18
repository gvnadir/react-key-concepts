import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewTodo, { action as newTodoAction } from "./routes/NewTodo";
import SelectedTodo, {
  loader as todoLoader,
  action as changeTodoAction,
} from "./routes/SelectedTodo";
import Todos, { loader as todosLoader } from "./routes/Todos";
import Error from "./routes/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
      errorElement: <Error />,
      loader: todosLoader,
      children: [
        { path: "new", element: <NewTodo />, action: newTodoAction },
        {
          path: ":id",
          element: <SelectedTodo />,
          loader: todoLoader,
          action: changeTodoAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
