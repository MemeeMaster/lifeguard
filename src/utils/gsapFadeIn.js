import gsap from "gsap";

const gsapFadeIn = (el) => {
  gsap.fromTo(
    el.current,
    { y: "+=20", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: el.current,
        start: "top 20%",
      },
    }
  );
};

export default gsapFadeIn;
