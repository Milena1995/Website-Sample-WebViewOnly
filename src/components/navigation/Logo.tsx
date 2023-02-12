import { Horizontal } from "../../layout/layout";
import { H2Bold } from "../Text";

import style from "../../stylesheet/logo.module.scss";

export const Logo = () => (
  <Horizontal gap={16} alignItems={"center"}>
    <div id={style.logo} />
    <H2Bold>
      <a href="/home" id={style.text}>
        Buildit
      </a>
    </H2Bold>
  </Horizontal>
);

Logo.displayName = "Logo";
