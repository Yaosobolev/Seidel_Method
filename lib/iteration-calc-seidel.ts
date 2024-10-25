import { calcSeidel } from "./calc-seidel";
import { AMatrixItem } from "./constants";
import { checkAccuracy } from "./check-accuracy";
interface ReturnProps {
  betweenValues: number[][];
  index: number;
  maxAbsoluteValue: number[];
}
export const iterationCalcSeidel = (
  A: AMatrixItem[][],
  b: number[],
  k: { base: number; exponent: number }
): ReturnProps => {
  const maxAbsoluteValue: number[] = [];
  const betweenValues: number[][] = [];
  let index = 0;

  const accuracy = Math.pow(k.base, k.exponent);
  let { prevX, values } = calcSeidel(A, b);
  betweenValues.push([...values]);
  let { maxAbsolute, isAccurate } = checkAccuracy(prevX, values, accuracy);
  maxAbsoluteValue.push(maxAbsolute);
  index++;

  for (index; !isAccurate; index++) {
    ({ prevX, values } = calcSeidel(A, b, values));
    betweenValues.push([...values]);
    ({ maxAbsolute, isAccurate } = checkAccuracy(prevX, values, accuracy));
    maxAbsoluteValue.push(maxAbsolute);
  }

  return { betweenValues, index, maxAbsoluteValue };
};
