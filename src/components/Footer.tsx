import { View } from "app-studio";

import { Vertical } from "src/layout/layout";
import { ReactComponent as Instagram } from "src/assets/svg/Instagram.svg";
import { ReactComponent as Facebook } from "src/assets/svg/Facebook.svg";
import { Horizontal } from "src/layout/layout";
import { H2Bold, H3Medium } from "src/components/Text";

import style from "src/stylesheet/footer.module.scss";

export const Footer = () => {
  const servcies = ["Service 1", "Service 2", "Service 3", "Service 4"];

  const menu = [
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <Horizontal
      className={style.footer_container}
      padding={"60px 70px"}
      justifyContent={"space-between"}
      backgroundColor={"#486A6F"}
      color={"white"}
    >
      <Vertical>
        <H2Bold>Buildit</H2Bold>
        <H3Medium>Development company, 2022</H3Medium>
      </Vertical>
      <Vertical>
        {servcies.map((service, index) => (
          <H3Medium key={`${service}${index}`}>
            <a href="/service1">{service}</a>
          </H3Medium>
        ))}
        <Horizontal gap={20} marginTop={20}>
          <View padding={8} backgroundColor={"#678C92"} textAlign={"center"}>
            <a href={"https://www.instagram.com/milwong1995"} rel="noreferrer">
              <Instagram />
            </a>
          </View>
          <View padding={8} backgroundColor={"#678C92"}>
            <a
              href={"https://www.facebook.com/jonathan.wong.351104/"}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </View>
        </Horizontal>
      </Vertical>
      <Vertical>
        {menu.map((menu, index) => (
          <H3Medium key={`${menu.text}${index}`}>
            <a href={menu.href}>{menu.text}</a>
          </H3Medium>
        ))}
      </Vertical>
      <Vertical>
        <H3Medium>Get in touch</H3Medium>
        <H3Medium>60 Manor Station St. Fairport, NY 14450</H3Medium>
        <H3Medium>708-790-0000</H3Medium>
        <H3Medium>sales@buildit.site</H3Medium>
      </Vertical>
    </Horizontal>
  );
};
