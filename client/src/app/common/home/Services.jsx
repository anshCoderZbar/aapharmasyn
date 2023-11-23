import React, { useEffect, useState } from "react";

import { HomePageImages } from "app/images";

export const Services = () => {
  const [hover, setHover] = useState(1);
  const [servideBg, setServiceBg] = useState(HomePageImages?.SERVICE_IMG_1);
  const [icon, setIcon] = useState(HomePageImages?.SERVICE_ICON_1);
  useEffect(() => {
    if (hover === 1) {
      setServiceBg(HomePageImages?.SERVICE_IMG_1);
      setIcon(HomePageImages?.SERVICE_ICON_1);
    } else if (hover === 2) {
      setServiceBg(HomePageImages?.SERVICE_IMG_2);
      setIcon(HomePageImages?.SERVICE_ICON_2);
    } else if (hover === 3) {
      setServiceBg(HomePageImages?.SERVICE_IMG_3);
      setIcon(HomePageImages?.SERVICE_ICON_3);
    } else if (hover === 4) {
      setServiceBg(HomePageImages?.SERVICE_IMG_4);
      setIcon(HomePageImages?.SERVICE_ICON_4);
    } else if (hover === 5) {
      setServiceBg(HomePageImages?.SERVICE_IMG_5);
      setIcon(HomePageImages?.SERVICE_ICON_5);
    } else if (hover === 6) {
      setServiceBg(HomePageImages?.SERVICE_IMG_6);
      setIcon(HomePageImages?.SERVICE_ICON_6);
    }
  }, [hover]);

  return (
    <>
      <div className="service_card">
        <ul>
          <li
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Custom Chemical Synthesis
          </li>
          <li
            onMouseOver={() => {
              setHover(2);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Chemical <br /> Manufacturing
          </li>
          <li
            onMouseOver={() => {
              setHover(3);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Medicinal <br /> Chemistry
          </li>
          <li
            onMouseOver={() => {
              setHover(4);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Process <br /> Development
          </li>
          <li
            onMouseOver={() => {
              setHover(5);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Consulting
          </li>
          <li
            onMouseOver={() => {
              setHover(6);
            }}
            onMouseLeave={() => {
              setHover(1);
            }}
          >
            Inventory <br /> Management
          </li>
        </ul>
      </div>

      <div className="service_img">
        <div className="position-relative vs_jj">
          <img src={servideBg} alt="service_bg" />
          <div className="position-absolute service_icon">
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
