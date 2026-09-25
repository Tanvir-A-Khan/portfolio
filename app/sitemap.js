import { work } from "../data/site";
import { slugify } from "../lib/slug";

const BASE_URL = "https://tanvirkhan.vercel.app";

export default function sitemap() {
  const projectRoutes = work.map((p) => ({
    url: `${BASE_URL}/work/${slugify(p.name)}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
