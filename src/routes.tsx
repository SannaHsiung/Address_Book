import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import User from "./User";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/:id", element: <User /> },
]);

export default router;
