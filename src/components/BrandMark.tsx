import Link from 'next/link';
import Image from 'next/image';

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <Link className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} href="/" aria-label="Royal Blades home">
      <Image className="brand-mark__logo" src={inverse ? '/images/royal-blades-logo-transparent-white.png' : '/images/royal-blades-logo-transparent.png'} alt="" width={1983} height={793} priority />
    </Link>
  );
}
