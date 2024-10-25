"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={cn("flex items-center gap-2 flex-wrap", className)}>
        <h1 className="text-2xl font-bold">Уравнение:</h1>
        <Image
          alt="Уравнение"
          src={pathname === "/equation" ? `/equation2.png` : `/equation.png`}
          height={400}
          width={400}
        />
      </div>
    </>
  );
};
