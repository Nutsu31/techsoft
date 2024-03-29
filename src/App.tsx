import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { publicRoutes } from "./configs/routes.config";
const router = createBrowserRouter([
  { path: "*", Component: Root },
  ...publicRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
