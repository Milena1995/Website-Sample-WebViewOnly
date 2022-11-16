import { View } from "app-studio";
import { Vertical } from "src/layout/layout";
import { H3Medium, H2lBold } from "../Text";

import style from "src/stylesheet/about/aboutPage.module.scss";
import { TeamProfil } from "./TeamProfile";
import { ContactTile } from "src/components/ContactTile";

export const AboutTeam = () => {
  const profiles = [
    {
      img: "dog.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
  ];
  return (
    <section id={style.about_team}>
      <Vertical className={style.team_container}>
        <H3Medium color="#5BCCDE">Our Team</H3Medium>
        <H2lBold color="#486A6F" paddingBottom={40}>
          Let's meet
        </H2lBold>
        <View className={style.profile_container}>
          {profiles.map((image, index) => (
            <TeamProfil
              key={index}
              img={image.img}
              name={image.name}
              job={image.job}
            />
          ))}
        </View>
        <ContactTile />
      </Vertical>
    </section>
  );
};
