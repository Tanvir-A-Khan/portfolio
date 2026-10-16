const icons = {
  GitHub: "github.svg",
  LinkedIn: "linkedin.svg",
  Codeforces: "codeforces.svg",
  CodeChef: "codechef.svg",
  HackerRank: "hackerrank.svg",
  VJudge: "vjudge.ico",
  WhatsApp: "whatsapp.svg",
  Email: "email.svg",
};

export default function BrandIcon({ name }) {
  const file = icons[name];
  if (!file) return null;
  return <span className="social-icon" aria-hidden="true"><img src={`/icons/${file}`} alt="" width={16} height={16} /></span>;
}
