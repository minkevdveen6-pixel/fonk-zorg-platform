import { SectionHeading } from "./SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-cream text-ink">
      <div className="absolute inset-0 fonk-aurora" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
      </div>
    </section>
  );
}
