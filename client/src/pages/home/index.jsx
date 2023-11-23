import React from "react";
import { Linkedin, MoveRightIcon, Twitter, Youtube } from "lucide-react";

import { ClientsLogo } from "app/mock/home";

import { Services } from "app/common/home/Services";
import { Testimonials } from "app/common/home/Testimonial";
import { Articles } from "app/common/home/Articles";
import { HomeCatalog } from "app/common/home/Home-Catalog";

import "styles/Home.css";

import { HomePageImages } from "app/images";

export const Home = () => {
  return (
    <div className="home_page">
      <div className="home_banner">
        <div className="container-fluid">
          <div className="banner_content">
            <p>Welcome to aapharmasyn</p>
            <h1>For our customers across industries and geographies</h1>
            <button className="primary_buttton">Get a Quote</button>
          </div>
          <div className="home_banner_social">
            <ul>
              <li>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <Youtube />
                </a>
              </li>
              <li>
                <a href="#">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company_misson">
        <div className="container-fluid">
          <div className="row  align-items-center">
            <div className="col-lg-6 col-xl-6">
              <img
                src={HomePageImages?.MISSION_MAIN}
                alt="our-mission"
                className="mission_img"
              />
            </div>
            <div className="col-lg-6  col-xl-6">
              <div className="mission_content">
                <h2>Company Mission</h2>
                <p>
                  Since 2006 we strive to provide superior synthetic chemistry
                  services to global and regional pharmaceutical and
                  biotechnology clients. We are steadfast in bringing
                  unparalleled level of creativity and ingenuity to enable
                  access to biologically active, complex molecular structures
                  that can lead to discovery of breakthrough therapies.
                </p>
                <p>
                  AAPharmaSyn celebrates customer centric culture and empowers
                  all employees to enhance customerexperience. In engaging
                  AAPharmaSyn our customers can always expect:
                </p>
              </div>
              <div className="misson_icon">
                <div className="mission_icon_box">
                  <img src={HomePageImages?.MISSION_ICON_1} alt="icon1" />
                  <p>
                    Impeccable <br /> Communication
                  </p>
                </div>
                <div className="mission_icon_box">
                  <img src={HomePageImages?.MISSION_ICON_2} alt="icon1" />
                  <p>
                    Relentless <br /> Execution
                  </p>
                </div>
                <div className="mission_icon_box">
                  <img src={HomePageImages?.MISSION_ICON_3} alt="icon1" />
                  <p>
                    Unbounded <br /> Creativity
                  </p>
                </div>
              </div>
              <button className="primary_buttton btn_mrg">
                Company Mission
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="our_services">
        <div className="sevices_bg">
          <div className="container-fluid">
            <div className="services_content ">
              <h2>Our Services</h2>
              <p>
                We offer our customers a broad range of services which include
                synthesis of complex, novel, and commercially unavailable
                compounds as well as optimization of synthetic routes and supply
                of specialty chemicals.
              </p>
              <Services />
              <div className="service_btn">
                <button className="primary_btn_outline d-flex align-items-center">
                  View All
                  <span>
                    <MoveRightIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <HomeCatalog />
      </div>
      <div className="our_vision">
        <div className="vision_banner">
          <div className="container">
            <div className="vision_content">
              <h2>Our Vision</h2>
              <p>
                Chemistry at the heart of solutions to responsible, humane and
                sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="latest_articles">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
            <div className="articles_head">
              <h2>Latest Articles</h2>
              <p>
                We consistently challenge our assumptions and beliefs in order
                to foster professional and personal growth. To that end we
                summarize our thinking in the series of white papers designed to
                inform and generate constructive discussions.
              </p>
            </div>
            <button className="primary_buttton">Additional Papers</button>
          </div>
          <Articles />
        </div>
      </div>
      <div className="clients">
        <h2>Current and legacy clients</h2>
        <div className="container">
          <div className="clients_logo">
            {ClientsLogo?.map((logo, i) => {
              return <img key={i} src={logo?.url?.default} alt="clients" />;
            })}
          </div>
        </div>
      </div>
      <div className="testimonials_section">
        <Testimonials />
      </div>
    </div>
  );
};
