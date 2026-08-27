import Image from "next/image";
import Link from "next/link";

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Plan A home">
      <Image
        src="/images/plan-a/plan-a-icon.webp"
        width={52}
        height={48}
        alt=""
        className="brand-mark"
        priority
      />
      <span className="brand-copy">
        <span className="brand-name">PLAN A</span>
        {compact ? null : <span className="brand-line">Event management</span>}
      </span>
    </Link>
  );
}
