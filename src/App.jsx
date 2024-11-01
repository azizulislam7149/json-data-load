
import './App.css'
import ClickPlayer from './components/ClickPlayer'
import Header from './components/Header'
import Hero from './components/Hero'
import Player from './components/Player'
import ShowPlayer from './components/ShowPlayer'

function App() {
  
  return (
    <>
      
      <h1>Vite + React</h1>
      
     <Header></Header>
     <Hero></Hero>
    <div className='flex'>
      <Player></Player>
      <ClickPlayer></ClickPlayer>
    </div>
    <ShowPlayer></ShowPlayer>
    </>
  )
}

export default App
