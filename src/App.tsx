import React from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import AuthForm from './components/AuthForm';
import GadgetCard from './components/GadgetCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showAuth, setShowAuth] = React.useState(false);

  const gadgets = [
    {
      title: "Pro Gaming Headset",
      price: "₹11,999",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
      description: "Immersive gaming experience with 7.1 surround sound and noise-canceling microphone.",
      specs: [
        "7.1 Surround Sound",
        "50mm Drivers",
        "Memory Foam Cushions",
        "20Hz-20kHz Frequency"
      ]
    },
    {
      title: "Smart Watch Ultra",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&q=80&w=800",
      description: "Advanced fitness tracking, heart monitoring, and seamless smartphone integration.",
      specs: [
        "AMOLED Display",
        "Heart Rate Monitor",
        "5 ATM Water Resistant",
        "7-day Battery Life"
      ]
    },
    {
      title: "Wireless Earbuds Pro",
      price: "₹16,999",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
      description: "Crystal clear audio with active noise cancellation and 24-hour battery life.",
      specs: [
        "Active Noise Cancellation",
        "IPX4 Water Resistant",
        "Bluetooth 5.2",
        "24hr Battery Life"
      ]
    },
    {
      title: "4K Drone Camera",
      price: "₹49,999",
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800",
      description: "Professional aerial photography with 4K camera and advanced stabilization.",
      specs: [
        "4K/60fps Camera",
        "3-Axis Gimbal",
        "5km Range",
        "30min Flight Time"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Cpu className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold tech-title bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                TechGadgets
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <button
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <button
                onClick={() => setShowAuth(true)}
                className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl tech-title">
                  <span className="block">Discover the Latest</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                    Tech Gadgets
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Explore our collection of cutting-edge technology products. From smart devices to gaming gear, find the perfect gadget for your lifestyle.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 tech-title">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {gadgets.map((gadget, index) => (
            <GadgetCard key={index} {...gadget} />
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto max-w-md">
            <div className="relative">
              <button
                onClick={() => setShowAuth(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <AuthForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;