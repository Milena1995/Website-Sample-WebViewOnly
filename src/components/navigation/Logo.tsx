import { Horizontal } from "../../layout/layout";
import { H2Bold } from "../Text";

import styles from "../../stylesheet/logo.module.scss";

export const Logo = () => (
  <Horizontal className={styles.container}>
    <div className={styles.logo} />
    <H2Bold>
      <a href="/home" className={styles.text}>
        Buildit
      </a>
    </H2Bold>
  </Horizontal>
);

Logo.displayName = "Logo";
