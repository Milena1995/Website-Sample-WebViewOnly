import { Button, View } from "app-studio";
import { Horizontal, Vertical } from "../layout/layout";
import { H2lBold, H3Medium } from "./Text";

import { useNavigate } from "react-router-dom";

import { ReactComponent as Infinity } from "../assets/svg/Infinity.svg";
import { ReactComponent as FingerPrint } from "../assets/svg/FingerPrint.svg";
import { ReactComponent as IpsumLogo } from "../assets/svg/Ipsum.svg";
import { ReactComponent as NLogo } from "../assets/svg/NLogo.svg";
import { ReactComponent as DotsLogo } from "../assets/svg/ThreeDots.svg";

import style from "../stylesheet/about/about.module.scss";
import btnStyle from "../stylesheet/button.module.scss";

export const AboutContent = () => {
  const logos = [
    <Infinity />,
    <FingerPrint />,
    <NLogo />,
    <DotsLogo />,
    <IpsumLogo />,
  ];

  const nagivate = useNavigate();

  return (
    <Vertical className={style.about_container}>
      <Horizontal className={style.about_logos}>
        {logos.map((logo) => (
          <View>{logo}</View>
        ))}
      </Horizontal>
      <Horizontal className={style.about_main}>
        <img
          width={500}
          height={375}
          src={require("../assets/images/image_1.jpg")}
          alt={"image1"}
        />
        <Vertical gap={20} marginLeft={40}>
          <H3Medium color={"#5BCCDE"}>About us</H3Medium>
          <H2lBold color={"#486A6F"}>
            Owner and investor with a reputation
          </H2lBold>
          <H3Medium color={"#678C92"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </H3Medium>
          <Button
            className={btnStyle.btn_explore}
            onClick={() => {
              nagivate("/about");
            }}
          >
            Explore
          </Button>
        </Vertical>
      </Horizontal>
    </Vertical>
  );
};
