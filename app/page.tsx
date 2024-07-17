"use client"

import { FaHome } from "react-icons/fa";
import Introduction from "../components/Introduction";
import ThemeSwitch from "../components/ThemeSwitch";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import About from "../components/About";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  className: string;
  children: React.ReactNode
  type: string;
}

const Section = ({ id, className, children, type }:SectionProps) => (
  <section
    id={id}
    className={type !== 'introduction' ? ` h-screen flex items-center justify-center ${className}` : ''}
  >
    {children}
  </section>
);

export default function Home() {
  return (
    <main>
      <FloatingNav
        navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '#about'},
          {name: 'Projects', link: '#projects'},
          {name: 'Contact', link: '#contact'},
        ]}
        className="px-5 py-5 rounded-2xl"
      />
      <ThemeSwitch />
      <Section id="home" className="" type="introduction">
        <Introduction />
      </Section>
      <Section id="about" className="bg-red-500" type="about">
        About is here
      </Section>
      <Section id="projects" className="bg-blue-500" type="projects">
        Projects is here
      </Section>
      <Section id="contact" className="bg-green-500" type="contact">
        Contact is here
      </Section>
    </main>
  );
}
