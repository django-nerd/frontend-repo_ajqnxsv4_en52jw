const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'Dasbor analitik real-time dengan arsitektur micro-frontend dan UI glassmorphic.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'E-commerce 3D',
    desc: 'Pengalaman belanja imersif dengan preview produk 3D dan animasi halus.',
    tags: ['React', 'Three.js', 'Stripe'],
    link: '#',
  },
  {
    title: 'SaaS Landing',
    desc: 'Landing page cepat dengan SEO kuat dan performa Lighthouse 95+.',
    tags: ['Vite', 'Framer Motion', 'SEO'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proyek Unggulan</h2>
            <p className="mt-2 text-gray-600">Kualitas, performa, dan detail adalah prioritas utama.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400">Mulai Proyek</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6 relative">
                <div className="h-36 w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
