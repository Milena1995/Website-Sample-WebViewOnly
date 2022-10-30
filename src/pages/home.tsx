// import { View } from "app-studio";
import style from "../stylesheet/home.module.scss";
import { View } from "app-studio";
import { NavBar } from "../components/navigation/NavBar";
import { HomeContent } from "../components/HomeContent";
// import { useSelector } from "react-redux";

const HomePage = () => {
  return (
    <View id={style.container}>
      <section id={style.home}>
        <NavBar />
        <HomeContent />
      </section>
      <section id={style.innovation}>innovation</section>
      <section id={style.about}>about</section>
      <section id={style.properties}>properties</section>
      <section id={style.socials}>socials</section>
      <section id={style.contact}>contact</section>
    </View>
  );
};

export default HomePage;
