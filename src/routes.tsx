import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import UserPage from "./UserPage";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/:id", element: <UserPage /> },
]);

export default router;
