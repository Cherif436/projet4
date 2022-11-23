import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { motion } from "framer-motion"
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Layouts = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (!mounted) return null;

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="overflow-y-scroll">
      <nav className="flex items-center justify-center overflow-x-auto text-md">
        <Link href="/">
          <a className="p-2">
            <FaHome className="text-2xl font-bold dark:text-white hover:text-red-500" />
          </a>
        </Link>
        <Link href="/parcours">
          <a className="p-2 hover:text-red-500">Parcours</a>
        </Link>
        <Link href="/resume">
          <a className="p-2 hover:text-red-700">Compétences</a>
        </Link>
        <Link href="/projects">
          <a className="p-2 hover:text-red-500">Projets</a>
        </Link>
        <Link href="/contact">
          <a className="p-2 hover:text-red-500">Contact</a>
        </Link>
        <div className="p-2">
          <div>
            {/* <h1 className="font-bold text-center text-7xl">
              {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
              <span className="text-purple-600">Mode</span>
            </h1> */}
            <div className="flex justify-center">
              {currentTheme === 'dark' ? (
                <button
                  className="w-12 p-3 border-2 border-white rounded-md bg-black-700 hover:bg-black"
                  onClick={() => setTheme('light')}
                >
                  {' '}
                  <Image src="/images/sun.svg" alt="logo" height="30px" width="30px" />
                </button>
              ) : (
                <button
                  className="w-12 p-3 bg-white border-2 rounded-md border-yello-500 hover:bg-yellow-500"
                  onClick={() => setTheme('dark')}
                >
                  <Image src="/images/moon.svg" alt="logo" height="30px" width="30px" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </motion.div> 
  )
}

export default Layouts