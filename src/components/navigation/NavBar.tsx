import { Button } from "app-studio";
import { useNavigate } from "react-router-dom";

import { Horizontal } from "src/layout/layout";
import { Logo } from "src/components/navigation/Logo";
import { Menu } from "src/components/navigation/Menu";
import { H3Bold } from "src/components/Text";

import btnStyle from "src/stylesheet/button.module.scss";

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
