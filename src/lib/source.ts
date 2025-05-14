// .source folder will be generated when you run `next dev`
import { createMDXSource } from "fumadocs-mdx";
import { docs, meta } from "../../.source";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { icons } from "lucide-react";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      return createElement(icons.Library);
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
