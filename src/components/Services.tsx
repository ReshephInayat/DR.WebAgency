"use client";
import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Layout, ShoppingBag, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web development",
      description:
        "We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.",
      icon: Code,
      color: "from-blue-600 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      title: "Personal Portfolios",
      description:
        "We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.",
      icon: Layout,
      color: "from-purple-600 to-pink-500",
      shadowColor: "shadow-purple-500/25",
    },
    {
      title: "E-commerce",
      description:
        "We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we've used for the past six years.",
      icon: ShoppingBag,
      color: "from-orange-600 to-yellow-500",
      shadowColor: "shadow-orange-500/25",
    },
    {
      title: "Custom Websites",
      description:
        "At Studio we understand the importance of having a robust and customised CMS. That's why we run all of our client projects out of a single, enormous Joomla instance.",
      icon: Globe,
      color: "from-green-600 to-emerald-500",
      shadowColor: "shadow-green-500/25",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Modern Marquee Section */}
        <div className="relative overflow-hidden py-10 bg-gradient-to-b from-white via-blue-50 to-white">
          {/* First Marquee - Left to Right */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="whitespace-nowrap mb-4"
          >
            <div className="flex items-center gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <h1 className="pb-10 font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    We are in Business of Helping You
                  </h1>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Second Marquee - Right to Left */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            <div className="flex items-center gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className=" flex items-center gap-4">
                  <h1 className="pb-10 font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                    To grow your business
                  </h1>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-45"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Overlay Gradients */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Modern Services Grid */}
        <div className="mt-24">
          {/* Header Section */}
          <div id="services" className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full inline-block"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 pb-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            >
              Transforming Ideas
              <br />
              Into Digital Reality
            </motion.h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent transition-colors duration-500 shadow-lg ${service.shadowColor} group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 shadow-lg ${service.shadowColor}`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
                      </motion.div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-xl font-semibold group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-current opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
