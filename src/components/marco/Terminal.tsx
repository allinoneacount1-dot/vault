import { useEffect, useState } from "react";
import { Activity, TrendingUp, Zap } from "lucide-react";

const tokens = [
  { sym: "SOL", chain: "SOL", px: 184.21, ch: 4.82 },
  { sym: "ETH", chain: "ETH", px: 3921.5, ch: 2.14 },
  { sym: "HYPE", chain: "HL", px: 12.84, ch: 12.3 },
  { sym: "BONK", chain: "SOL", px: 0.00003142, ch: -3.21 },
  { sym: "PEPE", chain: "ETH", px: 0.000011, ch: 6.7 },
];

const feed = [
  "[ALPHA] Whale moved 1.2M USDC into SOL/HYPE pool",
  "[SCAN] New liquidity pool detected on Base · $48k locked",
  "[SIG]  AI model flagged narrative shift: AI-agents +18%",
  "[EXEC] Sniper armed · slippage 1.2% · MEV protected",
  "[NET]  Hyperliquid OI breakout · 24h vol $9.2B",
  "[OPS]  Multi-chain scanner online · 14 chains tracked",
];

export function Terminal() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative glass-strong border-glow rounded-2xl p-4 sm:p-5 overflow-hidden scanline">
      {/* header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
          <span className="ml-3 text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
            VAULT://TERMINAL.LIVE
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-glow" />
          LIVE
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 pt-4">
        {/* chart */}
        <div className="col-span-3 glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">SOL/USDC</span>
              <span className="text-xs text-accent font-mono">+4.82%</span>
            </div>
            <Activity className="size-3 text-primary" />
          </div>
          <MiniChart tick={tick} />
        </div>

        {/* signals */}
        <div className="col-span-2 glass rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-mono">SIGNALS</span>
            <Zap className="size-3 text-primary" />
          </div>
          <div className="space-y-1.5">
            {tokens.slice(0, 4).map((t) => (
              <div key={t.sym} className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] px-1 rounded bg-white/5 text-muted-foreground">{t.chain}</span>
                  <span className="text-foreground">{t.sym}</span>
                </div>
                <span className={t.ch >= 0 ? "text-accent" : "text-red-400"}>
                  {t.ch >= 0 ? "+" : ""}{t.ch.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* feed */}
        <div className="col-span-5 glass rounded-xl p-3 h-28 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-mono">AI FEED</span>
            <TrendingUp className="size-3 text-violet-300" />
          </div>
          <div className="font-mono text-[11px] space-y-1">
            {feed.slice(0, 4).map((line, i) => (
              <div key={i} className="text-muted-foreground">
                <span className="text-primary mr-1">›</span>
                {line}
                {i === 0 && <span className="animate-blink text-primary">_</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

function MiniChart({ tick }: { tick: number }) {
  // generate deterministic candles
  const candles = Array.from({ length: 28 }, (_, i) => {
    const seed = (i + tick * 0.3) * 0.7;
    const o = 50 + Math.sin(seed) * 18 + Math.cos(seed * 0.5) * 6;
    const c = 50 + Math.sin(seed + 0.8) * 20 + Math.cos(seed * 0.3) * 5;
    const h = Math.max(o, c) + 4 + Math.random() * 2;
    const l = Math.min(o, c) - 4 - Math.random() * 2;
    return { o, c, h, l };
  });
  return (
    <svg viewBox="0 0 280 100" className="w-full h-28">
      <defs>
        <linearGradient id="up" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.2 165)" />
          <stop offset="100%" stopColor="oklch(0.7 0.18 165)" />
        </linearGradient>
        <linearGradient id="dn" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.22 25)" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 25)" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" x2="280" y1={y} y2={y} stroke="rgba(255,255,255,0.04)" />
      ))}
      {candles.map((c, i) => {
        const x = i * 10 + 2;
        const up = c.c >= c.o;
        return (
          <g key={i}>
            <line x1={x + 3} x2={x + 3} y1={c.h} y2={c.l} stroke={up ? "oklch(0.88 0.2 165 / 0.6)" : "oklch(0.7 0.22 25 / 0.6)"} strokeWidth="1" />
            <rect
              x={x}
              y={Math.min(c.o, c.c)}
              width="6"
              height={Math.max(2, Math.abs(c.c - c.o))}
              fill={up ? "url(#up)" : "url(#dn)"}
            />
          </g>
        );
      })}
    </svg>
  );
}
