export default function Contact() {
  return (
    <section id="contact-section" className="py-16 flex justify-center">
    <div
      className="container max-w-[1200px] mx-auto px-6 opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
      
      <div className="relative  text-center w-fit mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-7xl w-fit mx-auto font-bold mb-5 text-white">
          Contact Me
        </h2>
        <h1
          className="absolute top-0 left-0 text-[50px] md:text-[80px] lg:text-[100px] font-bold text-white/10 select-none leading-none">
          Contact
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
          <div className="flex items-center justify-center mb-4 mx-auto rounded-full h-25 w-25 bg-[#FFFFFF1A]">
            <i className="fab fa-github text-3xl" style={{color:"#ffbd39"}}></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">GitHub</h3>
          <p><a href="https://github.com/ZainabBashir425" className="text-gray-300 hover:underline">ZainabBashir425</a></p>
        </div>

        <div className="p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
          <div className="flex items-center justify-center mb-4 mx-auto rounded-full h-25 w-25 bg-[#FFFFFF1A]">
            <i className="fab fa-linkedin text-3xl" style={{color:"#ffbd39"}}></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/zainab-bashir-603ba526a/" className="text-gray-300 hover:underline">Zainab
              Bashir</a></p>
        </div>

        <div className="p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
          <div className="flex items-center justify-center mb-4 mx-auto rounded-full h-25 w-25 bg-[#FFFFFF1A]">
            <i className="fas fa-envelope text-3xl" style={{color:"#ffbd39"}}></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
          <p>
            <a href="mailto:zainabbashir785@gmail.com" className="text-gray-300 hover:underline">
              zainabbashir785@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <form className="bg-white p-6 shadow-lg space-y-4">
          <input type="text" placeholder="Subject"
            className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffbd39]" />
          <textarea rows="6" placeholder="Message"
            className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffbd39]"></textarea>
          <button type="submit" className="w-fit bg-[#ffbd39] text-black font-semibold py-3 px-9 rounded-4xl transition">
            Send Message
          </button>
        </form>

        <div className="hidden lg:flex justify-center">
          <img src="profile1.png" alt="Profile" className="rounded-xl shadow-lg w-4/5 object-cover" />
        </div>
      </div>
    </div>
  </section>
  );
}
