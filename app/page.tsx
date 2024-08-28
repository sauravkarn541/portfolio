"use client"

import { FaHome, FaRProject, FaInfo } from "react-icons/fa";
import Introduction from "../components/Introduction";
import ThemeSwitch from "../components/ThemeSwitch";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { FaMessage } from "react-icons/fa6";

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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto">
      <ThemeSwitch />
      <div className="w-full">
        <FloatingNav
          navItems={[
            {name: 'Home', link: '/', icon: <FaHome />},
            {name: 'About', link: '#about', icon: <FaInfo />},
            {name: 'Projects', link: '#projects', icon: <FaRProject />},
            {name: 'Contact', link: '#contact', icon: <FaMessage />},
          ]}
          className="px-5 py-5 rounded-2xl"
        />
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
      </div>
    </main>
  );
}
