import { HomeContent } from "src/components/home/HomeContent";
import { InnovationContent } from "src/components/innovation/InnovationContent";
import { AboutContent } from "src/components/about/AboutContent";
import { PropertiesContent } from "src/components/home/PropertiesContent";
import { SocialsContent } from "src/components/home/SocialsContent";
import { ContactContent } from "src/components/contact/ContactContent";
import { PageLayout } from "src/layout/pageLayout";
import { NavBar } from "src/components/navigation/NavBar";

import style from "src/stylesheet/home/home.module.scss";

const HomePage = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default HomePage;
HomePage.displayName = "HomePage";
