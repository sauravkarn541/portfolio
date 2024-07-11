"use client"

import { FaHome } from "react-icons/fa";
import Introduction from "./components/Introduction";
import ThemeSwitch from "./components/ThemeSwitch";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={[
              {name: 'Home', link: '/', icon: <FaHome />},
              {name: 'About', link: '#about'},
              {name: 'Projects', link: '#projects'},
              {name: 'Contact', link: '#contact'},
        ]}
          className="px-5 py-5 rounded-2xl"
        />
      <ThemeSwitch />
      <Introduction />
      <About />
    </>
  );
}
