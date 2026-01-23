"use client";

import {
  FileText,
  Github,
  Instagram,
  LucideLinkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SOCIAL_LINKS } from "@/config/seo";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const lastScroll = useRef<number | null>(null);
  const navBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navBar.current) {
      return;
    }

    const transformNavBar = () => {
      const currentY = window.scrollY;
      if (lastScroll.current === null || navBar.current === null) {
        lastScroll.current = currentY;
        return;
      }

      if (currentY > lastScroll.current) {
        navBar.current.style.transform = "translateY(-100%)";
      } else {
        navBar.current.style.transform = "translateY(0)";
      }

      lastScroll.current = currentY;
    };

    window.addEventListener("scroll", transformNavBar);

    return () => {
      window.removeEventListener("scroll", transformNavBar);
    };
  }, []);

  return (
    <div className=" fixed top-0  right-1/2 translate-x-1/2">
      <div
        ref={navBar}
        className="    h-[80px] flex justify-between items-center   w-[95vw] sm:w-[70vw]   transition-transform duration-300"
      >
        <div className="flex items-center mix-blend-darken ">
          <img
            src="/cartoon-logo.jpg"
            alt="Aditya Sharma logo"
            className="    w-10 rounded-full"
          />
        </div>
        <div className="flex   gap-6 max-sm:gap-4 ">
          {[
            {
              href: SOCIAL_LINKS.github,
              title: "GitHub",
              icon: Github,
            },
            {
              href: SOCIAL_LINKS.linkedin,
              title: "LinkedIn",
              icon: LucideLinkedin,
            },
            {
              href: SOCIAL_LINKS.twitter,
              title: "Twitter",
              icon: Twitter,
            },
            {
              href: SOCIAL_LINKS.leetcode,
              title: "LeetCode",
              icon: SiLeetcode,
            },
            {
              href: SOCIAL_LINKS.email,
              title: "Email",
              icon: Mail,
            },
          ].map(({ href, title, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
