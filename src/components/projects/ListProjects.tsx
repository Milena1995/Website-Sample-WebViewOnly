import { useState } from "react";

import { Vertical } from "src/layout/layout";
import { ContactTile } from "src/components/contact/ContactTile";

import { H2lBold, H3Bold } from "../Text";
import { ProjectTile } from "./ProjectTile";
import { Images } from "./Images";

import styles from "src/stylesheet/projects/projects.module.scss";

export const ListProjects = () => {
  const [displayNo, setDisplayNo] = useState(6);
  const seeMore = Images.length > displayNo;

  const handleClick = () => {
    if (seeMore) setDisplayNo(displayNo + 6);
  };

  return (
    <section id={styles.project_team}>
      <Vertical className={styles.projects_container}>
        <H2lBold className={styles.title}>Our projects</H2lBold>
        <div className={styles.project_container}>
          {Images.slice(0, displayNo).map((image) => (
            <ProjectTile key={image.id} image={image} />
          ))}
        </div>
        {/* To do: change color to grey when disabled */}
        <button className={styles.more_btn} onClick={handleClick}>
          <H3Bold>More</H3Bold>
        </button>
        <ContactTile />
      </Vertical>
    </section>
  );
};

ListProjects.displayName = "Listprojects";
