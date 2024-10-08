import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HorseInfo } from './components/HorseInfo'

const horses = [
  {
    id: 1,
    name: 'Thunder'
  },
  {
    id: 2,
    name: 'Tesla'
  },
  {
    id: 3,
    name: 'Tom'
  }
]

function App() {

  return (
    <>
      <header id='top'><h1>Horse Racing</h1></header>
      <section id='tracks'>
          {horses.map((horse) => (<HorseInfo key={horse.id} name={horse.name}/>))}
      </section>
    </>
  )
}

export default App
