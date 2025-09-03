export default function Hero() {
  return (
    <section id="home-section"
    className="min-h-screen mt-16 text-white relative flex items-center opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
    <div className="container max-w-[1200px] relative z-20 mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-2 items-center">
        <div className="space-y-6 animate-[slideUp_1s_ease-out]">
          <span className="text-lg font-semibold text-[#ffbd39]">Hello!</span>
          <h1 className="text-4xl md:text-5xl font-bold">
            I'm <span className="text-[#ffbd39]">Zainab Bashir</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">
            A Passionate Full-Stack Web Developer
          </h2>
          <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
            <a href="#contact-section"
              className="bg-[#ffbd39] text-gray-950 cursor-pointer w-fit h-[50px] px-6 py-3 rounded-full font-medium transition">
              Contact me
            </a>
            <a href="#"
              className="border border-white cursor-pointer text-white h-[50px] w-fit px-6 py-3 rounded-full font-medium transition">
              Download CV
            </a>
          </div>
        </div>

        <div className="hidden md:block md:h-[500px] md:w-[400px] bg-cover bg-center shadow-lg -z-10"
          style={{backgroundImage:"url('/profile1.png')"}}>
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </div>

    <div className="absolute inset-0 md:hidden bg-cover bg-center z-0" style={{backgroundImage: "url('/profile1.png')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  </section>
  );
}
