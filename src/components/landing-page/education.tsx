import Image from "next/image";

const data = [
  {
    img: "/logo/ggsipu.jpg",
    alt: "GGSIPU Logo",
    className: "rounded-full h-14",
    name: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    affiliation: "Affiliated: Greater Noida Institute of Technology (GNIT)",
    degree: "B.Tech in Computer Science Engineering",
    cgpa: "CGPA: 7.7",
    dates: "2022 - 2026",
  },
];

const Education = () => {
  return (
    <>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl border-b-2 border-primary/20 w-fit mb-4">
          Education
        </header>
        <div className="mt-2 flex flex-col gap-3">
          {data.map((edu, index) => (
            <div key={index} className="flex gap-4 items-start">
              <Image
                src={edu.img}
                alt={edu.alt || edu.name + " logo"}
                className={edu.className}
                width={56}
                height={56}
                priority={false}
              />
              <div className="flex-1 flex flex-col gap-0.5">
                <div className="flex justify-between items-start gap-2">
                  <div className="font-semibold line-clamp-2">{edu.name}</div>
                  <div className="font-semibold text-sm text-muted-foreground sm:text-nowrap mt-0.5">
                    {edu.dates}
                  </div>
                </div>
                {edu.affiliation && (
                  <div className="text-sm text-foreground/80">
                    {edu.affiliation}
                  </div>
                )}
                <div className="flex justify-between items-center mt-0.5">
                  <div className="text-xs text-muted-foreground font-medium">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {edu.cgpa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
