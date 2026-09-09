/**
 * Small line icons for the hero metrics. Drawn by hand in the same stroke
 * weight as the algorithm diagrams, rather than pulled from a generic icon
 * set, so the hero strip reads as part of the same visual system.
 */
export type IconName = "cameras" | "lap" | "stalks";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<IconName, React.ReactNode> = {
  cameras: (
    <>
      <rect x="3" y="7.5" width="13" height="9" rx="1" {...common} />
      <path d="M16 10.2 21 7v10l-5-3.2" {...common} />
    </>
  ),
  lap: (
    <>
      <circle cx="12" cy="12" r="8.2" {...common} />
      <path d="M12 7v5l3.4 2" {...common} />
    </>
  ),
  stalks: (
    <>
      <path d="M12 21V9" {...common} />
      <path d="M12 10 8.5 7.8M12 10l3.5-2.2M12 14.5 8.5 12.3M12 14.5l3.5-2.2" {...common} />
      <path d="M12 9 9.6 5.4 12 3l2.4 2.4z" fill="currentColor" stroke="none" />
    </>
  ),
};

export function HeroMetricIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="presentation" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
