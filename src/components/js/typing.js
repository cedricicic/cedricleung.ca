import { useEffect, useRef } from "react";

export function useTypingEffect(txt, speed = 50, delay = 1000) {
  const textRef = useRef(null);

  useEffect(() => {
    let i = 0;
    let typingTimeout;

    function typeWriter() {
      if (textRef.current) {
        textRef.current.textContent = txt.slice(0, i);
      }

      if (i < txt.length) {
        i++;
        typingTimeout = setTimeout(typeWriter, speed);
      }
    }
    const delayTimeout = setTimeout(typeWriter, delay);
    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(typingTimeout);
      if (textRef.current) {
        textRef.current.textContent = "";
      }
    };
  }, [txt, speed, delay]);

  return textRef;
}
