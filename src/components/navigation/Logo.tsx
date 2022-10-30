import { View } from "app-studio";

import { Horizontal } from "../../layout/layout";
import { H2Bold } from "../Text";

import style from "../../stylesheet/logo.module.scss";

export const Logo = () => {
  return (
    <Horizontal gap={16} alignItems={"center"}>
      <View id={style.logo} />
      <H2Bold>
        <a href="/home" id={style.text}>
          Buildit
        </a>
      </H2Bold>
    </Horizontal>
  );
};
