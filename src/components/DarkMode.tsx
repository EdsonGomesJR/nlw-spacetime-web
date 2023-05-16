'use client'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export default function DarkMode() {
  const preferDarkQuery = '(prefer-color-scheme: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')
    console.log('UserPref', userPref)
    console.log('primeiro effect')

    function handleChange() {
      if (userPref) {
        const check = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)
        console.log('mode', mode)

        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        const check = mediaQuery.matches ? 'dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleChange()
    mediaQuery.addEventListener('click', handleChange)

    return () => mediaQuery.removeEventListener('click', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
    console.log('segundo effect')
  }, [mode])

  return (
    <div>
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`flex w-full items-center justify-center rounded-full p-1  ${
          mode === 'light' ? ' text-black' : ' text-[#372D3B]'
        }`}
      >
        {mode === 'dark' ? (
          <SunIcon className={'fill-[#372D3B] '} />
        ) : (
          <MoonIcon className={'fill-[#372D3B]'} />
        )}
      </button>
    </div>
  )
}
