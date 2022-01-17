import React from "react";
import { HeaderStyled, ItemListMenu, ListMenu } from "./styled";
import { useLocation, Link } from "react-router-dom";

//Imgs
import LogoIMG from "./logo.jpg";

interface iItemsMenu {
  id: number;
  title: string;
  to: string;
}

export const Header: React.FC<any> = () => {
  const itemsMenu: iItemsMenu[] = [
    {
      id: 0,
      title: "INÍCIO",
      to: "/",
    },
    {
      id: 1,
      title: "CHARACTHERS",
      to: "/characthers",
    },
    {
      id: 2,
      title: "COMICS",
      to: "/comics",
    },
    {
      id: 3,
      title: "EVENTS",
      to: "/events",
    },
  ];

  const { pathname } = useLocation();

  return (
    <HeaderStyled className={pathname !== "/" ? "min" : ""}>
      <img src={LogoIMG} alt="Logo Marvel in JPG" />

      <ListMenu>
        {itemsMenu.map((item) => (
          <ItemListMenu
            key={item.id}
            className={item.to === pathname ? "active" : ""}
          >
            <Link to={item.to}>{item.title}</Link>
          </ItemListMenu>
        ))}
      </ListMenu>
    </HeaderStyled>
  );
};
