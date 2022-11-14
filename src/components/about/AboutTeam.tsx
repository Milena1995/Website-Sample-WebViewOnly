import { Button, View } from "app-studio";
import { Vertical, Horizontal } from "src/layout/layout";
import { H3Medium, H2lBold, H2Bold } from "../Text";

import style from "src/stylesheet/about/aboutPage.module.scss";
import { TeamProfil } from "./TeamProfile";

export const AboutTeam = () => {
  const profiles = [
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
      name: "Name Surname",
      job: "Worker",
    },
    {
      img: "../../assets/images/team.jpg",
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
        <Horizontal className={style.call_us}>
          <H2Bold color="#486A6F"> Call us</H2Bold>
          <Horizontal id={style.btns}>
            <Button
              className={style.btn}
              borderRadius={3}
              background="linear-gradient(104.26deg, rgba(67, 151, 164, 0.2) 0.88%, rgba(91, 204, 222, 0.2) 99.89%), #4397A4"
            >
              <strong>Call</strong>
            </Button>
            <Button
              className={style.btn}
              backgroundColor="#C6DBFF"
              color="#486A6F"
              borderRadius={3}
            >
              <strong>Email</strong>
            </Button>
          </Horizontal>
        </Horizontal>
      </Vertical>
    </section>
  );
};
