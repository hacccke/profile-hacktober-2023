import Card from "@/components/Card";
import profile from "@/data/profile.json";

export default function Home() {
  return (
    <main className="">
      <nav className="flex items-center justify-center bg-[#0F0913] w-full">
        <div className="py-6 mx-auto">
          <p className="text-2xl font-bold text-[#D2B863] mx-auto">
            HACKTOBERFEST 2023
          </p>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {profile.map((p, index) => {
          const { name, contactNumber, github, linkedIn, website, job } = p;
          return (
            <Card
              key={`profile_${index}`}
              job={job}
              name={name}
              contactNumber={contactNumber}
              github={github}
              linkedIn={linkedIn}
              website={website}
            />
          );
        })}
      </div>
    </main>
  );
}
