"use client";

import { usePathname } from "next/navigation";

export default function BackgroundWrapper() {
  const pathname = usePathname();

  function getBackground() {
    if (pathname.startsWith("/sermons")) return "images/bg/sermons.jpg";
    if (pathname.startsWith("/about")) return "images/bg/about.jpg";
    if (pathname.startsWith("/give")) return "images/bg/give.jpg";
    if (pathname.startsWith("/contact")) return "images/bg/contact.jpg";
    if (pathname.startsWith("/events")) return "images/bg/events.jpg";
    if (pathname.startsWith("/kingdom-meetups")) return "images/bg/km.jpg"
    return "images/bg/main.jpg"; // default (home)
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[6000ms] ease-linear"
        style={{ backgroundImage: `url(${getBackground()})`,
        backgroundAttachment: "fixed" }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
    </div>
  );
}
