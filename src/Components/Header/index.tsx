import React, { useState } from "react";
import { HeaderStyled, ItemListMenu, ListMenu, MenuResponsivo } from "./styled";
import { useLocation, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

//Imgs
import LogoIMG from "./logo.jpg";
import { UseMobileContext } from "@src/Contexts/Mobile.context";
import { Flex } from "@src/Styled";

interface iItemsMenu {
  id: number;
  title: string;
  to: string;
}

export const Header: React.FC<any> = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
  const { isMobile } = UseMobileContext();

  return (
    <HeaderStyled className={pathname !== "/" ? "min" : ""}>
      <img src={LogoIMG} alt="Logo Marvel in JPG" />

      {isMobile ? (
        <>
          <Flex
            onClick={() => setOpenMenu(!openMenu)}
            position="absolute"
            left="0"
            top="60px"
            padding="0 0 0 30px"
            zIndex="10"
          >
            <FiMenu color="#FFFFFF" fontSize="30px" />
          </Flex>
          <MenuResponsivo className={openMenu ? "open" : ""}>
            <ul>
              {itemsMenu.map((item) => (
                <li key={item.id}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </MenuResponsivo>
        </>
      ) : (
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
      )}
    </HeaderStyled>
  );
};
