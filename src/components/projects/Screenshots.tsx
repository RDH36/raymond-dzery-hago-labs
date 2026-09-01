import Image from "next/image";

import { ScreenshotStrip } from "@/components/projects/ScreenshotStrip";
import type { Screenshot } from "@/data/projects";

export function Screenshots({
  screenshots,
  label,
}: {
  screenshots: Screenshot[];
  label: string;
}) {
  return (
    <ScreenshotStrip label={label}>
      {screenshots.map((shot) => (
        <li key={shot.src} className="shrink-0 snap-start">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="200px"
            className="h-auto w-[200px] rounded-[12px] border border-rule"
          />
        </li>
      ))}
    </ScreenshotStrip>
  );
}
