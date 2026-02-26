import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.yourdomain.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.yourdomain.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.yourdomain.com/sermon",
      lastModified: new Date(),
    },
    {
      url: "https://www.yourdomain.com/give",
      lastModified: new Date(),
    },
    {
      url: "https://www.yourdomain.com/events",
      lastModified: new Date(),
    },
    {
      url: "https://www.yourdomain.com/contact",
      lastModified: new Date(),
    },
  ];
}
