import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./Routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import LikedArtifactsProvider from "./context/LikedArtifactsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikedArtifactsProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LikedArtifactsProvider>
  </StrictMode>
);
