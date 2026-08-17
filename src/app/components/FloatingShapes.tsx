type Shape = {
  kind: "star" | "heart" | "bubble";
  top: string;
  left: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
};

const defaultShapes: Shape[] = [
  { kind: "star", top: "10%", left: "6%", size: 22, color: "#ffb648", delay: "0s", duration: "6s" },
  { kind: "bubble", top: "18%", left: "92%", size: 18, color: "#7ee0c3", delay: "0.6s", duration: "7s" },
  { kind: "heart", top: "68%", left: "4%", size: 20, color: "#ff8fab", delay: "1.1s", duration: "8s" },
  { kind: "star", top: "78%", left: "88%", size: 16, color: "#afebb2", delay: "1.6s", duration: "6.5s" },
  { kind: "bubble", top: "42%", left: "96%", size: 12, color: "#9be6c8", delay: "0.3s", duration: "9s" },
  { kind: "star", top: "88%", left: "50%", size: 14, color: "#ffd66b", delay: "2s", duration: "7.5s" },
];

export default function FloatingShapes({ shapes = defaultShapes }: { shapes?: Shape[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="shape-float absolute"
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: shape.delay,
            animationDuration: shape.duration,
          }}
        >
          <ShapeIcon kind={shape.kind} size={shape.size} color={shape.color} />
        </div>
      ))}
    </div>
  );
}

function ShapeIcon({ kind, size, color }: { kind: Shape["kind"]; size: number; color: string }) {
  if (kind === "star") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 1.5l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.7 7.1-.7Z" />
      </svg>
    );
  }
  if (kind === "heart") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 20.5S3 14.9 3 8.9C3 5.9 5.4 3.5 8.3 3.5c1.7 0 3.3.8 4.3 2.2 1-1.4 2.6-2.2 4.3-2.2 2.9 0 5.3 2.4 5.3 5.4 0 6-9.2 11.6-9.2 11.6Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.55" />
      <circle cx="9" cy="9" r="2.4" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}
