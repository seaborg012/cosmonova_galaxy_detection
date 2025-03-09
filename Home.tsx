import React from 'react';
import { ArrowRight, Star, Database, Search, Rocket, Globe2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="min-h-screen relative flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to Cosmify <br />
            <span className="text-purple-400">Your Gateway to the Universe</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Turn your curiosity into discovery with our AI-powered galaxy classification platform. Upload, analyze, and explore the cosmos like never before.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B0E18] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You Can Do With Cosmify</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful tools to help you explore and understand the universe
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-500" />}
              title="AI-Powered Classification"
              description="Instantly classify galaxies using our advanced machine learning models"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-purple-500" />}
              title="Build Your Collection"
              description="Organize and track all your analyzed galaxies in one place"
            />
            <FeatureCard
              icon={<Globe2 className="h-8 w-8 text-purple-500" />}
              title="Join the Community"
              description="Connect with fellow astronomy enthusiasts worldwide"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#151929] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Cosmify, we believe that the universe is an open book, waiting to be read. Our mission is to revolutionize astronomical discovery by harnessing AI for efficient galaxy classification, research, and education.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're an astronomy student, researcher, or space enthusiast, Cosmify provides the tools you need to explore the cosmos and contribute to real scientific discoveries.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:support@cosmify.com" className="text-purple-400 hover:text-purple-300 flex items-center">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"
                alt="Galaxy"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#151929] p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;