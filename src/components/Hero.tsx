import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/2 -left-4 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <section className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-8 animate-fade-in">
              <span className="text-blue-600 text-sm font-medium">
                New Launch 🚀
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-tight mb-6 animate-slide-up">
              <span className="block">Exploring Innovative</span>
              <span className="block text-blue-600 animate-slide-up delay-100">
                Paths to Cultivate
              </span>
              <span className="block animate-slide-up delay-200">
                Your Business
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-300">
              Transform your business with cutting-edge solutions designed to
              drive growth, enhance efficiency, and maximize your potential in
              the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-400">
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-medium transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Explore!
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in delay-500">
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Countries", value: "25+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="font-bold text-2xl text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Section */}
          <section className="relative animate-float">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <Image
                src="/heroimage.jpg"
                alt="Business Growth Illustration"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full animate-bounce-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full animate-bounce-slow delay-500" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;

