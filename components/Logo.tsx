type LogoProps = {
  size?: number;
  animated?: boolean;
  className?: string;
};

/**
 * TYT signature mark — a geometric hourglass badge.
 * Built entirely from typography-adjacent shapes (no raster image):
 * the hourglass reads literally as "Take Your Time", ringed like a
 * coffee stamp, in the brand's purple + gold.
 *
 * This stands in for the official TYT logo file. Drop the real logo
 * into /public and swap the <svg> markup below when it's available —
 * every place the mark is used (Navbar, Hero, Footer, favicon) reads
 * from this one component.
 */
export function LogoMark({ size = 44, animated = false, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="TYT mark"
    >
      <defs>
        <linearGradient id="tyt-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#54287E" />
          <stop offset="100%" stopColor="#26103C" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#tyt-badge)" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#E9B94F" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#E9B94F" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 5" />

      {/* Hourglass */}
      <g stroke="#E9B94F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M34 28 H66 L52 50 L66 72 H34 L48 50 Z" />
      </g>
      <line x1="50" y1="30" x2="50" y2="42" stroke="#F1CD79" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      {animated ? (
        <circle cx="50" cy="48" r="1.6" fill="#F1CD79">
          <animate attributeName="cy" values="34;66" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;1;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
      ) : null}
    </svg>
  );
}

export function LogoLockup({
  size = 40,
  animated = false,
  tone = "dark",
  className = "",
}: LogoProps & { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-ink" : "text-cream";
  const sub = tone === "dark" ? "text-plum-600" : "text-gold-300";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={size} animated={animated} />
      <div className="leading-none">
        <div className={`font-display font-bold tracking-wide text-lg ${text}`}>TYT</div>
        <div className={`font-body text-[9px] tracking-[0.28em] uppercase ${sub}`}>
          Take Your Time
        </div>
      </div>
    </div>
  );
}
