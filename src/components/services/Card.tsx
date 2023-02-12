import { Vertical } from "src/layout/layout";
import { H3Medium, H3Bold } from "../Text";

import style from "src/stylesheet/services/card.module.scss";

export const Card = () => (
  <Vertical id={style.card_container}>
    <H3Bold color={"#486A6F"}>Name</H3Bold>
    <H3Medium color={"#678C92"}>Statistic</H3Medium>
  </Vertical>
);

Card.displayName = "Card";
