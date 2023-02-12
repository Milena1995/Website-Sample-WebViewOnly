import { Footer } from "src/components/Footer";

import { Vertical } from "./layout";

import styles from "src/stylesheet/home/home.module.scss";

export const PageLayout = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
      <Vertical>{children}</Vertical>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

PageLayout.displayName = "PageLayout";
