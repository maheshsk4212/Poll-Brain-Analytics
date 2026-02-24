import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
};

export function ImagePanel({ src, alt, className, overlay = true }: ImagePanelProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200 shadow-premium", className)}>
      <Image src={src} alt={alt} width={1600} height={1000} className="h-full w-full object-cover" />
      {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" /> : null}
    </div>
  );
}
