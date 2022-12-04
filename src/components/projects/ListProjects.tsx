import { View } from "app-studio";

import { Vertical } from "src/layout/layout";
import { ContactTile } from "src/components/contact/ContactTile";

import { H2lBold, H3Bold } from "../Text";
import { ProjectTile } from "./ProjectTile";

import style from "src/stylesheet/projects/projects.module.scss";
import { useState } from "react";
import { Images } from "./Images";

export const ListProjects = () => {
  let [displayNo, setDisplayNo] = useState<number>(6);
  const hasMore = Images.length > displayNo;

  return (
    <section id={style.project_team}>
      <Vertical className={style.projects_container}>
        <H2lBold color="#486A6F" paddingBottom={40}>
          Our projects
        </H2lBold>
        <View className={style.project_container}>
          {Images.map((image, index) => (
            <>
              {displayNo > index && (
                <ProjectTile
                  key={image.id}
                  img={image.img}
                  name={image.name}
                  job={image.job}
                />
              )}
            </>
          ))}
        </View>
        {hasMore && (
          <button
            className={style.more_btn}
            onClick={() => setDisplayNo(displayNo + 6)}
          >
            <H3Bold>More</H3Bold>
          </button>
        )}
        <ContactTile />
      </Vertical>
    </section>
  );
};
