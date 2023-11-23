import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "styles/Layout.css";
import headerLogo from "assets/header_logo.svg";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { HeaderData } from "app/mock/header";
import { Accordion } from "app/components/Accordion";
import { useOutsideClick } from "lib/hooks/useOutsideClick";

export const Header = () => {
  const navRef = useRef(null);
  const [active, setActive] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  const handleClick = (i) => {
    setSelected(i);
  };

  useOutsideClick(navRef, active, () => {
    setActive(false);
  });

  return (
    <>
      <header ref={navRef} className="header">
        <div className="container-fluid">
          <div className="nav-colums">
            <div className="nav-left">
              <Link to={"/"}>
                <img src={headerLogo} alt="logo" className="logo" />
              </Link>
              <div className="d-flex position-relative search_input">
                <input type="text" placeholder="Search" />
                <div className="position-absolute top-50 end-0 translate-middle-y search_icon">
                  <Search />
                </div>
              </div>
              <div className="search_icon_md">
                <div onClick={() => setOpenInput(true)} className="full_search">
                  <Search />
                </div>
                <div
                  onClick={() => setOpenInput(false)}
                  className={`close_Icon ${openInput ? "d-block" : "d-none"}`}
                >
                  <X />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className={`${openInput ? "full_input" : "input_none"}`}
                />
              </div>
            </div>
            <div className="nav-right">
              <ul className={`${active ? "nav_active" : ""} nav-ri-ul`}>
                {HeaderData?.map((data, i) => {
                  return (
                    <li
                      className="nav-right-li"
                      onMouseEnter={
                        data?.menu
                          ? () => {
                              setOpen(true);
                              handleClick(i);
                            }
                          : null
                      }
                      onMouseLeave={
                        data?.menu
                          ? () => {
                              setOpen(false);
                              handleClick(-1);
                            }
                          : null
                      }
                      key={data?.id}
                    >
                      <Link to={data?.slug}>
                        {data?.name}{" "}
                        {data?.menu && (
                          <span>
                            <ChevronDown
                              style={{
                                transform:
                                  i === selected && open
                                    ? "rotate(180deg)"
                                    : "rotate(0)",
                                transition: "0.5s ease-in-out",
                              }}
                            />
                          </span>
                        )}
                      </Link>
                      {data?.menu && (
                        <div className="dropdown">
                          <ul
                            className={`dropdown__list ${
                              open ? "dropdown__list--active" : ""
                            }`}
                          >
                            {i === selected &&
                              data?.menu?.map((menu, i) => {
                                return (
                                  <li
                                    key={i}
                                    className={`dropdown__list-item `}
                                  >
                                    {menu?.name}
                                    {menu?.catalogItems && (
                                      <ul className="acc_types accordion accordion-flush">
                                        {menu?.catalogItems?.map((elm) => {
                                          return (
                                            <li key={elm?.id}>
                                              <Accordion
                                                heading={elm?.categoryName}
                                                accId={elm?.id}
                                                extraClass="acc_bg"
                                              >
                                                <div className="accordion-body acc_bdy">
                                                  {elm?.category &&
                                                    elm?.category?.map(
                                                      (category) => {
                                                        return (
                                                          <Accordion
                                                            heading={
                                                              category?.categoryItemName
                                                            }
                                                            extraClass="acc_bdy_bg"
                                                            key={category?.id}
                                                            accId={category?.id}
                                                          >
                                                            {category?.inputValue &&
                                                              category?.inputValue?.map(
                                                                (data) => {
                                                                  return (
                                                                    <div
                                                                      key={
                                                                        data?.id
                                                                      }
                                                                      className="accordion-body acc_bdy_1"
                                                                    >
                                                                      <div className="form-check">
                                                                        <input
                                                                          className="form-check-input input_acc_check"
                                                                          type="checkbox"
                                                                          id={
                                                                            data?.id
                                                                          }
                                                                        />
                                                                        <label
                                                                          className="form-check-label acc_input_label"
                                                                          htmlFor={
                                                                            data?.id
                                                                          }
                                                                        >
                                                                          {
                                                                            data?.value
                                                                          }
                                                                        </label>
                                                                      </div>
                                                                    </div>
                                                                  );
                                                                }
                                                              )}
                                                          </Accordion>
                                                        );
                                                      }
                                                    )}
                                                </div>
                                              </Accordion>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
                <li>
                  <button className="contact_btn">Contact Us</button>
                </li>
              </ul>
              <div onClick={() => setActive(!active)} className="hamburgur">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="page"></div>
    </>
  );
};
