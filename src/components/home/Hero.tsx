import Image from "next/image";

import { SocialLinks } from "@/components/profile/SocialLinks";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="wrap g hero">
      <figure className="me">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={384}
          height={384}
          priority
        />
      </figure>
      <p className="lbl">
        {profile.role} · {profile.location}
      </p>
      <h1>
        Raymond <span>Dzery Hago</span>
      </h1>
      <div className="say">
        <p className="lead">{profile.hook}</p>
        <p className="intro">{profile.intro}</p>
        <SocialLinks />
      </div>
    </section>
  );
}
