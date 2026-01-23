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
        <header className="font-bold text-xl border-b-2 border-primary/20 w-fit mb-4">
          Work Experience
        </header>
        <div className="mt-2 flex flex-col gap-3">
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
