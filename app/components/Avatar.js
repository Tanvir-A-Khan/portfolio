export default function Avatar() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="avatar-svg"
      role="img"
      aria-label="Illustrated avatar of Tanvir Ahmed Khan"
    >
      <defs>
        <linearGradient id="avatarCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1b282b" />
          <stop offset="100%" stopColor="#0c1416" />
        </linearGradient>
        <filter id="avatarGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect width="240" height="240" rx="32" fill="url(#avatarCard)" />
      <circle cx="120" cy="92" r="92" fill="#f5d547" opacity="0.16" filter="url(#avatarGlow)" />

      {/* torso */}
      <path d="M24,240 L24,206 Q24,150 120,150 Q216,150 216,206 L216,240 Z" fill="#243138" />
      <path
        d="M100,150 L120,183 L140,150"
        fill="none"
        stroke="#f5d547"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* neck */}
      <rect x="104" y="134" width="32" height="24" rx="8" fill="#e3b184" />

      {/* hair back */}
      <circle cx="120" cy="88" r="52" fill="#241a15" />

      {/* head */}
      <circle cx="120" cy="94" r="44" fill="#e3b184" />

      {/* ears */}
      <circle cx="76" cy="100" r="9" fill="#e3b184" />
      <circle cx="164" cy="100" r="9" fill="#e3b184" />

      {/* fringe */}
      <path d="M80,76 Q120,54 160,76 L160,64 Q120,44 80,64 Z" fill="#241a15" />

      {/* eyebrows */}
      <path d="M94,90 q8,-6 16,0" fill="none" stroke="#241a15" strokeWidth="3" strokeLinecap="round" />
      <path d="M130,90 q8,-6 16,0" fill="none" stroke="#241a15" strokeWidth="3" strokeLinecap="round" />

      {/* glasses — a small nod to "parser/verifier" precision */}
      <rect x="92" y="97" width="24" height="17" rx="6" fill="none" stroke="#4d9d8b" strokeWidth="3.5" />
      <rect x="124" y="97" width="24" height="17" rx="6" fill="none" stroke="#4d9d8b" strokeWidth="3.5" />
      <line x1="116" y1="105" x2="124" y2="105" stroke="#4d9d8b" strokeWidth="3.5" />
      <line x1="92" y1="103" x2="78" y2="101" stroke="#4d9d8b" strokeWidth="3.5" />
      <line x1="148" y1="103" x2="162" y2="101" stroke="#4d9d8b" strokeWidth="3.5" />

      {/* eyes */}
      <circle cx="104" cy="105.5" r="3" fill="#201812" />
      <circle cx="136" cy="105.5" r="3" fill="#201812" />

      {/* mouth */}
      <path d="M104,126 Q120,136 136,126" fill="none" stroke="#241a15" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
