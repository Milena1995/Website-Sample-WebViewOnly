import { Button } from "app-studio";
import { Horizontal } from "src/layout/layout";

import style from "src/stylesheet/about/aboutPage.module.scss";
import { H2Bold } from "./Text";

export const ContactTile = (props: any) => {
  return (
    <Horizontal className={style.call_us} {...props}>
      <H2Bold color="#486A6F"> Call us</H2Bold>
      <Horizontal id={style.btns}>
        <Button
          className={style.btn}
          onClick={() => {
            window.location.href = "tel:+23059388728";
          }}
        >
          <strong color={"white"}>Call</strong>
        </Button>

        <Button
          className={style.btn}
          backgroundColor="#C6DBFF"
          onClick={() => {
            window.location.href = "mailto: mariemilenalaipoon1995@gmail.com";
          }}
        >
          <strong color={"white"}>Email</strong>
        </Button>
      </Horizontal>
    </Horizontal>
  );
};
