import { View } from "app-studio";
import { H3Medium } from "src/components/Text";
import style from "src/stylesheet/menu.module.scss";

export const Menu = () => {
  const menu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <View className={style.menu_container}>
      <ul className={style.menu_content}>
        {menu.map((item, index) => (
          <li key={`${item.name}${index}`}>
            <H3Medium>
              <a href={item.href}>{item.name}</a>
            </H3Medium>
          </li>
        ))}
      </ul>
    </View>
  );
};
