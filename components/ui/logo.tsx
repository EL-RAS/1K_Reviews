import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/public/images/logo-03.svg";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2"
      aria-label="Google Reviews NFC"
    >
      <Image
        src={LogoIcon}
        alt="Google Reviews NFC"
        width={40}
        height={40}
        priority
        className="h-7 w-7 shrink-0 sm:h-9 sm:w-9"
      />
      <span
        className={`hidden text-sm font-bold tracking-tight min-[360px]:inline sm:text-lg ${
          variant === "light" ? "text-white" : "text-gray-900"
        }`}
      >
        1k<span className="text-blue-500">_review</span>
      </span>
    </Link>
  );
}
