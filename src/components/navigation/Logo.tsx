import { View } from "app-studio";
import { Horizontal } from "../../layout/layout";
import style from "../../stylesheet/logo.module.scss";

export const Logo = () => {
  return (
    <Horizontal gap={16} alignItems={"center"}>
      <View id={style.logo} />
      <View>
        <a href="/home" id={style.text}>
          Buildit
        </a>
      </View>
    </Horizontal>
  );
};
