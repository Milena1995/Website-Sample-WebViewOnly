import { View } from "app-studio";

import { NavBar } from "src/components/navigation/NavBar";
import { HomeContent } from "src/components/HomeContent";
import { InnovationContent } from "src/components/innovation/InnovationContent";
import { AboutContent } from "src/components/AboutContent";
import { PropertiesContent } from "src/components/PropertiesContent";
import { SocialsContent } from "src/components/SocialsContent";
import { ContactContent } from "src/components/contact/ContactContent";
import { Footer } from "src/components/Footer";

import style from "src/stylesheet/home/home.module.scss";

const HomePage = () => {
  return (
    <View id={style.container}>
      <NavBar />
      <section id={style.home}>
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
      <footer id={style.footer}>
        <Footer />
      </footer>
    </View>
  );
};

export default HomePage;
