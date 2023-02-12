import { Vertical } from "src/layout/layout";

import { H3Bold, H3Medium } from "../Text";
import { Picture } from "./Images";

import style from "src/stylesheet/projects/projects.module.scss";
interface Props {
  image: Picture;
}

export const ProjectTile: React.FC<Props> = ({ image }) => (
  <Vertical className={style.projects_profile}>
    <img
      height={260}
      loading="lazy"
      src={require(`../../assets/images/${image.img}`)}
      alt="team_image"
    />
    <Vertical className={style.project_info}>
      <H3Bold color="#486A6F">{image.name}</H3Bold>
      <H3Medium color="#678C92">{image.job}</H3Medium>
    </Vertical>
  </Vertical>
);

ProjectTile.displayName = "ProjectTile";
