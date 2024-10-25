"use client";

import { Button } from "@/components/ui";
import { Fault, TableResultCalc } from "@/components/shared";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Result: React.FC<Props> = ({ className }) => {
  const [isOpenSolution, setIsOpenSolution] = useState<boolean>(false);
  const [roots, setRoots] = useState<
    {
      betweenValues: number[][];
      index: number;
      maxAbsoluteValue: number[];
    }[]
  >();

  const onClickToggleSolution = () => {
    setIsOpenSolution(!isOpenSolution);
  };

  const onRootsHandler = (
    roots: {
      betweenValues: number[][];
      index: number;
      maxAbsoluteValue: number[];
    }[]
  ) => {
    setRoots(roots);
  };

  return (
    <div className={cn("max-w-[1000px]", className)}>
      {" "}
      <Button className="text-base mt-4" onClick={onClickToggleSolution}>
        {isOpenSolution ? "Отменить" : "Вычислить"}
      </Button>
      {isOpenSolution && (
        <>
          <TableResultCalc onRootsHandler={onRootsHandler} />

          {roots && <Fault roots={roots} />}
        </>
      )}
    </div>
  );
};
