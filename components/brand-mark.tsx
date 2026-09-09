/**
 * Agentic Harvest wordmark: a wheat stalk drawn from the same lane geometry the
 * algorithm uses, next to the product name.
 *
 * This is the site's own identity. The John Deere relationship is stated in
 * words ("training partner") rather than with their logo, which is what the
 * footer disclaimer promises.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 24"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      {/* Stem */}
      <path d="M11 23V7" stroke="currentColor" strokeWidth="2" />
      {/* Grain pairs, tightening toward the tip. */}
      <path
        d="M11 8.5 6.5 6.2M11 8.5l4.5-2.3M11 13 6.5 10.7M11 13l4.5-2.3M11 17.5 6.5 15.2M11 17.5l4.5-2.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tip */}
      <path d="M11 7 8.4 3.2 11 1l2.6 2.2z" fill="currentColor" />
    </svg>
  );
}
