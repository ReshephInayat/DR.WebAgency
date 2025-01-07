import Image from "next/image";
import React from "react";
// import { SubscriptionCard } from "./UI/Card";

function Services() {
  return (
    <main className="w-full h-full">
      <h1 className="font-bold text-4xl text-center ">
        We are In The Business Of Helping You Grow Your Business.
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <p className="text-sm font-medium text-gray-600">Services</p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              We help you identify, explore and respond to new opportunities.
            </h1>

            <p className="text-lg text-gray-600">
              As long as those opportunities involve giving us money to
              re-purpose old projects – we can come up with an endless number of
              those.
            </p>

            <div className="relative aspect-[4/3] overflow-hidden rounded-tr-3xl rounded-bl-3xl">
              <Image
                src="/image2.jpg"
                alt="Developer coding on laptop"
                className="object-cover w-full h-full backdrop-grayscale"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:pt-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Web development.</h3>
                <p className="text-gray-600">
                  We specialise in crafting beautiful, high quality marketing
                  pages. The rest of the website will be a shell that uses lorem
                  ipsum everywhere.
                </p>
              </div>
              <div className="h-px bg-gray-200" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Personal Portfolios.
                </h3>
                <p className="text-gray-600">
                  We have a team of skilled developers who are experts in the
                  latest app frameworks, like Angular 1 and Google Web Toolkit.
                </p>
              </div>
              <div className="h-px bg-gray-200" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">E-commerce.</h3>
                <p className="text-gray-600">
                  We are at the forefront of modern e-commerce development.
                  Which mainly means adding your logo to the Shopify store
                  template we&apos;ve used for the past six years.
                </p>
              </div>
              <div className="h-px bg-gray-200" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Custom Websites.
                </h3>
                <p className="text-gray-600">
                  At Studio we understand the importance of having a robust and
                  customised CMS. That&apos;s why we run all of our client
                  projects out of a single, enormous Joomla instance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
