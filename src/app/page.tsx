'use client'
import Button from '@/components/Button'
import DarkMode from '@/components/DarkMode'
export default function Home() {
  return (
    <div>
      <h1 className="m-10 h-20  w-20 rounded bg-red-500 text-2xl font-bold uppercase dark:bg-cyan-500">
        Hello World
      </h1>
      <Button />

      <div className="m-10 h-10 w-10 border">{/* <DarkMode /> */}</div>
    </div>
  )
}
