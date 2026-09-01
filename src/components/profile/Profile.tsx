import Image from "next/image";

import { SocialLinks } from "@/components/profile/SocialLinks";
import { profile } from "@/data/profile";

export function Profile() {
  return (
    <header className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={128}
          height={128}
          priority
          className="size-24 shrink-0 rounded-[22px] object-cover sm:size-28"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
            {profile.name}
          </h1>
          <p className="text-[16px] text-muted sm:text-[17px]">{profile.role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[19px] font-medium leading-[1.4] text-ink">
          {profile.hook}
        </p>
        <p className="text-[17px] leading-[1.6] text-body text-pretty">
          {profile.intro}
        </p>
        <p className="text-[15px] text-muted">{profile.location}</p>
      </div>
      <SocialLinks />
    </header>
  );
}
