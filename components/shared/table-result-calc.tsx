"use client";

import { iterationCalcSeidel } from "@/lib";
import { A1, A2, accuracy, b1, b2 } from "@/lib/constants";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface Props {
  onRootsHandler: (
    root: {
      betweenValues: number[][];
      index: number;
      maxAbsoluteValue: number[];
    }[]
  ) => void;
  className?: string;
}

export const TableResultCalc: React.FC<Props> = ({
  className,
  onRootsHandler,
}) => {
  const pathname = usePathname();

  const A = pathname === "/equation" ? A2 : A1;
  const b = pathname === "/equation" ? b2 : b1;

  const resultCalc = accuracy.map((item) => {
    return iterationCalcSeidel(A, b, item);
  });

  useEffect(() => {
    onRootsHandler(resultCalc);
  }, []);

  return (
    <>
      {resultCalc.map((row, index) => {
        return (
          <div key={index}>
            <h2 className="text-xl mt-7">
              {`Реализация метода Зейделя при точности ${accuracy[index].base}`}
              <sup>{accuracy[index].exponent}</sup>
            </h2>
            <Table className={cn("mt-1", className)}>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">n</TableHead>
                  {A.map((_, index) => {
                    return (
                      <TableHead key={index} className="text-center">{`x${
                        index + 1
                      }`}</TableHead>
                    );
                  })}

                  <TableHead className="text-right">
                    <p className="flex justify-end ">
                      max |{" "}
                      <div className="flex gap-2 ">
                        <p className="flex gap-1">
                          x{" "}
                          <span className="flex flex-col items-center justify-center gap-2">
                            <sup>k</sup> <sub>i</sub>
                          </span>
                        </p>{" "}
                        <span>-</span>{" "}
                        <p className="flex gap-1">
                          x{" "}
                          <span className="flex flex-col items-start justify-center gap-2">
                            <sup>k - 1</sup> <sub>i</sub>
                          </span>
                        </p>{" "}
                      </div>{" "}
                      |
                    </p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={index} className="text-nowrap">
                  <TableCell key={index} className="text-left">
                    {0}
                  </TableCell>
                  {b.map((el, index) => {
                    return (
                      <TableCell key={index} className="text-right">
                        {el}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {Array(row.betweenValues.length)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <TableRow key={index} className="text-nowrap">
                        <TableCell className="text-left">{index + 1}</TableCell>
                        {row.betweenValues[index].map((el, index) => {
                          return (
                            <TableCell key={index} className="text-right">
                              {el}
                            </TableCell>
                          );
                        })}

                        <TableCell key={index} className="text-right">
                          {row.maxAbsoluteValue[index]}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        );
      })}
    </>
  );
};
