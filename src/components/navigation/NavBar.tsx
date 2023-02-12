import { Button } from "app-studio";
import { useNavigate } from "react-router-dom";

import { Horizontal } from "src/layout/layout";
import { Logo } from "src/components/navigation/Logo";
import { Menu } from "src/components/navigation/Menu";
import { H3Bold } from "src/components/Text";

import styles from "src/stylesheet/navigation.module.scss";
import btnStyle from "src/stylesheet/button.module.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Horizontal className={styles.nav_container}>
      <Logo />
      <Menu />
      <Button
        className={btnStyle.btn_text}
        onClick={() => {
          navigate("/projects");
        }}
      >
        <H3Bold>Need a project ?</H3Bold>
      </Button>
    </Horizontal>
  );
};

NavBar.displayName = "NavBar";
