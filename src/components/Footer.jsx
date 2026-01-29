import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="py-8 bg-[#3A2A1F] text-[#F8F3E9] text-center">

      <div className="flex justify-center gap-6 mb-4 text-xl">

        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />

      </div>

      <p className="text-sm opacity-70">
        © 2026 Chai Culture. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
