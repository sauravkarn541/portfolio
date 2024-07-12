import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { AuroraBackground } from './ui/AuroraBackground'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Introduction = () => {
  return (
    <section id='home'>
      <AuroraBackground>
        <div className='h-screen w-full relative flex items-center justify-center'>
          <div className="grid col-span-1 px-4">
            <div className="flex justify-center relative my-20 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                <TextGenerateEffect
                  className="text-center text-[40px] md:text-5xl lg:text-6xl"
                  words="Crafting Robust Full Stack Solutions" />

                <p className="text-center md:tracking-wider mb-4 mt-2 text-sm md:text-lg lg:text-2xl dark:text-white text-black">
                  Hi, I&apos;m Saurav, a Full Stack Developer based in Nepal.
                </p>
                <a href="#">
                  <ShimmerButton title="Show my work"  icon={<FaLocationArrow />} position="right"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}

export default Introduction