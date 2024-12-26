import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";
import AddArtifact from "../Pages/AddArtifact";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import ArtifactDetails from "../Pages/Home/ArtifactDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "all-artifacts",
        element: (
          <PrivateRouter>
            <AllArtifacts></AllArtifacts>
          </PrivateRouter>
        ),
      },

      {
        path: "add-artifact",
        element: (
          <PrivateRouter>
            <AddArtifact></AddArtifact>
          </PrivateRouter>
        ),
      },

      {
        path: "/artifactDetails/:id",
        element: <ArtifactDetails></ArtifactDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts_collection/${params.id}`),
      },
    ],
  },
]);
export default router;
