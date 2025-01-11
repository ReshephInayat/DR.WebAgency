import React from "react";
import ThreeDCard from "./Card";

const CardGrid = () => {
  const cards = [
    // {
    //   title: "Golden Sports Events",
    //   description: "Sports events and tournaments.",
    //   imageUrl: "/project1.png",
    //   link: "https://goldensportsevents.com",
    //   linkLabel: "Visit →",
    //   buttonLabel: "Github",
    // },
    {
      title: "Project 1",
      description: "Project 1 description",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com",
      linkLabel: "Visit →",
      buttonLabel: "Github",
    },
    {
      title: "Project 2",
      description: "Project 2 description",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com",
      linkLabel: "Visit →",
      buttonLabel: "Github",
    },
    {
      title: "Project 3",
      description: "Project 3 description",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://twitter.com/mannupaaji",
      linkLabel: "Visit →",
      buttonLabel: "Github",
    },
    {
      title: "Project 4",
      description: "Project 4 description",
      imageUrl:
        "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com",
      linkLabel: "Visit →",
      buttonLabel: "Github",
    },
  ];

  return (
    <div>
      <div id="services" className="text-center mt-24">
        <p className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full inline-block">
          Our Projects
        </p>
        <h2 className="mt-8 pb-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Transforming Ideas
          <br />
          Into Digital Reality
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
        {cards.map((card, index) => (
          <ThreeDCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
