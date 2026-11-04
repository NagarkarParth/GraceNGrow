"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        lerp: 0.08,
        smoothWheel: true,
        respectReducedMotion: true,
        prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
      }}
    >
      {children}
    </ReactLenis>
  );
}
