import { Button, View } from "app-studio";

import {
  H2Bold,
  H2lBold,
  H3Bold,
  H3Medium,
  StatisticLabel,
  StatisticValue,
} from "src/components/Text";
import { Horizontal, Vertical } from "src/layout/layout";
import { PageLayout } from "src/layout/pageLayout";
import { ReactComponent as Infinity } from "src/assets/svg/Infinity.svg";
import { ReactComponent as FingerPrint } from "src/assets/svg/FingerPrint.svg";
import { ReactComponent as IpsumLogo } from "src/assets/svg/Ipsum.svg";
import { ReactComponent as NLogo } from "src/assets/svg/NLogo.svg";
import { ReactComponent as DotsLogo } from "src/assets/svg/ThreeDots.svg";
import { ReactComponent as Location } from "src/assets/svg/Location.svg";
import { ReactComponent as House } from "src/assets/svg/House.svg";
import { ReactComponent as Colaboration } from "src/assets/svg/Colaboration.svg";
import { NavBar } from "src/components/navigation/NavBar";

import style from "src/stylesheet/about/aboutPage.module.scss";

const AboutPage = () => {
  const logos = [
    <Infinity />,
    <FingerPrint />,
    <NLogo />,
    <DotsLogo />,
    <IpsumLogo />,
  ];

  return (
    <PageLayout>
      <section id={style.about_home}>
        <NavBar />
        <Horizontal id={style.about_home_content}>
          <View className={style.img_container}>
            <img
              className={style.about_img1}
              src={require("src/assets/images/image_3.jpg")}
              alt={""}
            />
            <img
              className={style.about_img2}
              src={require("src/assets/images/image_4.jpg")}
              alt={""}
            />
          </View>
          <Vertical className={style.about_information}>
            <H3Medium color="#5BCCDE">About us</H3Medium>
            <H2lBold marginVertical={20} color="#486A6F">
              Owner and investor with a reputation
            </H2lBold>
            <H3Medium color="#678C92">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </H3Medium>
          </Vertical>
        </Horizontal>
      </section>
      <section id={style.about_statistics}>
        <Vertical className={style.stats_container}>
          <H3Medium id={style.stats_title}>Statistics</H3Medium>
          <H2lBold id={style.stats_subTitle}>Development in numbers</H2lBold>
          <Horizontal id={style.stats_number_container}>
            <Horizontal className={style.stats_content}>
              <View className={style.logo}>
                <Location />
              </View>
              <Vertical className={style.stats_number}>
                <StatisticValue> {">"} 200</StatisticValue>
                <StatisticLabel>Number</StatisticLabel>
              </Vertical>
            </Horizontal>
            <Horizontal
              className={`${style.stats_content} ${style.stats_number_border}`}
            >
              <View className={style.logo}>
                <House />
              </View>
              <Vertical className={style.stats_number}>
                <StatisticValue> {">"} 70</StatisticValue>
                <StatisticLabel>Number</StatisticLabel>
              </Vertical>
            </Horizontal>
            <Horizontal className={style.stats_content}>
              <View className={style.logo}>
                <Colaboration />
              </View>
              <Vertical className={style.stats_number}>
                <StatisticValue> {">"} 20</StatisticValue>
                <StatisticLabel>Number</StatisticLabel>
              </Vertical>
            </Horizontal>
          </Horizontal>
          <Horizontal className={style.about_logos}>
            {logos.map((logo) => (
              <View>{logo}</View>
            ))}
          </Horizontal>
        </Vertical>
      </section>
      <section id={style.about_team}>
        <Vertical
          paddingBottom={131}
          backgroundColor={"blue"}
          width="100%"
          height="100%"
        >
          <H3Medium>Our Team</H3Medium>
          <H2lBold>Let's meet</H2lBold>
          <Vertical>
            <Vertical
              padding={64}
              filter="drop-shadow(0px 30px 60px rgba(59, 130, 246, 0.25))"
              height={350}
              width={300}
            >
              <H3Bold>Name Surname</H3Bold>
              <H3Medium>Worker</H3Medium>
            </Vertical>
            <hr />
            <Horizontal>
              <H2Bold>Call us</H2Bold>
              <Button
                borderRadius={3}
                background="linear-gradient(104.26deg, rgba(67, 151, 164, 0.2) 0.88%, rgba(91, 204, 222, 0.2) 99.89%), #4397A4"
              >
                Call
              </Button>
              <Button backgroundColor="#C6DBFF" borderRadius={3}>
                Email
              </Button>
            </Horizontal>
          </Vertical>
        </Vertical>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
