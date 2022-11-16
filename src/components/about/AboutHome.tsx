import { View } from "app-studio";
import { Horizontal, Vertical } from "src/layout/layout";
import { NavBar } from "src/components/navigation/NavBar";
import { H3Medium, H2lBold } from "../Text";

import style from "src/stylesheet/about/aboutPage.module.scss";

export const AboutHome = () => {
  return (
    <section id={style.about_home}>
      <NavBar />
      <Horizontal id={style.about_home_content}>
        <View className={style.img_container}>
          <img
            className={style.about_img1}
            src={require("src/assets/images/image_3.jpg")}
            alt={""}
          />
          <img
            className={style.about_img2}
            src={require("src/assets/images/image_4.jpg")}
            alt={""}
          />
        </View>
        <Vertical className={style.about_information}>
          <H3Medium color="#5BCCDE">About us</H3Medium>
          <H2lBold marginVertical={20} color="#486A6F">
            Owner and investor with a reputation
          </H2lBold>
          <H3Medium color="#678C92">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </H3Medium>
        </Vertical>
      </Horizontal>
    </section>
  );
};
