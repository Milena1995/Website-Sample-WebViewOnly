import { Horizontal } from "../../layout/layout";
import { Button } from "../Button";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import style from "../../stylesheet/button.module.scss";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Horizontal width={"100%"} justifyContent={"space-between"}>
      <Logo />
      <Menu />
      <Button
        className={style.button_text}
        onClick={() => {
          navigate("/project");
        }}
      >
        Need a project ?
      </Button>
    </Horizontal>
  );
};
