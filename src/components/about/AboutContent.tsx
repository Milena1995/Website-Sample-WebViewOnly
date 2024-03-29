import { Button } from "app-studio";
import { Horizontal, Vertical } from "../../layout/layout";
import { H2lBold, H3Medium } from "../Text";

import { useNavigate } from "react-router-dom";

import { ReactComponent as Infinity } from "src/assets/svg/Infinity.svg";
import { ReactComponent as FingerPrint } from "src/assets/svg/FingerPrint.svg";
import { ReactComponent as IpsumLogo } from "src/assets/svg/Ipsum.svg";
import { ReactComponent as NLogo } from "src/assets/svg/NLogo.svg";
import { ReactComponent as DotsLogo } from "src/assets/svg/ThreeDots.svg";

import btnStyle from "src/stylesheet/button.module.scss";
import style from "src/stylesheet/about/about.module.scss";

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
        {logos.map((logo, index: number) => (
          <div key={index}>{logo}</div>
        ))}
      </Horizontal>
      <Horizontal className={style.about_main}>
        <img
          width={500}
          height={375}
          src={"../../assets/images/image_1.jpg"}
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
