"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CardProps {
  name: string;
  contactNumber: string;
  github: string;
  linkedIn: string;
  website: string;
  job: string;
}

const Card = ({ name, job, github, linkedIn, website }: CardProps) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.github.com/users/${github}`).then((g) => {
        console.log(g);
        g.json().then((ga) => {
          setImage(ga?.avatar_url);
        });
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full md:w-[200px] md:h-[400px]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <img
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
              className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
              alt="profile"
            />
            <div className="absolute -bottom-12 flex h-[98px] w-[98px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img
                className="h-full w-full rounded-full"
                src={image}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {name}
            </h4>
            <p className="text-base font-normal text-gray-600">{job}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
            <Link
              className="flex flex-col items-center justify-center h-12 w-12 hover:opacity-80"
              href={linkedIn}
              target="_blank"
            >
              <img src="/linkedin.png" alt="icon-linkedin" />
            </Link>
            <Link
              className="flex flex-col items-center justify-center h-12 w-12 hover:opacity-80"
              href={github}
              target="_blank"
            >
              <img src="/github.png" alt="icon-github" />
            </Link>
            <Link
              className="flex flex-col items-center justify-center h-12 w-12 hover:opacity-80"
              href={website}
              target="_blank"
            >
              <img src="/website.png" alt="icon-profile" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
