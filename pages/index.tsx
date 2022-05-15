import type { NextPage } from 'next'
import Profile from '../components/profile'
import Projects from '../components/projects'

const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      <Projects />
    </div>
  )
}

export default Home
