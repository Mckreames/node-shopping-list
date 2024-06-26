import React, { useEffect } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    const animateBubble = (x) => {
      const wrapper = document.getElementById("bubble-wrapper");
      const bubble = document.createElement("div");

      bubble.className = "bubble";

      bubble.style.left = `${x}px`;

      wrapper.appendChild(bubble);

      setTimeout(() => wrapper.removeChild(bubble), 2000);
    };

    const handleMouseMove = (e) => animateBubble(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="sheet1">
      <h1 className="pt-5 mt-2 mb-5 not-found-head">
        Uh-Oh... I hope we didn't break anything!
      </h1>
      <h3 className="mb-0 not-found-text">
        Well this is embarassing 😅 This page no Longer exists!
      </h3>
      <h3 className="pb-5 not-found-text">
        Need help finding your way? Maybe one of these solutions will work for
        you:
      </h3>
      <ul className="offset-3 col-6 text-start">
        <li className="pb-4">
          If a link sent you here, that may mean the link is no longer a working
          link.
        </li>
        <li className="pb-4">
          If you've manually entered the URL, you may have gotten it wrong
        </li>
        <li className="pb-4">
          Click{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="fancy-link">here</a>
          </Link>{" "}
          to visit our homepage
        </li>
        <li className="pb-4">
          If you don't know what Grace Note is, click{" "}
          <Link to="/about" style={{ textDecoration: "none" }}>
            <a className="fancy-link">here</a>
          </Link>{" "}
          to learn all about our FREE gospel music app and all the features that
          come along with it!
        </li>
        <li className="pb-4">
          If all else fails, our servers may be down 😣 Check back on us a
          little later. We promise we won't take too long{" "}
        </li>
        <li className="pb-4">Hey Zsolt! 👋🏽👋🏽👋🏽</li>
      </ul>
      <div id="bubble-wrapper"></div>
    </div>
  );
}
