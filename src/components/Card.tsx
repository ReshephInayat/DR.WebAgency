"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkLabel: string;
  buttonLabel: string;
};

const ThreeDCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
  linkLabel,
  buttonLabel,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl || "/image1.png"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href={link || "/"}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-black"
          >
            {linkLabel}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttonLabel}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCard;
