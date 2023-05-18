'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from './Icons'

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <button
      onClick={() =>
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
      }
      className=" flex rounded-lg bg-gray-800 px-6 py-2  text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300"
    >
      {currentTheme === 'dark' ? (
        <SunIcon className={'fill-[#372D3B] '} />
      ) : (
        <MoonIcon className={'fill-[#372D3B]'} />
      )}
    </button>
  )
}

export default ThemeToggleButton
