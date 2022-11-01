import { View } from "app-studio";

import { NavBar } from "../components/navigation/NavBar";
import { HomeContent } from "../components/HomeContent";
import { InnovationContent } from "../components/innovation/InnovationContent";
import { AboutContent } from "../components/About";
import { PropertiesContent } from "../components/PropertiesContent";
import { SocialsContent } from "../components/SocialsContent";
import { ContactContent } from "../components/contact/ContactContent";

import style from "../stylesheet/home/home.module.scss";

const HomePage = () => {
  return (
    <View id={style.container}>
      <section id={style.home}>
        <NavBar />
        <HomeContent />
      </section>
      <section id={style.innovation}>
        <InnovationContent />
      </section>
      <section id={style.about}>
        <AboutContent />
      </section>
      <section id={style.properties}>
        <PropertiesContent />
      </section>
      <section id={style.socials}>
        <SocialsContent />
      </section>
      <section id={style.contact}>
        <ContactContent />
      </section>
    </View>
  );
};

export default HomePage;
