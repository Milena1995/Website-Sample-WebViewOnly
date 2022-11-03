import { Vertical } from "../layout/layout";
import { H2lBold, H3Medium } from "./Text";

import { View } from "app-studio";

import style from "../stylesheet/socials.module.scss";

export const SocialsContent = () => {
  const images = [
    {
      style: style.img_3,
      src: require("../assets/images/image_3.jpg"),
      alt: "image_3",
    },
    {
      style: style.img_2,
      src: require("../assets/images/image_2.jpg"),
      alt: "image_2",
    },
    {
      style: style.img_3,
      src: require("../assets/images/image_3.jpg"),
      alt: "image_3",
    },
    {
      style: style.img_3,
      src: require("../assets/images/image_3.jpg"),
      alt: "image_3",
    },
    {
      style: style.img_2,
      src: require("../assets/images/image_2.jpg"),
      alt: "image_2",
    },
    {
      style: style.img_3,
      src: require("../assets/images/image_3.jpg"),
      alt: "image_3",
    },
  ];

  return (
    <Vertical alignItems={"center"}>
      <H3Medium color={"#5BCCDE"}>Socials</H3Medium>
      <H2lBold textAlign={"center"} margin={"10px 0 40px"} color={"#486A6F"}>
        On Instagram
      </H2lBold>
      <View className={style.imageTile}>
        {images.map((image, index) => (
          <View key={`${image}${index}`}>
            <img className={image.style} src={image.src} alt={image.alt} />
          </View>
        ))}
      </View>
    </Vertical>
  );
};
