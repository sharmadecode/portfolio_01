"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebProjectsArr } from "@/data/projects";
import ProjectsComponent from "@/components/smart-one/projects";
import { useRouter } from "next/navigation";
import ThreedButton from "../pixel-perfect/3d-button";
import Link from "next/link";

const ProjectsTabs = ({
  num1 = 0,
  num2 = undefined,
}: { num1?: number; num2?: number } = {}) => {
  const router = useRouter();

  return (
    <div className=" z-50">
      <header className="font-bold text-xl border-b-2 border-primary/20 w-fit mb-4">
        Projects
      </header>

      <div
        className={`flex flex-col  mt-2  items-start w-[95vw] sm:w-[50vw] ${num2 ? "" : "mb-10"
          } `}
      >
        <Tabs defaultValue="web-projects" id="projects-tabs">
          <TabsList className="flex-wrap">
            <TabsTrigger value="web-projects">Android Dev</TabsTrigger>
            {/* <TabsTrigger value="vibe-coded-projects">
              Prototype Studio
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="web-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>{" "}
          </TabsContent>
          {/* <TabsContent value="ai-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {AIProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent> */}
          {/* <TabsContent value="iot-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {IoTProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent> */}
        </Tabs>

        {num2 && (
          <div className=" flex justify-center mt-10  w-full">
            <Link href="/projects">
              <ThreedButton>See More</ThreedButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabs;
