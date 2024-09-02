import React, { useEffect, useRef, useState } from "react";
import "./aboutLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function AboutLeft() {
  const whatsappNumber = "+971542460219"; // Without the '+' sign
  const message = "Hello, I would like to know more"; // Optional message
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutLeftRef = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add("animate");
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutLeftRef.current) {
      observer.observe(aboutLeftRef.current);
    }

    return () => {
      if (aboutLeftRef.current) {
        observer.unobserve(aboutLeftRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="AboutLeft-Container container" ref={aboutLeftRef}>
      <div className="AboutLeft-heading">
        <h1 className="AboutLeft-heading AboutLeft-heading-1">MOHAMED</h1>
        <h1 className="AboutLeft-heading AboutLeft-heading-1">HACHIMI</h1>
      </div>
      <ul className="AboutLeft-ul">
        <li className="AboutLeft-li">
          Senior Investment Advisor with International Experience
        </li>
        <li className="AboutLeft-li">
          Expert in Off-Plan market, Secondary Real-Estate
        </li>
        <li className="AboutLeft-li">Contracts with all the Major Developers in UAE</li>
      </ul>
      <div className="AboutLeft-link">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me in 1 click
          <FontAwesomeIcon className="AboutLeft-sendIcon" icon={faPaperPlane} />
        </a>
      </div>
    </div>
  );
}

export default AboutLeft;
