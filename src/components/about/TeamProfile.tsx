import { Vertical } from "src/layout/layout";
import { H3Bold, H3Medium } from "../Text";

import style from "src/stylesheet/about/aboutPage.module.scss";

interface Team {
  img: string;
  name: string;
  job: string;
}
export const TeamProfil = ({ img, name, job }: Team) => {
  return (
    <Vertical className={style.teams_profile}>
      <img
        height={260}
        src={require(`../../assets/images/${img}`)}
        alt="team_image"
      />
      <Vertical className={style.team_info}>
        <H3Bold color="#486A6F">{name}</H3Bold>
        <H3Medium color="#678C92">{job}</H3Medium>
      </Vertical>
    </Vertical>
  );
};
