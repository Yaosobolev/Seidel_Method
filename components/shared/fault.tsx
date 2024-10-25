"use client";

import { calcFault } from "@/lib";
import { A1, A2, accuracy, b1, b2 } from "@/lib/constants";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  roots: {
    betweenValues: number[][];
    index: number;
    maxAbsoluteValue: number[];
  }[];
  className?: string;
}

export const Fault: React.FC<Props> = ({ roots, className }) => {
  const pathname = usePathname();
  const A = pathname === "/equation" ? A2 : A1;
  const b = pathname === "/equation" ? b2 : b1;

  const faults = roots.map((item, index) => {
    return calcFault(A, item.betweenValues[index], b);
  });

  return (
    <>
      {faults.map((row, index) => {
        return (
          <>
            <h2 className="text-xl mt-7">
              {`Оценка погрешности метода по правой части при точности  ${accuracy[index].base}`}
              <sup>{accuracy[index].exponent}</sup>
            </h2>
            <Table className={cn("mt-1", className)}>
              <TableBody className="text-nowrap">
                <TableRow className="flex items-center">
                  <TableCell className="font-medium">
                    <i className="text-sm">
                      {"b\u0303"} (Возмущенная правая часть)
                    </i>
                  </TableCell>
                  <i className="text-sm">=</i>
                  <TableCell className="font-medium flex gap-2">
                    {row.disturbedRightSide.map((el, index) => {
                      return (
                        <i key={index}>
                          {el}
                          {index === row.disturbedRightSide.length - 1
                            ? ""
                            : ","}
                        </i>
                      );
                    })}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-center">
                  <TableCell className="font-medium">
                    <i className="text-sm text-nowrap">
                      {"\u03B4"}b (Вектор b)
                    </i>
                  </TableCell>
                  <i className="text-sm">=</i>
                  <TableCell className="font-medium flex gap-2">
                    {row.vectorB.map((el, index) => {
                      return (
                        <i key={index}>
                          {el}
                          {index === row.vectorB.length - 1 ? "" : ","}
                        </i>
                      );
                    })}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-center">
                  <TableCell className="font-medium">
                    <i className="text-sm">
                      ||{"\u03B4"}b|| (Eвклидовая норма вектор b)
                    </i>
                  </TableCell>
                  <i className="text-sm">=</i>
                  <TableCell className="font-medium">
                    {row.euclideanNormOfVectorB}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-center">
                  <TableCell className="font-medium">
                    <i className="text-sm">
                      ||b|| (Eвклидовая норма правой части)
                    </i>
                  </TableCell>
                  <i className="text-sm">=</i>
                  <TableCell className="font-medium">
                    {row.euclideanNormOfB}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-center">
                  <TableCell className="font-medium">
                    <i className="text-sm">Погрешности полученного решения</i>
                  </TableCell>
                  <i className="text-sm">=</i>
                  <TableCell className="font-medium">{row.fault}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </>
        );
      })}
    </>
  );
};
