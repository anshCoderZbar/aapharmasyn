import React from "react";
import { PublicRoutes } from "./public";
import { Home } from "pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog } from "pages/catalog";
import { CatalogDetails } from "pages/catalog/CatalogDetails";
import AutoScroll from "app/components/Ui/AutoScroll";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <AutoScroll>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Home />
              </PublicRoutes>
            }
          />
          <Route
            path="/catalog"
            element={
              <PublicRoutes>
                <Catalog />
              </PublicRoutes>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <PublicRoutes>
                <CatalogDetails />
              </PublicRoutes>
            }
          />
        </Routes>
      </AutoScroll>
    </BrowserRouter>
  );
};
