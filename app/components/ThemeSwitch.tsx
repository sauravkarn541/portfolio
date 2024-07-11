'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true);
  }, [])

  return <button className="rounded-full p-5 absolute bottom-0 right-0 cursor-pointer z-10"
        onClick={() => {
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
        }}
      >
        {
          resolvedTheme === 'light'
          ? <FaLightbulb style={{ height: '40px' }} />
          : <FaRegLightbulb style={{ height: '40px' }} />
        }
      </button>
};

export default ThemeSwitch