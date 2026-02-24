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
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-premium">
      <Image src={image} alt={title} width={1600} height={900} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-medium text-slate-900">Challenge</dt>
            <dd className="text-slate-600">{challenge}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Approach</dt>
            <dd className="text-slate-600">{approach}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Outcome</dt>
            <dd className="text-slate-600">{outcome}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
