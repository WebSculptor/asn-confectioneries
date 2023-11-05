import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src, color }: { src: string; color: string }) => {
  return (
    <Link
      href="/"
      className="pointer flex items-center gap-x-1 select-none w-40"
    >
      <Image
        src={src}
        alt="ASN Confectioneries Logo"
        width={50}
        height={50}
        className="-ml-2"
      />
      <div className={cn("font-bold flex flex-col", color)}>
        <p className="text-sm md:text-md">ASN</p>
        <span className="text-xs uppercase">Confectioneries</span>
      </div>
    </Link>
  );
};

export default Logo;
