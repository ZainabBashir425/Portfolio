export default function Experience() {
  return (
    <section id="experience-section" className="py-16 relative">
    <div className="container max-w-[1200px] mx-auto px-6 relative">
      <div className="relative text-center w-fit mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-7xl w-fit mx-auto font-bold mb-5 text-white">
          My Experience
        </h2>
        <h1
          className="absolute top-0 -left-10 text-[50px] md:text-[80px] lg:text-[100px] font-bold text-white/10 select-none leading-none">
          EXPERIENCE
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 relative">
        <div
          className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6  opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <span className="text-2xl font-extrabold text-[#ffbd39]">Aug 2025 – Present</span>
          <h3 className="text-2xl my-2 font-normal text-white">
            MERN Stack Fellowship
          </h3>
          <span className="block text-[#999999] font-semibold">Buildables Fellowship</span>
          <p className="text-[#999999] leading-relaxed my-3">
            Currently learning and working with different modern web
            technologies, focusing on the MERN stack to build scalable
            applications.
          </p>
        </div>

        <div
          className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6  opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <span className="text-2xl font-extrabold text-[#ffbd39]">Jul 2025 – Aug 2025</span>
          <h3 className="text-2xl my-2 font-normal text-white">Backend Intern</h3>
          <span className="block text-[#999999] font-semibold">CapregSoft Pvt Ltd</span>
          <p className="my-3 text-[#999999] leading-relaxed">
            Worked on a React Native app and Next.js project, focusing on
            backend integration and building efficient APIs.
          </p>
        </div>

        <div
          className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6  opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <span className="text-2xl font-extrabold text-[#ffbd39]">Nov 2024 – Jan 2025</span>
          <h3 className="text-2xl my-2 font-normal text-white">
            Web Developer Intern
          </h3>
          <span className="block text-[#999999] font-semibold">Innovaronix</span>
          <p className="my-3 text-[#999999] leading-relaxed">
            Worked on client projects’ frontend, implementing responsive UI
            components and enhancing user experience with modern tools.
          </p>
        </div>
        <div
          className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6  opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <span className="text-2xl font-extrabold text-[#ffbd39]">Jun 2024 – Sep 2024</span>
          <h3 className="text-2xl my-2 font-normal text-white">
            Frontend Fellowship
          </h3>
          <span className="block text-[#999999] font-semibold">Bytewise Limited</span>
          <p className="my-3 text-[#999999] leading-relaxed">
            Learned and worked on various frontend technologies, gaining
            hands-on experience in modern web development practices.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
