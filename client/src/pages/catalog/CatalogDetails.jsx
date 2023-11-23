import React from "react";

import "styles/Catalog.css";
import { ChevronsRight } from "lucide-react";
import { AddtoCart } from "app/components/Ui/AddtoCart ";

export const CatalogDetails = () => {
  return (
    <div className="catalog__page">
      <div className="catalog_single_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading_single">
            <div className="catalog_banner_content">
              <p>
                Catalogs <ChevronsRight /> (1R,5S,6R)-tert-Butyl
                6-(5-(methylsulfonyl)-1,2,3-thiadiazol-4-yl)-3-azabicyclo[3.1.0]hexane-3-carboxylate
              </p>
              <h1>
                (1R,5S,6R)-tert-Butyl
                6-(5-(methylsulfonyl)-1,2,3-thiadiazol-4-yl)-3-azabicyclo[3.1.0]hexane-3-carboxylate
              </h1>
            </div>
          </div>
          <div className="catalog_details">
            <div className="row">
              <div className="col-lg-6">
                <div className="catalog_detail_img">
                  <img src={require("assets/catalog_img.png")} alt="compount" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="catalog_details_vss">
                  <div className="catalog_details_list">
                    <ul>
                      <li>
                        <p className="detail_type_1">Product Class</p>
                        <p className="detail_desc_1">REAL Compound</p>
                      </li>
                      <li>
                        <p className="detail_type_1">CLogP</p>
                        <p className="detail_desc_1">1.446</p>
                      </li>
                      <li>
                        <p className="detail_type_1">MV</p>
                        <p className="detail_desc_1">107.2</p>
                      </li>
                      <li>
                        <p className="detail_type_1">hbd</p>
                        <p className="detail_desc_1">1</p>
                      </li>
                      <li>
                        <p className="detail_type_1">hba</p>
                        <p className="detail_desc_1">1</p>
                      </li>
                      <li>
                        <p className="detail_type_1">rotb</p>
                        <p className="detail_desc_1">1</p>
                      </li>
                      <li>
                        <p className="detail_type_1">fap3</p>
                        <p className="detail_desc_1">0.1429</p>
                      </li>
                    </ul>
                  </div>
                  <p>
                    This compounds has uses in synthesis of potential drug
                    candidates and as a negative control in biochemicals assays.
                  </p>
                  <div className="catalog_quantity_price">
                    <div className="catalog_options">
                      <h3>Quantity</h3>
                      <select>
                        <option>Choose an option</option>
                        <option value="1">Default Sorting</option>
                        <option value="2">Default Sorting 1</option>
                        <option value="3">Default Sorting 2</option>
                      </select>
                    </div>
                    <div className="catalog_price">
                      <h3>Price</h3>
                      <span>$1,450.00</span>
                    </div>
                  </div>
                  <AddtoCart extra="add_to_cart_btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="information_box">
          <ul>
            <li>Technical Support & Resources</li>
            <li>Shipping & Storage Information</li>
            <li>References & Products Citations</li>
            <li>Technical Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
