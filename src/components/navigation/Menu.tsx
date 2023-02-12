import { useState } from "react";
import { H3Medium } from "src/components/Text";
import styles from "src/stylesheet/menu.module.scss";

export const Menu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const menu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={styles.menu_container}>
      <img
        onClick={() => setShowDropDown(!showDropDown)}
        className={styles.img}
        src={require(`src/assets/images/hamburger32px.png`)}
        alt="hamburger"
      />

      <ul className={showDropDown ? styles.menu_active : styles.menu_content}>
        {menu.map((item, index) => (
          <li key={`${item.name}${index}`}>
            <H3Medium>
              <a href={item.href}>{item.name}</a>
            </H3Medium>
          </li>
        ))}
      </ul>
    </div>
  );
};

Menu.displayName = "Menu";
