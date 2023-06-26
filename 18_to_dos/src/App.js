import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewTodo, { action as newTodoAction } from "./routes/NewTodo";
import SelectedTodo, {
  loader as todoLoader,
  action as changeTodoAction,
} from "./routes/SelectedTodo";
import Todos, { loader as todosLoader } from "./routes/Todos";
import Error from "./routes/Error";

function App() {
  /* 
	Since BrowserRouter doesn't support the extra data capabilities (such as the loader() function)
	you must use createBrowserRouter() instead.
	But createBrowserRouter() does not accept anything but route definition.
	That's why shared layouts must be implemented via layout routes instead of wrapper component.
	(Before, inside the BrowserRouter, I could use my <Layout> component. Now that's not possibile,
	that's why we will define our Layout directly inside the route component. Todos in this case acts
	like a Layout component).
	*/
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
