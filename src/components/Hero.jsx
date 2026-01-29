import logo from "../assets/logo.avif"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <img
        src={logo}
        alt="Chai Culture"
        className="w-28 mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Brew the Royal Tradition
      </h1>

      <p className="max-w-xl text-lg opacity-80 mb-6">
        Premium instant chai inspired by royal Indian households.
        Crafted with heritage, warmth, and elegance.
      </p>

      <span className="px-5 py-2 border border-[#C6A75E] text-[#C6A75E] rounded-full">
        Launching Soon ☕
      </span>

    </section>
  )
}

export default Hero
