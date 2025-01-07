import React from "react";
import { SubscriptionCard } from "./UI/Card";

function Services() {
  return (
    <main className="w-full h-full">
      <h1 className="font-bold text-4xl text-center ">
        We are In The Business Of Helping You Grow Your Business.
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubscriptionCard icon="email" />
          <SubscriptionCard icon="copy" />
          <SubscriptionCard icon="lock" />
          <SubscriptionCard icon="refresh" />
          <SubscriptionCard icon="store" />
          <SubscriptionCard icon="files" />
        </div>
      </div>
    </main>
  );
}

export default Services;
