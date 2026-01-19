export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00629B] to-[#00B5E2]"></div>
            <h2 className="text-5xl font-bold text-white font-serif">About IEEE LINK</h2>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed font-light">
            A defining day of bold conversations, visionary leadership and powerful connections
            where leaders rise, ideas ignite and the torch is passed forward.
          </p>
        </div>
      </div>
    </section>
  );
}
