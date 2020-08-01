import React, { useRef, useEffect } from "react";
import "./App.scss";
import image from "./Images/image_palmier.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

function Image_anim() {
  let container = useRef(null);
  let image_gsap = useRef(null);
  let main_container = useRef(null);
  let imageReveal = document.getElementsByClassName("div_after");
  /*
  // j'ai essayer plusieurs truc mais rien n'a marché : tempis j'ai contourné le problème
  let imageReveal = window.getComputedStyle(
    document.querySelector(".image_container"),
    ":after"
  );*/

  //CSSRulePlugin.getRule(".image_container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    console.log(imageReveal);
    tl.to(main_container, 0.001, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, {
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(image_gsap, 1.4, {
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.6,
      });
  });
  return (
    <section ref={(el) => (main_container = el)} className="section_image_anim">
      <div ref={(el) => (container = el)} className="image_container">
        <div className="div_after"></div>
      </div>
      <div ref={(el) => (container = el)} className="image_container">
        <img ref={(el) => (image_gsap = el)} src={image} alt="" />
      </div>
    </section>
  );
}

export default Image_anim;
