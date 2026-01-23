const data = [
  {
    img: "/logo/sih.jpg",
    title: "SIH 2025 Finalist",
    role: "Team Lead",
    date: "2025",
  },
];

const WorkExperience = () => {
  return (
    <>
      {" "}
      <section className=" my-5  w-full">
        <div className="flex items-center justify-between mb-4">
          <header className="font-bold text-xl border-b-2 border-primary/20 w-fit">
            Work Experience
          </header>

          {/* Availability Badge - Boxy Rectangle */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md
            bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Open to collaborate
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((experience, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={experience.img}
                alt={experience.title + " company logo"}
                className="rounded-full h-14 w-14 object-cover"
              />
              <div className="w-full">
                <div className="font-semibold line-clamp-2 ">
                  {experience.title}
                </div>
                <div className="text-xs">{experience.role}</div>
              </div>
              <div className="font-semibold text-sm text-muted-foreground  sm:text-nowrap">
                {experience.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
