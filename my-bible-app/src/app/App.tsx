import { RouterProvider } from "react-router-dom";
import "../app/styles/App.scss";
import { router } from "./providers/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
