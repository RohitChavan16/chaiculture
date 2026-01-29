import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import Signup from "./components/Signup"
import Footer from "./components/Footer"

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
