import style from "../stylesheet/home.module.scss";
import { View } from "app-studio";
import { NavBar } from "../components/navigation/NavBar";
import { HomeContent } from "../components/HomeContent";
import { Innovation } from "../components/innovation/Innovation";
import { About } from "../components/About";

const HomePage = () => {
  return (
    <View id={style.container}>
      <section id={style.home}>
        <NavBar />
        <HomeContent />
      </section>
      <section id={style.innovation}>
        <Innovation />
      </section>
      <section id={style.about}>
        <About />
      </section>
      <section id={style.properties}>properties</section>
      <section id={style.socials}>socials</section>
      <section id={style.contact}>contact</section>
    </View>
  );
};

export default HomePage;
