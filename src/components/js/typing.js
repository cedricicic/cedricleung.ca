import { useEffect, useRef } from "react";

export function useTypingEffect(txt, speed = 50) {
  const textRef = useRef(null);

  useEffect(() => {
    let i = 0;

    function typeWriter() {
      if (textRef.current) {
        textRef.current.textContent = txt.slice(0, i);
      }

      if (i < txt.length) {
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    return () => {
      if (textRef.current) {
        textRef.current.textContent = "";
      }
    };
  }, [txt, speed]); 

  return textRef;
}
