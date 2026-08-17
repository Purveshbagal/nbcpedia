type MascotProps = {
  className?: string;
};

export default function Mascot({ className = "" }: MascotProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`mascot-bounce ${className}`}
      role="img"
      aria-label="NBC Pedia's friendly bear mascot waving hello"
    >
      <ellipse cx="100" cy="188" rx="46" ry="8" fill="#33b53a" opacity="0.12" />

      {/* legs */}
      <circle cx="80" cy="165" r="16" fill="#46cf4d" />
      <circle cx="120" cy="165" r="16" fill="#46cf4d" />
      <circle cx="80" cy="170" r="9" fill="#f3ddba" />
      <circle cx="120" cy="170" r="9" fill="#f3ddba" />

      {/* body */}
      <ellipse cx="100" cy="128" rx="46" ry="42" fill="#71db76" />
      <ellipse cx="100" cy="136" rx="24" ry="20" fill="#f3ddba" />

      {/* right arm (still, holding heart) */}
      <circle cx="140" cy="122" r="14" fill="#46cf4d" />
      <path
        d="M148 108c4-6 13-6 16-1 3 5-1 11-8 14-4 2-9 1-11-3-2-4-1-8 3-10Z"
        fill="#ff6f91"
      />

      {/* left arm (waving) */}
      <g className="mascot-arm">
        <circle cx="58" cy="110" r="13" fill="#46cf4d" />
      </g>

      {/* ears */}
      <circle cx="70" cy="76" r="17" fill="#71db76" />
      <circle cx="130" cy="76" r="17" fill="#71db76" />
      <circle cx="70" cy="76" r="8" fill="#f3ddba" />
      <circle cx="130" cy="76" r="8" fill="#f3ddba" />

      {/* head */}
      <circle cx="100" cy="92" r="44" fill="#71db76" />
      <ellipse cx="100" cy="100" rx="26" ry="22" fill="#f3ddba" />

      {/* face */}
      <circle cx="88" cy="90" r="4.5" fill="#234235" />
      <circle cx="112" cy="90" r="4.5" fill="#234235" />
      <circle cx="89.5" cy="88.5" r="1.4" fill="#fff" />
      <circle cx="113.5" cy="88.5" r="1.4" fill="#fff" />
      <ellipse cx="100" cy="101" rx="5" ry="3.6" fill="#5a3a2a" />
      <path d="M100 104c-4 4-10 4-14 0" stroke="#5a3a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 104c4 4 10 4 14 0" stroke="#5a3a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="76" cy="98" rx="5" ry="3.2" fill="#ff9db3" opacity="0.7" />
      <ellipse cx="124" cy="98" rx="5" ry="3.2" fill="#ff9db3" opacity="0.7" />

      {/* nurse cap */}
      <path d="M74 58a26 26 0 0 1 52 0c0 4-3 8-8 8H82c-5 0-8-4-8-8Z" fill="#ffffff" stroke="#e4f7e3" strokeWidth="1.5" />
      <rect x="95" y="48" width="10" height="3.2" rx="1.4" fill="#2ab98b" />
      <rect x="98.4" y="44.6" width="3.2" height="10" rx="1.4" fill="#2ab98b" />
    </svg>
  );
}
