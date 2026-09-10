import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
const Home = () => {
  const Navigate = useNavigate()
  return (
    <div>Home
<Hero />
<Skills/>
<Experience />
    </div>
  )
}

export default Home