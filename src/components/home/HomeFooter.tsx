import { FioleLogo } from "@/components/home/logo/FioleLogo";
import { SocialLinks } from "@/components/profile/SocialLinks";
import { profile } from "@/data/profile";

/** Shared by the home page, the blog and the legal pages: the logo and the
    seven links, then the site's own pages and the credit line. */
export function HomeFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="f1">
          <a className="logo" href="#top" aria-label="RDHLABS, back to top">
            <FioleLogo />
          </a>
          <SocialLinks />
        </div>
        <div className="f2">
          <ul className="legal" aria-label="This site">
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Contact</a>
            </li>
          </ul>
          <p className="by">
            By {profile.name}, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
