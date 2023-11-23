import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CompountProducts } from "app/mock/catalog/Compound";
import { Pagination } from "../Ui/Pagination";

import "styles/Catalog.css";
import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";

export const CatalogMainCard = () => {
  const navigate = useNavigate();
  const countPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * countPerPage;
  const endIndex = startIndex + countPerPage;

  const updatePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="row">
        {CompountProducts?.slice(startIndex, endIndex)?.map((compounts, i) => {
          return (
            <div key={i} className="col-md-6 ">
              <div className="catalog_main_bg">
                <div className="row">
                  <div className="col-sm-6  col-md-12 col-xl-6">
                    <div className="compount_img">
                      <img src={compounts?.img} alt="catalogImg" />
                    </div>
                    {compounts?.productSubDetails?.length >= 1 && (
                      <div className="compount_img_details">
                        <ul>
                          {compounts?.productSubDetails?.map(
                            (subDetails, i) => {
                              return (
                                <li key={i}>
                                  <p className="detail_type">
                                    {subDetails?.type}
                                  </p>
                                  <p className="detail_desc">
                                    {subDetails?.details}
                                  </p>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="col-sm-6  col-md-12 col-xl-6">
                    <div className="catalog_content catalog_main_content">
                      <p className="mt-0">{compounts?.description}</p>
                      <div className="d-flex justify-content-between cata_main_mrt">
                        <select>
                          <option value="1">1g-81$</option>
                          <option value="2">2g-82$</option>
                          <option value="3">3g-83$</option>
                        </select>
                        {compounts?.inStock ? (
                          <div className="d-flex align-items-center stock">
                            <img src={inStock} alt="stock" />
                            <span style={{ color: "#1aa338" }}>In Stock</span>
                          </div>
                        ) : (
                          <div className="d-flex align-items-center stock">
                            <img src={outStock} alt="stock" />
                            <span style={{ color: "#FC0D1B" }}>
                              Out of stock
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="order_btn">
                        {compounts?.inStock ? (
                          <AddtoCart />
                        ) : (
                          <button className="add_to_cart">Make Inquiry</button>
                        )}
                        <Link to={`/catalog/${i}`} className="cstm_mrg">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        total={CompountProducts?.length}
        current={currentPage}
        pageSize={countPerPage}
        onChange={updatePage}
        nextIcon="next"
        prevIcon="previous"
      />
    </>
  );
};
