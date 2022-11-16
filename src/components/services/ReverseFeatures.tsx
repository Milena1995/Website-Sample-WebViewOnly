import { View } from "app-studio";
import { Horizontal, Vertical } from "src/layout/layout";
import { H3Medium, H2lBold, H3Bold } from "../Text";
import { ReactComponent as RightArrow } from "src/assets/svg/RightArrow.svg";

import style from "src/stylesheet/features.module.scss";
import { Card } from "./Card";

export const ReserveFeatures = () => {
  return (
    <section id={style.home}>
      <Horizontal id={style.content}>
        <Vertical className={style.information}>
          <H3Medium color="#5BCCDE">Service</H3Medium>
          <H2lBold marginVertical={20} color="#486A6F">
            Featured Listing
          </H2lBold>
          <H3Medium color="#678C92">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci.
          </H3Medium>
          <Horizontal id={style.features_card} marginTop={100}>
            <Card />
            <Card />
          </Horizontal>
          <Horizontal
            gap={20}
            color={"#486A6F"}
            alignSelf={"flex-end"}
            marginTop={"auto"}
            justifyContent={"center"}
            alignItems="center"
          >
            <H3Bold>See All</H3Bold>
            <RightArrow />
          </Horizontal>
        </Vertical>

        <View className={style.img_container}>
          <img
            id={style.img}
            src={require("src/assets/images/image_3.jpg")}
            alt={"imagenotavailable"}
          />
        </View>
      </Horizontal>
    </section>
  );
};
