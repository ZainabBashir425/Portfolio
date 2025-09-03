export default function About() {
  return (
    <section id="about-section" className="relative py-16">
    <div className="container max-w-[1200px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex relative h-[400px] w-full rounded-2xl bg-cover bg-center shadow-lg"
          style={{backgroundImage: "url('/profile1.png')"}}>
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        </div>

        <div className="relative opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <h1
            className="absolute top-0 left-0 text-[80px] md:text-[100px] font-bold text-white/10 select-none leading-none">
            About
          </h1>

          <div className="relative z-10 space-y-6 md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-5 text-white">
              About Me
            </h2>
            <p className="leading-relaxed">
              I am Zainab Bashir, a passionate Full-Stack Web Developer and
              Software Engineering student. With a strong foundation in
              software engineering principles, I have gained hands-on
              experience in designing, developing, and deploying scalable
              applications. My degree has equipped me with knowledge in
              algorithms, database systems, software design patterns, and
              project management, which I apply to build efficient and
              innovative solutions.
            </p>
            <p className="leading-relaxed">
              My core expertise lies in
              <span className="text-white font-semibold">React.js, Next.js, and modern web technologies</span>. I specialize
              in building interactive, responsive, and
              high-performance web applications using
              <span className="text-white font-semibold">
                JavaScript (ES6+), Tailwind CSS, Node.js, and Express.js</span>. I also have experience with backend
              development and databases
              like
              <span className="text-white font-semibold"> MongoDB and MySQL</span>, enabling me to work across the full
              stack. Additionally, I am
              skilled in designing and consuming
              <span className="text-white font-semibold"> REST APIs</span>,
              integrating third-party services, and optimizing applications
              for performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
