import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Portofolio Profesional & Modern
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700">
            Saya membangun website yang cepat, elegan, dan berfokus pada hasil. Eksplor proyek terbaik saya dan mari berkolaborasi.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Lihat Proyek
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400">
              Hubungi Saya
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm">Tersedia untuk freelance</span>
            </div>
            <div className="text-sm">Front-end • UI/UX • Interaksi 3D</div>
          </div>
        </div>
      </div>
    </section>
  );
}
