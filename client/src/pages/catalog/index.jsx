import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { CatalogFilter } from "app/mock/catalog";

import "styles/Catalog.css";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { CatalogMainCard } from "app/components/CatalogCard/CatalogMainCard";

export const Catalog = () => {
  const catalogRef = useRef(null);
  const [openCatalogFilter, setOpenCatalogFilter] = useState(false);
  const [filterNo, setFilterNo] = useState(-1);

  useOutsideClick(catalogRef, openCatalogFilter, () => {
    setOpenCatalogFilter(false);
  });

  return (
    <div className="catalog_page">
      <div className="catalog_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading">
            <h1>Catalogs</h1>
            <div className="catalog_filter_outer">
              <div className=" catalog_inner">
                <div className="filter_left">
                  <ul ref={catalogRef} className="filter_left-list">
                    {CatalogFilter?.map((catalogData) => {
                      return (
                        <li
                          key={catalogData?.id}
                          onClick={() => {
                            setOpenCatalogFilter(
                              catalogData?.id === filterNo
                                ? !openCatalogFilter
                                : true
                            );
                            setFilterNo(catalogData?.id);
                          }}
                          className="d-flex align-items-center"
                        >
                          {catalogData?.name}
                          <span>
                            <ChevronDown />
                          </span>
                          {catalogData?.menu?.length >= 1 && (
                            <div
                              className={`inner_filter_dropdown ${
                                filterNo === catalogData?.id &&
                                openCatalogFilter
                                  ? "inner_filter_dropdown--active"
                                  : ""
                              }`}
                            >
                              <ul className="inner_list">
                                {catalogData?.menu?.map((data, i) => {
                                  return (
                                    <li key={i}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input "
                                          type="checkbox"
                                          id={data?.subMenuFilter}
                                        />
                                        <label
                                          className="form-check-label "
                                          htmlFor={data?.subMenuFilter}
                                        >
                                          {data?.subMenuFilter}
                                        </label>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="filter_right">
                  <button className="primary_buttton">Draw Structure</button>
                  <select>
                    <option value="1">Default Sorting</option>
                    <option value="2">Default Sorting 1</option>
                    <option value="3">Default Sorting 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="catalog_main_card">
        <div className="container-fluid">
          <CatalogMainCard />
        </div>
      </div>
    </div>
  );
};
