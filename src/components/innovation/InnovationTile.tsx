import { View } from "app-studio";
import { Vertical } from "../../layout/layout";

import { H2Bold, H3Medium } from "../Text";

import iconStyle from "../../stylesheet/innovationTile.module.scss";

export const InnovationTile = ({
  icon,
  text,
  subText,
}: {
  icon: any;
  text: string;
  subText: string;
}) => {
  return (
    <Vertical padding={50}>
      <View className={iconStyle.icon}>{icon}</View>
      <H2Bold margin={"20px 0 10px"}>{text}</H2Bold>
      <H3Medium color={"#678C92"}>{subText}</H3Medium>
    </Vertical>
  );
};
