import { View } from "app-studio";

import { H3Medium } from "../Text";

import style from "../../stylesheet/menu.module.scss";

export const Menu = () => {
  const menu = [
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
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
