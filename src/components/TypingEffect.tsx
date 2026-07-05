"use client";

import { useEffect, useState } from "react";

const words = [
  "Front-End Developer",
  "Wordpress Developer",
  "Content Creator",
  "Problem Solver",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
 
        // finished typing
        if (text === currentWord) {
          typingSpeed = 1000; // delay before deleting
          setTimeout(() => setIsDeleting(true), typingSpeed);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        // finished deleting
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h1>
      {text}
      <span className="cursor">|</span>
    </h1>
  );
}