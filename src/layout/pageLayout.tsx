import { View } from "app-studio";

import { Footer } from "src/components/Footer";

import style from "src/stylesheet/home/home.module.scss";
import { Vertical } from "./layout";

export const PageLayout = ({ children }: { children: any }) => {
  return (
    <View id={style.container}>
      <Vertical>{children}</Vertical>
      <footer id={style.footer}>
        <Footer />
      </footer>
    </View>
  );
};
