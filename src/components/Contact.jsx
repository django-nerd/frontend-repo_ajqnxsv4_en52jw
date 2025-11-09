import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Terkirim! Saya akan menghubungi Anda segera.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mari Bekerja Sama</h2>
          <p className="mt-2 text-gray-600">Ceritakan kebutuhan Anda—saya akan balas dalam 24 jam.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid gap-4">
              <input required name="name" placeholder="Nama" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea required name="message" placeholder="Pesan" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="mt-5 w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Kirim</button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </form>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-medium">Email:</span> <a className="text-blue-600 hover:underline" href="mailto:you@example.com">you@example.com</a>
              </li>
              <li>
                <span className="font-medium">Lokasi:</span> Jakarta, Indonesia
              </li>
              <li>
                <span className="font-medium">Fokus:</span> Front-end Development, UI/UX, 3D Interaction
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400">LinkedIn</a>
              <a href="#" className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400">Github</a>
              <a href="#" className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400">Dribbble</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
