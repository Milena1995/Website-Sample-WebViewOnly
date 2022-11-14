import { View } from "app-studio";
import { Horizontal } from "src/layout/layout";

import { ReactComponent as Infinity } from "src/assets/svg/Infinity.svg";
import { ReactComponent as FingerPrint } from "src/assets/svg/FingerPrint.svg";
import { ReactComponent as IpsumLogo } from "src/assets/svg/Ipsum.svg";
import { ReactComponent as NLogo } from "src/assets/svg/NLogo.svg";
import { ReactComponent as DotsLogo } from "src/assets/svg/ThreeDots.svg";

import style from "src/stylesheet/about/aboutPage.module.scss";

export const AllLogos = () => {
  const logos = [
    <Infinity />,
    <FingerPrint />,
    <NLogo />,
    <DotsLogo />,
    <IpsumLogo />,
  ];

  return (
    <Horizontal className={style.about_logos}>
      {logos.map((logo) => (
        <View>{logo}</View>
      ))}
    </Horizontal>
  );
};
