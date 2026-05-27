export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative grid place-items-center rounded-md border-glow"
        style={{ width: size + 8, height: size + 8 }}
      >
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
          <defs>
            <linearGradient id="chrome" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#c8d4dc" />
              <stop offset="55%" stopColor="#6f7a83" />
              <stop offset="100%" stopColor="#eef3f6" />
            </linearGradient>
          </defs>
          <path
            d="M4 26 V8 l6 10 6-10 6 10 6-10 v18"
            stroke="url(#chrome)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span className="absolute inset-0 rounded-md animate-pulse-glow"
              style={{ boxShadow: "inset 0 0 18px rgba(0,240,255,0.25)" }} />
      </div>
      <div className="leading-none">
        <div className="text-chrome font-display font-semibold tracking-[0.18em] text-[13px]">
          MARCOVAULT
        </div>
        <div className="text-[9px] tracking-[0.35em] text-muted-foreground mt-1">
          MULTI-CHAIN · ALPHA
        </div>
      </div>
    </div>
  );
}
