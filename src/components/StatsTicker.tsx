"use client";
import { useEffect, useRef } from "react";

const stats = [
  {
    title: "RIDES / MONTH",
    value: "600+",
    subtitle: "employees",
    desc: "Helping companies manage thousands of safe, reliable trips."
  },
  {
    title: "ON-TIME RATE",
    value: "99%",
    subtitle: "",
    desc: "Punctual pickups and drop-offs every day."
  },
  {
    title: "RIDER SATISFACTION",
    value: "4.8/5",
    subtitle: "",
    desc: "Rated by B2B clients and their employees."
  },
  {
    title: "COST REDUCTION",
    value: "30%",
    subtitle: "less",
    desc: "Reduced employee commute cost/time by 30%."
  }
];

export default function StatsTicker() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let animationFrame: number;
    let offset = 0;

    const step = () => {
      offset -= 0.5;
      list.style.transform = `translateY(${offset}px)`;
      const first = list.children[0] as HTMLElement;
      if (first && first.getBoundingClientRect().bottom <= 0) {
        list.appendChild(first);
        offset += first.offsetHeight;
      }

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="stats-slider">
      <div className="stats-dynamic" ref={listRef}>
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <h3>{s.title}</h3>
            <h1>{s.value} <span>{s.subtitle}</span></h1>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
