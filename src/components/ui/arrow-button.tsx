import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArrowButton({
  link,
  placeholder,
  color,
  isDownload,
  ...rest
}: any) {
  const router = useRouter();

  if (isDownload) {
    return (
      <Button
        variant="arrow"
        asChild
        className={`${color ? "border-[#a6c9a9]" : "border-[#8da7ff]"} `}
        {...rest}
      >
        <a href={link} download target="_blank" rel="noopener noreferrer">
          {placeholder}
          <ArrowRight className="w-4 absolute right-4  translate-x-[-20px]  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
        </a>
      </Button>
    );
  }

  return (
    <Button
      variant="arrow"
      onClick={() => router.push(`${link}`)}
      className={`${color ? "border-[#a6c9a9]" : "border-[#8da7ff]"} `}
      {...rest}
    >
      {placeholder}
      <ArrowRight className="w-4 absolute right-4  translate-x-[-20px]  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
    </Button>
  );
}
