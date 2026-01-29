function Signup() {
  return (
    <section className="py-20 text-center px-4">

      <h2 className="text-3xl mb-4">Stay Updated</h2>

      <p className="mb-6 opacity-70">
        Get notified when we launch.
      </p>

      <div className="flex justify-center max-w-md mx-auto">

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-l-md focus:outline-none"
        />

        <button className="bg-[#C6A75E] hover:bg-[#b59548] cursor-pointer px-6 py-3 rounded-r-md font-semibold">
          Notify Me
        </button>

      </div>

    </section>
  )
}

export default Signup
