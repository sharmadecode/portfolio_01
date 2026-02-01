"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export const MusicToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, sound }] = useSound("/audio/verdisquo.mp3", {
    loop: true,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
    soundEnabled: true,
  });

  const handleClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      return;
    }
    play();
    setIsPlaying(true);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative border cursor-pointer rounded-md p-2.5 dark:bg-transparent bg-background hover:bg-muted/50 transition-colors"
      role="button"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause music" : "Play music"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            // Animated music bars when playing
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-end gap-[3px] h-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-[3px] bg-foreground rounded-full"
                  animate={{
                    height: ["4px", "14px", "8px", "16px", "6px"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          ) : (
            // Music note icon when paused
            <motion.svg
              key="paused"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="8" cy="18" r="4" fill="currentColor" />
              <path d="M12 18V2l7 4" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

