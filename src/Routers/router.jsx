import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";
import AddArtifact from "../Pages/AddArtifact";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import ArtifactDetails from "../Pages/Home/ArtifactDetails";
import MyArtifacts from "../Pages/MyArtifacts";
import UpdateArtifact from "../Pages/UpdateArtifact";
import LikedArtifactsPage from "../Pages/Home/LikedArtifactsPage";

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
        path: "/my-artifacts",
        element: (
          <PrivateRouter>
            <MyArtifacts></MyArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts></AllArtifacts>,
        loader: () => fetch(`http://localhost:5000/artifacts_collection`),
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
        element: (
          <PrivateRouter>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts_collection/${params.id}`),
      },

      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRouter>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user-addded-artifacts/${params.id}`),
      },

      {
        path: "/liked-artifacts",
        element: (
          <PrivateRouter>
            <LikedArtifactsPage></LikedArtifactsPage>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
