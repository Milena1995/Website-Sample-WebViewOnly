import { View } from "app-studio";

import { Vertical, Horizontal } from "src/layout/layout";
import { H3Medium, IconListValue } from "../Text";

import { ReactComponent as Phone } from "src/assets/svg/Phone.svg";
import { ReactComponent as Mail } from "src/assets/svg/Mail.svg";

import style from "../../stylesheet/icons.module.scss";

export const ContactDetails = () => {
  const sizeIcon = {
    width: 30,
    height: 30,
  };
  const icons = [
    {
      icon: <Phone {...sizeIcon} />,
      text: "Tel",
      detail: "708-790-0000",
    },
    {
      icon: <Mail {...sizeIcon} />,
      text: "Email",
      detail: "sales@buildit.site",
    },
    {
      icon: <Mail {...sizeIcon} />,
      text: "Office",
      detail: "60 Manor Station St. Fairport, NY 14450",
    },
  ];
  return (
    <Vertical gap={30} color={"#486A6F"}>
      {icons.map((icon, index) => (
        <Horizontal key={`${index}${icon}`} gap={35}>
          <View className={style.icons}>{icon.icon}</View>
          <Vertical>
            <H3Medium> {icon.text}</H3Medium>
            <IconListValue> {icon.detail}</IconListValue>
          </Vertical>
        </Horizontal>
      ))}
    </Vertical>
  );
};
