"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./gridMotionBackground.module.css";

const TOTAL_ITEMS = 28;

function isVideoItem(item) {
  return (
    typeof item === "string" &&
    /\.(mp4|webm|ogg)(\?.*)?$/i.test(item)
  );
}

function isImageItem(item) {
  return (
    typeof item === "string" &&
    (/\.(png|jpe?g|webp|gif|avif|svg)(\?.*)?$/i.test(item) || item.startsWith("http"))
  );
}

function toSafeUrl(url) {
  if (typeof url !== "string") return "";
  return encodeURI(url).replace(/\(/g, "%28").replace(/\)/g, "%29");
}

export default function GridMotionBackground({ items = [], gradientColor = "#000000" }) {
  const rowRefs = useRef([]);
  const mouseXRef = useRef(0);

  const fallbackItems = Array.from({ length: TOTAL_ITEMS }, (_, i) => `Item ${i + 1}`);
  const sourceItems = items.length > 0 ? items : fallbackItems;
  const combinedItems = Array.from({ length: TOTAL_ITEMS }, (_, i) => sourceItems[i % sourceItems.length]);

  useEffect(() => {
    mouseXRef.current = window.innerWidth / 2;

    const handleMouseMove = (event) => {
      mouseXRef.current = event.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 260;
      const baseDuration = 0.85;
      const inertiaFactors = [0.6, 0.42, 0.3, 0.22];
      const offset = (mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? -1 : 1;
        const moveAmount = offset * direction;

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updateMotion);
    };
  }, []);

  return (
    <div className={styles.gridMotionRoot} aria-hidden="true">
      <section
        className={styles.intro}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${gradientColor} 0%, transparent 70%)`,
        }}
      >
        <div className={styles.container}>
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={styles.row}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((__, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const safeUrl = typeof content === "string" ? toSafeUrl(content) : "";
                return (
                  <div key={`item-${rowIndex}-${itemIndex}`} className={styles.rowItem}>
                    <div className={styles.rowItemInner}>
                      {isVideoItem(content) ? (
                        <video
                          className={styles.media}
                          src={safeUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      ) : isImageItem(content) ? (
                        <div
                          className={styles.media}
                          style={{ backgroundImage: `url("${safeUrl}")` }}
                        />
                      ) : (
                        <div className={styles.itemContent}>{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
