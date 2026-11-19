import { blogMetadata } from "@/components/blog/blogMetadata";
import { LegalPage, LegalSection } from "@/components/blog/LegalPage";
import { profile } from "@/data/profile";

/* Same reason as the home page: the footer year is rendered at build time. */
export const revalidate = 86400;

const title = "Terms of Use";
const description =
  "The terms that apply to dzeryhago.com: what the site is, how you can use its content, external links, no guarantee, and governing law.";

export const metadata = blogMetadata("/terms", "website", title, description);

export default function TermsPage() {
  return (
    <LegalPage
      title={title}
      lede={`These terms apply to dzeryhago.com, the personal website of ${profile.name}, an independent developer based in Antananarivo, Madagascar. By using the site, you accept them. If you don't, please don't use the site.`}
    >
      <LegalSection title="What the site is">
        <p>
          A portfolio and a blog. It presents my apps and games and the way I work. It sells
          nothing and has no user accounts.
        </p>
        <p>
          My apps and games have their own terms and privacy policies, published on their own
          sites or in their store listings. These terms don&apos;t cover them.
        </p>
      </LegalSection>
      <LegalSection title="Content">
        <p>
          Unless stated otherwise, the texts, images, diagrams, logos and code shown on this site
          belong to me.
        </p>
        <p>
          You may read, share links to, and quote short extracts of the content, with credit and
          a link to the original page. You may reuse the code examples in the blog posts in your
          own projects. For anything else, such as republishing a full article or using my logos,
          ask me first.
        </p>
        <p>
          Names and logos of third-party products (for example Claude Code, Discord or the Play
          Store) belong to their owners. Mentioning them doesn&apos;t mean they endorse this
          site.
        </p>
      </LegalSection>
      <LegalSection title="External links">
        <p>
          The site links to other websites: app stores, GitHub, social networks, tools I write
          about. I don&apos;t control them and I am not responsible for their content, their
          availability or how they handle your data. Their own terms apply when you visit them.
        </p>
      </LegalSection>
      <LegalSection title="No guarantee">
        <p>
          I write the blog from my own experience. It is not professional, legal or financial
          advice. Commands and configuration examples are provided as they are; check them before
          running them on your own machine, and keep backups.
        </p>
        <p>
          I try to keep the site accurate and available, but I don&apos;t guarantee that it is
          complete, up to date, error free or always online. As far as the law allows, I am not
          liable for any loss or damage resulting from the use of the site or of its content.
        </p>
      </LegalSection>
      <LegalSection title="Acceptable use">
        <p>
          Don&apos;t try to break, overload or gain unauthorised access to the site, and
          don&apos;t use automated tools in a way that disrupts it.
        </p>
      </LegalSection>
      <LegalSection title="Changes">
        <p>
          I may update these terms. The date at the top shows the latest version, and continuing
          to use the site means you accept it.
        </p>
      </LegalSection>
      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of Madagascar. Any dispute that can&apos;t be
          settled amicably goes to the competent courts of Antananarivo. This doesn&apos;t remove
          any mandatory consumer protection you have in your own country.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
