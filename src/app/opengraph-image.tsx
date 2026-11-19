import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name}: ${profile.intro}`;

const publicFile = (path: string) =>
  readFileSync(join(process.cwd(), "public", path));
const dataUri = (path: string, mime: string) =>
  `data:${mime};base64,${publicFile(path).toString("base64")}`;

/* P1 palette (light): paper, ink and the teal of the home-page hero. */
const PAPER = "#F5F7F7";
const INK = "#0E1A1E";
const TEAL = "#0A6C84";
const BODY = "#33454A";

/* Everything sits in a centred column about 700 px wide, so a square crop
   (Discord, WhatsApp, some feeds) keeps the name and the line. */
export default async function Image() {
  const fiole = dataUri("og/fiole.png", "image/png");
  const photo = dataUri("raymond-dzery-hago.jpg", "image/jpeg");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: PAPER,
          fontFamily: "Plex",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <img src={fiole} alt="" width={88} height={150} />
          <img
            src={photo}
            alt=""
            width={130}
            height={130}
            style={{ borderRadius: 30, border: "2px solid #D9E1E3" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 26,
            fontSize: 112,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          <div style={{ color: INK }}>Raymond</div>
          <div style={{ color: TEAL }}>Dzery Hago</div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            width: 620,
            textAlign: "center",
            justifyContent: "center",
            fontSize: 35,
            lineHeight: 1.25,
            color: BODY,
          }}
        >
          {profile.intro}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plex",
          data: publicFile("og/IBMPlexSans-SemiBold.ttf"),
          weight: 600,
          style: "normal",
        },
        {
          name: "Plex",
          data: publicFile("og/IBMPlexSans-Regular.ttf"),
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
