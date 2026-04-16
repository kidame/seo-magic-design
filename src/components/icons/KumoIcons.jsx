// KumoIcons.jsx
// Usage par defaut : <RocketUp size={32} />
// Custom couleurs  : <RocketUp size={32} accent="#000" neon="#22c55e" />

const svg = (size) => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor",
  strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round",
});

// ---- STATS HERO ----

export const ChecklistAudit = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <polyline points="7,8 9,10 13,6" stroke={accent} strokeWidth="1.5" />
    <line x1="15" y1="8" x2="19" y2="8" opacity=".35" />
    <polyline points="7,13 9,15 13,11" stroke={neon} strokeWidth="1.5" />
    <line x1="15" y1="13" x2="19" y2="13" opacity=".35" />
    <line x1="7" y1="18" x2="16" y2="18" opacity=".2" />
  </svg>
);

export const CompetitorBar = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="1.5" y="16" width="5" height="6" rx="1" />
    <rect x="9.5" y="9" width="5" height="13" rx="1" />
    <rect x="17.5" y="13" width="5" height="9" rx="1" />
    <circle cx="12" cy="6.5" r="2" fill={neon} stroke="none" />
    <line x1="1" y1="22" x2="23" y2="22" opacity=".25" />
  </svg>
);

export const Calendar90 = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" opacity=".4" />
    <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" opacity=".4" />
    <circle cx="16" cy="13" r="1" fill="currentColor" stroke="none" opacity=".4" />
    <circle cx="8" cy="17" r="1" fill="currentColor" stroke="none" opacity=".4" />
    <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" opacity=".4" />
    <circle cx="16" cy="17" r="1.5" fill={accent} stroke="none" />
  </svg>
);

export const DirectLine = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="5" cy="8" r="3" />
    <path d="M1 20 C1 15 9 15 9 20" />
    <circle cx="19" cy="8" r="3" />
    <path d="M15 20 C15 15 23 15 23 20" />
    <line x1="9" y1="10" x2="15" y2="10" stroke={accent} strokeDasharray="2,1.5" />
    <circle cx="12" cy="10" r="1.5" fill={neon} stroke="none" />
  </svg>
);

// ---- TRUST BAR ----

export const PadLock = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="5" y="11" width="14" height="11" rx="2" />
    <path d="M8 11 V7.5 A4 4 0 0 1 16 7.5 V11" />
    <circle cx="12" cy="16" r="2" stroke={accent} fill="none" />
    <line x1="12" y1="18" x2="12" y2="20.5" stroke={accent} />
  </svg>
);

export const ServerCH = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="3" y="3" width="18" height="8" rx="1.5" />
    <rect x="3" y="13" width="18" height="8" rx="1.5" />
    <circle cx="18.5" cy="7" r="1.5" fill={neon} stroke="none" />
    <circle cx="18.5" cy="17" r="1.5" fill={neon} stroke="none" />
    <line x1="7" y1="5.5" x2="7" y2="8.5" stroke={accent} strokeWidth="2" />
    <line x1="5.5" y1="7" x2="8.5" y2="7" stroke={accent} strokeWidth="2" />
  </svg>
);

export const ChartRising = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <line x1="4" y1="20" x2="4" y2="4" opacity=".4" />
    <line x1="4" y1="20" x2="22" y2="20" opacity=".4" />
    <polyline points="6,18 10,14 14,11 18,7" stroke={accent} strokeWidth="2" />
    <circle cx="18" cy="7" r="2.5" fill={neon} stroke="none" />
  </svg>
);

export const PersonCircle = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21 C4 15 20 15 20 21" />
  </svg>
);

export const Clock24 = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="3" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="21" />
    <line x1="3" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="21" y2="12" />
    <line x1="12" y1="12" x2="12" y2="7" strokeWidth="2" />
    <line x1="12" y1="12" x2="16" y2="12" />
    <circle cx="12" cy="12" r="1.5" fill={neon} stroke="none" />
  </svg>
);

// ---- SERVICES ----

export const SearchGraph = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="10" cy="10" r="7" />
    <line x1="15.5" y1="15.5" x2="21" y2="21" />
    <polyline points="5,13 7.5,10 10,11.5 13,7" stroke={accent} strokeWidth="1.2" />
    <circle cx="13" cy="7" r="1.5" fill={neon} stroke="none" />
  </svg>
);

export const BrowserCode = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <line x1="2" y1="8" x2="22" y2="8" />
    <circle cx="5.5" cy="5.5" r="1" fill="currentColor" stroke="none" opacity=".5" />
    <circle cx="8.5" cy="5.5" r="1" fill="currentColor" stroke="none" opacity=".5" />
    <circle cx="11.5" cy="5.5" r="1" fill="currentColor" stroke="none" opacity=".5" />
    <polyline points="7,12 5,14 7,16" stroke={accent} />
    <polyline points="17,12 19,14 17,16" stroke={accent} />
    <line x1="14" y1="12" x2="10" y2="16" stroke={neon} />
  </svg>
);

