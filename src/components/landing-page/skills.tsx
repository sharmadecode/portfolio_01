import React from "react";
import { Badge } from "../ui/badge";
import {
  SiKotlin,
  SiPython,
  SiCplusplus,
  SiAndroid,
  SiAndroidstudio,
  SiMaterialdesign,
  SiTensorflow,
  SiOnnx,
  SiOpencv,
  SiSpringboot,
  SiFirebase,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiLeetcode,
} from "react-icons/si";
import { FaJava, FaTerminal } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },

  { name: "Jetpack Compose", icon: SiAndroid, color: "text-green-500" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-600" },
  { name: "Material Design", icon: SiMaterialdesign, color: "text-sky-500" },

  { name: "TensorFlow Lite", icon: SiTensorflow, color: "text-orange-500" },
  { name: "ONNX", icon: SiOnnx, color: "text-blue-600" },
  { name: "Computer Vision", icon: SiOpencv, color: "text-green-500" },

  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },

  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-700 dark:text-blue-400",
  },

  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
  {
    name: "VS Code",
    icon: VscCode,
    color: "text-blue-500",
  },
  { name: "Google Colab", icon: SiGooglecolab, color: "text-orange-400" },

  { name: "DSA (400+)", icon: SiLeetcode, color: "text-yellow-600" },
  { name: "OS", icon: FaTerminal, color: "text-gray-700 dark:text-gray-300" },
];

const Skills = () => {
  return (
    <section className="my-5 w-full">
      <header className="font-bold text-xl border-b-2 border-primary/20 w-fit mb-4">
        Skills
      </header>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map(({ name, icon: Icon, color }) => (
          <Badge
            key={name}
            className="rounded-sm  shadow-xs border-dashed  flex items-center gap-2  "
            variant="outline"
          >
            <Icon className={`w-4 h-4 ${color}`} />
            {name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
