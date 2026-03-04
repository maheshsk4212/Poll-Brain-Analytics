import Image from "next/image";

type CaseStudyCardProps = {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
};

export function CaseStudyCard({ title, challenge, approach, outcome, image }: CaseStudyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40">
      <Image src={image} alt={title} width={1600} height={900} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-[var(--text-primary)]">{title}</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-bold uppercase tracking-wider text-xs text-saffron">Challenge</dt>
            <dd className="mt-1 text-[var(--text-secondary)]">{challenge}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-xs text-saffron">Approach</dt>
            <dd className="mt-1 text-[var(--text-secondary)]">{approach}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-xs text-saffron">Outcome</dt>
            <dd className="mt-1 text-[var(--text-secondary)]">{outcome}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
