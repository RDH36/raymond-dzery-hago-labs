import { blogMetadata } from "@/components/blog/blogMetadata";
import { LegalPage, LegalSection } from "@/components/blog/LegalPage";
import { profile } from "@/data/profile";

/* Same reason as the home page: the footer year is rendered at build time. */
export const revalidate = 86400;

const title = "Privacy Policy";
const description =
  "What dzeryhago.com collects when you visit or write to me, why, who else handles it, how long it is kept, and your rights.";

export const metadata = blogMetadata("/privacy", "website", title, description);

export default function PrivacyPage() {
  return (
    <LegalPage
      title={title}
      lede={`This policy covers dzeryhago.com: my portfolio, the blog, and the messages you send me. I am ${profile.name}, an independent developer based in Antananarivo, Madagascar, and I am the person responsible for this website. There is no company behind it.`}
    >
      <LegalSection title="What this site collects">
        <p>
          <strong>When you visit.</strong> The site has no account, no sign-up form and no
          comments. Two analytics tools record how the site is used:
        </p>
        <ul>
          <li>
            <strong>PostHog</strong> records the pages you view, when you leave a page, and the
            links and buttons you click (for example, a click on a Play Store link). It also
            records how you move through a page: your clicks and mouse movement feed heatmaps.
            It also takes page speed measurements. It receives the technical data
            your browser sends: your IP address, which PostHog stores, your browser, device type,
            screen size and the page that sent you here. PostHog keeps a profile for each
            visitor, linked to a random identifier stored in a cookie and in your browser&apos;s
            local storage, so that two visits from the same browser count as one visitor. The
            same PostHog project also receives data from my app Hifety.
          </li>
          <li>
            <strong>Vercel Web Analytics</strong> counts page views. It does not use cookies and
            does not keep a visitor identifier from one day to the next.
          </li>
        </ul>
        <p>
          <strong>When you write to me.</strong> If you email me, I receive your email address,
          your name if you include it, and what you write.
        </p>
        <p>
          <strong>Your theme choice.</strong> If you switch between light and dark mode, the site
          saves that choice in your browser&apos;s local storage. It never leaves your device.
        </p>
      </LegalSection>
      <LegalSection title="Why I use it">
        <ul>
          <li>
            To see which pages and projects people read and click, so I know what to build and
            write next.
          </li>
          <li>To see how people move through the pages and to find what breaks.</li>
          <li>To answer your messages.</li>
          <li>To keep the site running and protect it from abuse.</li>
        </ul>
        <p>I don&apos;t sell your data and I don&apos;t use it for advertising.</p>
      </LegalSection>
      <LegalSection title="Who else handles it">
        <ul>
          <li>
            <strong>Vercel</strong> hosts the site and runs Vercel Web Analytics. Like any host,
            it processes your IP address and request logs to deliver the pages. Vercel is based
            in the United States.
          </li>
          <li>
            <strong>PostHog</strong> processes the analytics described above, on servers in the United States.
          </li>
          <li>
            <strong>My email provider</strong> stores the messages you send me.
          </li>
        </ul>
        <p>
          Data may be processed outside your country, including in the United States. These
          providers apply their own safeguards, such as standard contractual clauses for data
          coming from the European Union.
        </p>
        <p>I would only share data beyond this list if the law required it.</p>
      </LegalSection>
      <LegalSection title="How long it is kept">
        <ul>
          <li>
            Analytics data is kept for the retention period of each provider&apos;s plan, and I
            don&apos;t keep copies.
          </li>
          <li>Emails are kept as long as the conversation is useful, then deleted on request.</li>
        </ul>
      </LegalSection>
      <LegalSection title="Your choices and rights">
        <p>
          You can block or delete cookies and local storage in your browser settings, or use a
          tracker blocker. The site works the same without them.
        </p>
        <p>
          You can ask me to see, correct or delete the personal data I hold about you, or object
          to its use. If you live in the European Union or the United Kingdom, the GDPR gives you
          these rights, plus the right to data portability and to complain to your data
          protection authority. Write to the address below; I answer within 30 days.
        </p>
      </LegalSection>
      <LegalSection title="Children">
        <p>
          This site is not aimed at children under 16, and I don&apos;t knowingly collect their
          data.
        </p>
      </LegalSection>
      <LegalSection title="Changes">
        <p>If this policy changes, I will update this page and the date at the top.</p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <br />
          {profile.name}, Antananarivo, Madagascar
        </p>
      </LegalSection>
    </LegalPage>
  );
}
