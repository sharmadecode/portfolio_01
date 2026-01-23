import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import { useRef } from "react";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { SiX, SiLeetcode } from "react-icons/si";
import { RainbowButton } from "../ui/rainbow-button";
import { ArrowRight, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/seo";
import { ShinyButton } from "../ui/shiny-button";
import { InteractiveUnderline } from "../ui/interactive-underline";

const Intro = () => {
  gsap.registerPlugin(MotionPathPlugin);

  const pathLight = useRef<SVGPathElement | null>(null);
  const pathDark = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    const animatePath = (svgPath: SVGPathElement) => {
      const length = svgPath.getTotalLength();

      gsap.set(svgPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(svgPath, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "easeInOut",
      });
    };

    if (pathLight.current) animatePath(pathLight.current);
    if (pathDark.current) animatePath(pathDark.current);
  });

  return (
    <>
      <div className="flex justify-between items-center  w-full ">
        <img
          src="/logo.jpg"
          alt="Aditya Sharma logo"
          className="w-[100px] h-[100px] rounded-full object-cover"
        />

        <div className="flex   gap-2 ">
          {[
            {
              href: SOCIAL_LINKS.leetcode,
              title: "LeetCode",
              icon: SiLeetcode,
            },
            {
              href: SOCIAL_LINKS.github,
              title: "GitHub",
              icon: GithubIcon,
            },
            {
              href: SOCIAL_LINKS.linkedin,
              title: "LinkedIn",
              icon: LinkedinIcon,
            },
            {
              href: SOCIAL_LINKS.twitter,
              title: "Twitter",
              icon: SiX,
            },
          ].map(({ href, title, icon: Icon }, key) => (
            <Link href={href} key={key} target="_blank">
              {/* Old design: <Button size={"icon"} variant="outline" className=" shadow "> */}
              {/* Previous soft interaction design commented out
              <Button
                size={"icon"}
                variant="outline"
                className="shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-sm active:translate-y-0"
              >
              */}
              <Button
                size={"icon"}
                variant="outline"
                className="border-2 border-black dark:border-white bg-white dark:bg-black 
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
                transition-all duration-200
                hover:translate-x-[2px] hover:translate-y-[2px] 
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <Icon />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-4xl mt-10 font-bold">
        Hi, I’m{" "}
        <InteractiveUnderline pathClassName="stroke-[#d12e2e] dark:stroke-[#3b82f6]" className="font-bold">
          Aditya Sharma
        </InteractiveUnderline>
      </div>
      <div className=" text-xl  mt-4 ">
        <span className="italic font-medium">Final-year CSE student</span>
        <br />
        Currently building Android apps and learning DSA & machine learning
        <Link href={SOCIAL_LINKS.email} className="inline-block align-middle ml-2">
          <ShinyButton className="h-9 px-4 rounded-md text-sm gap-2 inline-flex items-center border-red-600 dark:border-green-500 text-red-600 dark:text-green-500 font-medium">
            Email Me <Mail className="w-4 h-4 animate-pulse" />{" "}
          </ShinyButton>
        </Link>
      </div>

      <div className="flex flex-wrap  gap-2 mt-6 z-20 mb-4">
        <RainbowButton asChild>
          <a
            href="/Aditya-Sharma-Resume-Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Resume
            <ArrowRight className="w-4 h-4" />
          </a>
        </RainbowButton>
      </div>
    </>
  );
};

export default Intro;
