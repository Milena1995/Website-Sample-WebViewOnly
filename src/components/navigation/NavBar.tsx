import { Button } from "app-studio";
import { useNavigate } from "react-router-dom";

import { Horizontal } from "../../layout/layout";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { H3Bold } from "../Text";

import btnStyle from "../../stylesheet/button.module.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Horizontal width={"100%"} justifyContent={"space-between"}>
      <Logo />
      <Menu />
      <Button
        className={btnStyle.btn_text}
        onClick={() => {
          navigate("/project");
        }}
      >
        <H3Bold>Need a project ?</H3Bold>
      </Button>
    </Horizontal>
  );
};
