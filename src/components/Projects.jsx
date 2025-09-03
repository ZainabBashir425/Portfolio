export default function Projects() {
  return (
    <section id="projects-section" className="py-16 relative">
    <div className="container max-w-[1200px] mx-auto px-6">
      <div className="relative  text-center w-fit mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-7xl w-fit mx-auto font-bold mb-5 text-white">
          My Projects
        </h2>
        <h1
          className="absolute top-0 left-0 text-[50px] md:text-[80px] lg:text-[100px] font-bold text-white/10 select-none leading-none">
          Projects
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 opacity-0 translate-y-10 transition-all duration-700 scroll-animate">

        <div className="bg-[#FFFFFF1A] rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-extrabold mb-3 text-[#ffbd39]">Furniture Studio</h3>
          <p className="text-[#999999] leading-relaxed my-3">
            A MERN stack furniture e-commerce platform with admin and user panels, product management, and Stripe
            payment integration for secure transactions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">Express</span>
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">MongoDB</span>
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">Node.js</span>
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">React</span>
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">Stripe</span>
          </div>
        </div>

        <div className="bg-[#FFFFFF1A] rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-extrabold mb-3 text-[#ffbd39]">FashioAura</h3>
          <p className="text-[#999999] leading-relaxed my-3">
            A modern fashion e-commerce website built with React and Firebase, featuring real-time data handling,
            responsive design, and smooth user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">React</span>
            <span className="px-3 py-1 rounded-full text-base text-black bg-[#ffbd39]">Firebase</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  );
}
