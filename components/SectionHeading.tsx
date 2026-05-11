type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div>
      <p className="spark-mark text-sm font-black uppercase tracking-[0.12em] text-pine">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/72">{body}</p> : null}
    </div>
  );
}
