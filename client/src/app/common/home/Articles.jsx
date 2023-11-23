import React from "react";
import { MoveUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { LatestArticles } from "app/mock/home";

import "swiper/css/pagination";

export const Articles = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
    >
      {LatestArticles?.map((article, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="row align-items-center mt-3">
              <div className="col-lg-6">
                <div className="articles_content">
                  <h3>{article?.heading}</h3>
                  <p>{article?.description}</p>
                  <button className="primary_btn_outline d-flex">
                    Read More
                    <span>
                      <MoveUpRight />
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="article_img">
                  <img src={article?.url} alt="articleImg" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
