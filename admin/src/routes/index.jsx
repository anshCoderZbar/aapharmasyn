import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { PublicRoute } from "./Public";
import { PrivateRoutes } from "./Private";

import Login from "pages/auth/Login";
import Dashboard from "pages/dashboard";
import { Catalog } from "pages/catalog/Catalog";
import EditCatalog from "pages/catalog/EditCatalog";
import CreateChemical from "pages/chemical-editor/CreateChemical";
import ChemicalPage from "pages/chemical-editor";
import EditChemical from "pages/chemical-editor/EditChemical";
import { CatalogSubMenu } from "pages/catalog/CatalogSubMenu";
import EditSubCatalog from "pages/catalog/EditSubCatalog";
import CatalogSuperSubMenu from "pages/catalog/CatalogSuperSubMenu";
import EditSuperSubCatalog from "pages/catalog/EditSuperSubCatalog";

export const AllRoutes = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL1",
      element: (
        <PrivateRoutes>
          <Catalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL1/:id",
      element: (
        <PrivateRoutes>
          <EditCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL2",
      element: (
        <PrivateRoutes>
          <CatalogSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL2/:id",
      element: (
        <PrivateRoutes>
          <EditSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL3",
      element: (
        <PrivateRoutes>
          <CatalogSuperSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL3/:id",
      element: (
        <PrivateRoutes>
          <EditSuperSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/chemical",
      element: (
        <PrivateRoutes>
          <ChemicalPage />
        </PrivateRoutes>
      ),
    },
    {
      path: "/chemical-editor",
      element: (
        <PrivateRoutes>
          <CreateChemical />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-chemical/:id",
      element: (
        <PrivateRoutes>
          <EditChemical />
        </PrivateRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoute restricted={props?.restricted}>
          <Login />
        </PublicRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
