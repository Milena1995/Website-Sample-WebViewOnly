import { useNavigate } from "react-router-dom";
import { Button } from "app-studio";

import { Horizontal, Vertical } from "src/layout/layout";
import { H2lBold, H3Medium } from "../Text";

import style from "src/stylesheet/properties.module.scss";
import btnStyle from "src/stylesheet/button.module.scss";

export const PropertiesContent = () => {
  const navigate = useNavigate();

  const firstImgList = [
    {
      style: style.img_4,
      src: require("src/assets/images/image_4.jpg"),
      alt: "image_4",
    },
    {
      style: style.img_2,
      src: require("src/assets/images/image_2.jpg"),
      alt: "image_2",
    },
  ];

  const secondImgList = [
    {
      style: style.img_1,
      src: require("src/assets/images/image_1.jpg"),
      alt: "image_1",
    },
    {
      style: style.img_5,
      src: require("src/assets/images/image_5.jpg"),
      alt: "image_5",
    },
  ];

  return (
    <Horizontal>
      <Vertical flex={1} justifyContent={"center"}>
        <H3Medium color={"#5BCCDE"}>Available Properties</H3Medium>
        <H2lBold className={style.title}>Featured Listing</H2lBold>
        <H3Medium className={style.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
          sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
          rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
          ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
          Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
          viverra vel ultrices in, congue sed ex.
        </H3Medium>
        <Button
          className={btnStyle.btn_explore}
          onClick={() => navigate("/about")}
        >
          Explore
        </Button>
      </Vertical>
      <Vertical flex={1} marginLeft={50}>
        <Horizontal alignItems={"center"} gap={20}>
          {firstImgList.map((image, index) => (
            <div key={`${image}${index}`}>
              <img className={image.style} src={image.src} alt={image.alt} />
            </div>
          ))}
        </Horizontal>
        <Horizontal gap={25} marginTop={30} padding={"0 30px"}>
          {secondImgList.map((image, index) => (
            <div key={`${image}${index}`}>
              <img className={image.style} src={image.src} alt={image.alt} />
            </div>
          ))}
        </Horizontal>
      </Vertical>
    </Horizontal>
  );
};
