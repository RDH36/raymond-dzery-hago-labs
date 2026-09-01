import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = profile.pageTitle;

const asDataUri = (publicPath: string) => {
  const file = readFileSync(join(process.cwd(), "public", publicPath));
  return `data:image/png;base64,${file.toString("base64")}`;
};

export default async function Image() {
  const icons = projects.map((project) => asDataUri(project.thumbnail));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF8",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 600, color: "#16181C" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 36, color: "#33373D" }}>{profile.hook}</div>
          <div style={{ fontSize: 26, color: "#8B9098" }}>
            {profile.location}
          </div>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {icons.map((icon) => (
            <img
              key={icon.slice(-24)}
              src={icon}
              alt=""
              width={104}
              height={104}
              style={{ borderRadius: 24 }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
