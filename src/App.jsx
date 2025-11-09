import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-gray-900">Home</a>
              <a href="#projects" className="hover:text-gray-900">Projects</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
