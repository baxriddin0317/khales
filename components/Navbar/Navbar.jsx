"use client"
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import "./Nav.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  Text,
  StyledButton
} from "./NavbarStyles.js";

import useDeviceSize from "@/utils/WindowSize.js";
import { useLanguage } from "../../Context/Languagecontext.js";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabE = [
    "Home",
    "Services",
    "Project Management",
    "Development Planning",
    "Architecture",
    "Building Contracting",
    "Engineering Consultancy",
    "Interior Design",
    "Landscaping",
    "Real Estate",
    "Fit-Out",
    "Portfolio",
    "Connet",
    "About Khales",
    "FAQ",
    "Language",
    "Arabic",
    "English",
  ];

  const tabA = [
    "الرئيسية",
    "الخدمات",
    "إدارة مشاريع",
    "مخطط تطوير",
    "المعمارية",
    "عقود بناء",
    "استشارات هندسية",
    " تصميم داخلي",
    " المناظر الطبيعية",
    "حلول عقارية",
    "التجهيز الداخلي",
    "المشاريع",
    " اتصل بنا",
    "نبذة عنا",
    "الاسئلة الشائعه",
    "اللغة",
    "العربية",
    "الانجليزية",
  ];

  const [show, setShow] = useState(false);
  const [tabs, setTabs] = useState(language === "ar" ? tabA : tabE);

  useEffect(() => {
    setTabs(language === "ar" ? tabA : tabE);
  }, [language]);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    // Remove the NavLink navigation and just change the language
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setShow(false);
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };
  let boxClassSubMenu2 = ["sub__menus"];
  if (isMenuSubMenu2) {
    boxClassSubMenu2.push("sub__menus__Active");
  } else {
    boxClassSubMenu2.push("");
  }

  const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
  const toggleSubmenu3 = () => {
    setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
  };
  let boxClassSubMenu3 = ["sub__menus"];
  if (isMenuSubMenu3) {
    boxClassSubMenu3.push("sub__menus__Active");
  } else {
    boxClassSubMenu3.push("");
  }

  const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);
  const toggleSubmenu4 = () => {
    setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
  };
  let boxClassSubMenu4 = ["sub__menus"];
  if (isMenuSubMenu4) {
    boxClassSubMenu4.push("sub__menus__Active");
  } else {
    boxClassSubMenu4.push("");
  }

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Nav className={isSticky ? "sticky" : ""}>
      <NavbarContainer>
        <Link href={`/`}>
          <NavLogo >
            <NavIcon src="/assets/Khales-Logo.png" alt="site logo" />
          </NavLogo>
        </Link>
        <MobileIcon onClick={handleClick}>
          {show ? <FaTimes /> : <CgMenuRight />}
        </MobileIcon>
        <NavMenu $show={show}>
          <NavItem>
            {useDeviceSize()[0] > "960" ? (
              ""
            ) : (
              <StyledButton style={{ margin: "auto" }}>
                {language === "eng" ? "Book Consultation" : "أحجز موعدك الآن"}
              </StyledButton>
            )}
            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <Link
                  exact="true"
                  className={pathname === '/' ? 'is-active' : ''}
                  onClick={toggleClass}
                  href={`/`}
                >
                  {" "}
                  <Text
                    style={{
                      color: pathname === "/" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[0]}{" "}
                  </Text>
                </Link>
              </li>
              <li
                onClick={toggleSubmenu}
                className="menu-item sub__menus__arrows"
              >
                {" "}
                <Link href="/service">
                  {" "}
                  <Text
                    style={{
                      color:
                        pathname === "/service" ? "#66a109" : "black",
                    }}
                  >
                    {tabs[1]}
                  </Text>{" "}
                </Link>
                <ul className={boxClassSubMenu.join(" ")}>
                  <li>
                    {" "}
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/ProjectManagement`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/ProjectManagement"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[2]}{" "}
                      </Text>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/Developmentplanning`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/Developmentplanning"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[3]}{" "}
                      </Text>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/BuildingContracting`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/BuildingContracting"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[5]}{" "}
                      </Text>
                    </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/EngineeringConsultancy`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/EngineeringConsultancy"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[6]}{" "}
                      </Text>
                    </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/InteriorDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/InteriorDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[7]}{" "}
                      </Text>
                    </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/LandscapingDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/LandscapingDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[8]}{" "}
                      </Text>
                    </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link
                      onClick={toggleClass}
                      className={pathname === '/' ? 'is-active' : ''}
                      href={`/RealEstate`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            pathname === "/RealEstate"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[9]}{" "}
                      </Text>
                    </Link>{" "}
                  </li>
                </ul>
              </li>{" "}
              <li className="menu-item">
                <Link
                  exact="true"
                  className={pathname === '/' ? 'is-active' : ''}
                  onClick={toggleClass}
                  href={`/PROJECTS`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        pathname === "/PROJECTS" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[11]}{" "}
                  </Text>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  exact="true"
                  className={pathname === '/' ? 'is-active' : ''}
                  onClick={toggleClass}
                  href={`/Contact`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        pathname === "/Contact" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[12]}{" "}
                  </Text>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  exact="true"
                  className={pathname === '/' ? 'is-active' : ''}
                  onClick={toggleClass}
                  href={`/ABOUTUS`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        pathname === "/ABOUTUS" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[13]}{" "}
                  </Text>
                </Link>
              </li>
              <li
                onClick={toggleSubmenu4}
                className="menu-item sub__menus__arrows"
              >
                <Link href="#">
                  <Text>{tabs[15]}</Text>
                </Link>
                <ul className={boxClassSubMenu4.join(" ")}>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("ar")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px",
                        color: language === "ar" ? "#66a109" : "black",
                      }}
                    >
                      <Text>{tabs[16]}</Text>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("eng")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px",
                        color: language === "eng" ? "#66a109" : "black",
                      }}
                    >
                      <Text>{tabs[17]}</Text>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <StyledButton href={`/booking`}>
            {language === "eng" ? "Book Consultation" : "أحجز موعدك الآن"}
          </StyledButton>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
