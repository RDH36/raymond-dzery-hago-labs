import { FioleLogo } from "@/components/home/logo/FioleLogo";
import { SocialLinks } from "@/components/profile/SocialLinks";
import { profile } from "@/data/profile";

export function HomeFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="RDHLABS, back to top">
          <FioleLogo />
        </a>
        <SocialLinks />
        <p>
          By {profile.name}, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
