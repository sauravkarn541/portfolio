"use client"

import { FaHome } from "react-icons/fa";
import Introduction from "../components/Introduction";
import ThemeSwitch from "../components/ThemeSwitch";
import { FloatingNav } from "../components/ui/FloatingNavbar";

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
            {name: 'About', link: '#about'},
            {name: 'Projects', link: '#projects'},
            {name: 'Contact', link: '#contact'},
          ]}
          className="px-5 py-5 rounded-2xl"
        />
        <section id="home">
          <Introduction />
        </section>
        
        {/* <section id="about">
          <Introduction />
        </section>

        <section id="projects">
          <Introduction />
        </section>

        <section id="contact">
          <Introduction />
        </section> */}
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
