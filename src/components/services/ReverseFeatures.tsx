import { useNavigate } from "react-router-dom";

import { Horizontal, Vertical } from "src/layout/layout";

import { ReactComponent as RightArrow } from "src/assets/svg/RightArrow.svg";

import { Card } from "./Card";
import { H3Medium, H2lBold, H3Bold } from "../Text";

import style from "src/stylesheet/features.module.scss";

export const ReserveFeatures = () => {
  const navigate = useNavigate();
  return (
    <section id={style.home}>
      <Horizontal id={style.content}>
        <Vertical className={style.information}>
          <H3Medium color="#5BCCDE">Service</H3Medium>
          <H2lBold id={style.subTitle}>Featured Listing</H2lBold>
          <H3Medium color="#678C92">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci.
          </H3Medium>
          <Horizontal id={style.features_card}>
            <Card />
            <Card />
          </Horizontal>
          <Horizontal id={style.see_all}>
            <H3Bold
              id={style.see_all_text}
              onClick={() => navigate("/services")}
            >
              See All
            </H3Bold>
            <RightArrow
              id={style.see_all_arrow}
              onClick={() => navigate("/services")}
            />
          </Horizontal>
        </Vertical>
        <div className={style.img_container}>
          <img
            id={style.img}
            src={require("src/assets/images/image_3.jpg")}
            alt={"imagenotavailable"}
          />
        </div>
      </Horizontal>
    </section>
  );
};

ReserveFeatures.displayName = "Reserve Features";
