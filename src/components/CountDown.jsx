import { useEffect, useState } from "react"

function CountDown() {

  const launchDate = new Date("2026-03-01").getTime()
  const [time, setTime] = useState({})

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime()
      const diff = launchDate - now

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <section className="py-20 bg-[#3A2A1F] text-[#F8F3E9] text-center">

      <h2 className="text-3xl mb-8">We’re Launching In</h2>

      <div className="flex justify-center gap-6">

        {Object.entries(time).map(([key, val]) => (
          <div key={key} className="bg-[#C6A75E] text-[#3A2A1F] px-5 py-4 rounded-lg">

            <div className="text-2xl font-bold">{val}</div>
            <div className="text-sm uppercase">{key}</div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default CountDown;
