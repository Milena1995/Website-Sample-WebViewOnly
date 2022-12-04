import { Vertical } from "src/layout/layout";
import { H3Bold, H3Medium } from "../Text";

import style from "src/stylesheet/projects/projects.module.scss";

interface Team {
  img: string;
  name: string;
  job: string;
}
export const ProjectTile = ({ img, name, job, ...props }: Team) => {
  return (
    <Vertical className={style.projects_profile} {...props}>
      <img
        height={260}
        loading="lazy"
        src={require(`../../assets/images/${img}`)}
        alt="team_image"
      />
      <Vertical className={style.project_info}>
        <H3Bold color="#486A6F">{name}</H3Bold>
        <H3Medium color="#678C92">{job}</H3Medium>
      </Vertical>
    </Vertical>
  );
};
