"use client";

import { useEffect, useState } from "react";

const words = ["conversar", "expresarte", "comunicarte"];

export default function Typewriter() {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;
    let length = words[0].length;
    let deleting = true;

    function tick() {
      const word = words[index];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));
      let delay = deleting ? 55 : 110;
      if (length === 0) {
        deleting = false;
        index = (index + 1) % words.length;
        delay = 300;
      } else if (length === word.length && !deleting) {
        deleting = true;
        delay = 2200;
      }
      timer = setTimeout(tick, delay);
    }

    function restart() {
      clearTimeout(timer);
      index = 0;
      length = words[0].length;
      deleting = true;
      setText(words[0]);
      if (!preference.matches) timer = setTimeout(tick, 2200);
    }

    restart();
    preference.addEventListener("change", restart);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener("change", restart);
    };
  }, []);

  return (
    <>
      <span className="sr-only">conversar</span>
      <span className="typewriter" aria-hidden="true">
        <span className="typewriter-sizer">comunicarte</span>
        <span className="typewriter-text">{text}<span className="typewriter-cursor" /></span>
      </span>
    </>
  );
}