export const CompassNeedle = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="3" x2="12" y2="5" opacity=".4" />
    <line x1="12" y1="19" x2="12" y2="21" opacity=".4" />
    <line x1="3" y1="12" x2="5" y2="12" opacity=".4" />
    <line x1="19" y1="12" x2="21" y2="12" opacity=".4" />
    <polygon points="12,5 14,13 12,12 10,13" fill={accent} stroke="none" />
    <polygon points="12,19 14,13 12,12 10,13" fill="currentColor" stroke="none" opacity=".2" />
    <circle cx="12" cy="12" r="1.5" fill={neon} stroke="none" />
  </svg>
);

// ---- METHODE 4 ETAPES ----

export const RadarScan = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} strokeWidth="1" className={className}>
    <circle cx="12" cy="12" r="9" opacity=".6" />
    <circle cx="12" cy="12" r="5.5" opacity=".4" />
    <circle cx="12" cy="12" r="2" opacity=".3" />
    <line x1="12" y1="3" x2="12" y2="21" opacity=".12" />
    <line x1="3" y1="12" x2="21" y2="12" opacity=".12" />
    <line x1="12" y1="12" x2="20" y2="6.5" stroke={neon} strokeWidth="1.5" />
    <circle cx="17.5" cy="8.5" r="2" fill={neon} stroke="none" opacity=".75" />
    <circle cx="12" cy="12" r="1.5" fill={accent} stroke="none" />
  </svg>
);

export const RulerMeasure = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="2" y="8" width="20" height="8" rx="1.5" />
    <line x1="6" y1="8" x2="6" y2="11" />
    <line x1="12" y1="8" x2="12" y2="11" />
    <line x1="18" y1="8" x2="18" y2="11" />
    <line x1="9" y1="8" x2="9" y2="10" opacity=".5" />
    <line x1="15" y1="8" x2="15" y2="10" opacity=".5" />
    <line x1="6" y1="14" x2="18" y2="14" stroke={accent} />
    <circle cx="6" cy="14" r="1.5" fill={accent} stroke="none" />
    <circle cx="18" cy="14" r="1.5" fill={neon} stroke="none" />
  </svg>
);

export const DocumentCheck = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <polyline points="8,9 10,11 15,7" stroke={accent} />
    <polyline points="8,15 10,17 15,13" stroke={neon} />
    <line x1="8" y1="20" x2="13" y2="20" opacity=".3" />
  </svg>
);

export const RocketUp = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <path d="M12 2 C10 5 8 10 8 14 L16 14 C16 10 14 5 12 2 Z" />
    <line x1="8" y1="14" x2="8" y2="17" />
    <line x1="16" y1="14" x2="16" y2="17" />
    <path d="M8 17 L5 19 L8 15" />
    <path d="M16 17 L19 19 L16 15" />
    <circle cx="12" cy="9" r="2" stroke={accent} fill="none" />
    <path d="M8 17 C9 20 11 21 12 22 C13 21 15 20 16 17" stroke={neon} />
  </svg>
);

// ---- FORMULES TARIFAIRES ----

export const LayeredBlocks = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <rect x="6" y="15" width="12" height="6" rx="1.5" />
    <rect x="8" y="9" width="8" height="6" rx="1.5" />
    <rect x="10" y="3" width="4" height="6" rx="1.5" stroke={accent} />
    <circle cx="12" cy="5" r="1.5" fill={neon} stroke="none" />
  </svg>
);

export const TargetBull = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <circle cx="12" cy="12" r="9" opacity=".5" />
    <circle cx="12" cy="12" r="5.5" opacity=".7" />
    <circle cx="12" cy="12" r="2.5" fill={accent} stroke="none" />
    <line x1="19" y1="5" x2="14" y2="10" stroke={accent} />
    <polyline points="19,8 19,5 16,5" stroke={accent} />
  </svg>
);

export const CrownIcon = ({ size = 24, accent = "#7C3AED", neon = "#39FF6A", className = "" }) => (
  <svg {...svg(size)} className={className}>
    <path d="M4 19 L4 10 L8 14 L12 7 L16 14 L20 10 L20 19 Z" />
    <line x1="4" y1="22" x2="20" y2="22" />
    <circle cx="12" cy="7" r="2" fill={neon} stroke="none" />
    <circle cx="4" cy="10" r="1.5" fill={accent} stroke="none" opacity=".7" />
    <circle cx="20" cy="10" r="1.5" fill={accent} stroke="none" opacity=".7" />
  </svg>
);

/*
EXEMPLES :

<RocketUp size={32} />                              // defaut Eva-01
<RocketUp size={32} neon="#7C3AED" />               // tout violet
<RocketUp size={32} accent="#fff" neon="#39FF6A" /> // sur fond sombre
<RocketUp size={32} accent="#0A0A0A" neon="#0A0A0A" /> // monochrome

MAPPING :
  Stats hero     : ChecklistAudit, CompetitorBar, Calendar90, DirectLine
  Trust bar      : PadLock, ServerCH, ChartRising, PersonCircle, Clock24
  Services       : SearchGraph, BrowserCode, CompassNeedle
  Methode etapes : RadarScan, RulerMeasure, DocumentCheck, RocketUp
  Tarifs         : LayeredBlocks, TargetBull, CrownIcon
*/
