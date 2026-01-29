import Hero from "./components/Hero.jsx"
import Countdown from "./components/CountDown.jsx"
import Signup from "./components/Signup.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="min-h-screen bg-[#F8F3E9] text-[#563e2e]">
      
      <Hero />
      <Countdown />
      <Signup />
      <Footer />
    </div>
  )
}

export default App
