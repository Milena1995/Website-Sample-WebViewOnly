import { useNavigate } from "react-router-dom";
import { Button, View } from "app-studio";

import { Horizontal, Vertical } from "src/layout/layout";
import { H3Bold, SubTitle, Title } from "src/components/Text";

import style from "src/stylesheet/home/homeContent.module.scss";
import btnStyle from "src/stylesheet/button.module.scss";

export const HomeContent = () => {
  const navigate = useNavigate();

  const firstImgList = [
    {
      style: style.img_4,
      src: require("../assets/images/image_4.jpg"),
      alt: "image_4",
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

  const secondImgList = [
    {
      style: style.img_1,
      src: require("../assets/images/image_1.jpg"),
      alt: "image_1",
    },
    {
      style: style.img_5,
      src: require("../assets/images/image_5.jpg"),
      alt: "image_5",
    },
  ];

  return (
    <Horizontal marginTop={60}>
      <Vertical flex={1} justifyContent={"center"} alignItems={"center"}>
        <Title className={style.title}>Development company</Title>
        <SubTitle className={style.subTitle}>
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </SubTitle>
        <Horizontal paddingTop={100} gap={20} alignSelf={"flex-start"}>
          <Button
            className={btnStyle.btnServices}
            onClick={() => navigate("/services")}
          >
            <H3Bold>Services</H3Bold>
          </Button>
          <Button
            className={btnStyle.btnCompany}
            onClick={() => navigate("/about")}
          >
            <H3Bold>About the Company</H3Bold>
          </Button>
        </Horizontal>
      </Vertical>
      <Vertical flex={1} marginLeft={50}>
        <Horizontal justifyContent={"center"} alignItems={"flex-end"} gap={20}>
          {firstImgList.map((image, index) => (
            <View key={`${image}${index}`}>
              <img className={image.style} src={image.src} alt={image.alt} />
            </View>
          ))}
        </Horizontal>
        <Horizontal gap={25} marginTop={30}>
          {secondImgList.map((image, index) => (
            <View key={`${image}${index}`}>
              <img className={image.style} src={image.src} alt={image.alt} />
            </View>
          ))}
        </Horizontal>
      </Vertical>
    </Horizontal>
  );
};
