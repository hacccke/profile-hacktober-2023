"use client";
import Card from "@/components/Card";

import profile from "@/data/profile.json";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("");
  return (
    <main className="">
      <nav className="flex items-center justify-center bg-[#0F0913] w-full">
        <div className="py-6 mx-auto">
          <p className="text-2xl font-bold text-[#D2B863] mx-auto">
            HACTOBERFEST 2023
          </p>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {profile.map((p) => {
          const { name, contactNumber, github, linkedIn, website, job } = p;
          fetch(`https://api.github.com/users/${github}`).then((g) => {
            g.json().then((ga) => {
              setImage(ga?.avatar_url);
            });
          });
          return (
            <Card
              job={job}
              name={name}
              img={image}
              contactNumber={contactNumber}
              github={`https://github.com/${github}`}
              linkedIn={linkedIn}
              website={website}
            />
          );
        })}
      </div>
    </main>
  );
}
