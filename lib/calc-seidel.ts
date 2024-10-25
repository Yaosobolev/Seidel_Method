import { AMatrixItem } from "./constants";
interface ReturnProps {
  values: number[];
  prevX: number[];
}
export const calcSeidel = (
  A: AMatrixItem[][],
  b: number[],
  // curX: number[] = Array(4).fill(0)
  curX: number[] = [...b]
): ReturnProps => {
  const values: number[] = [];

  const prevX: number[] = [...curX];
  for (let i = 0; i < A.length; i++) {
    values.push(b[i] / A[i][i].value);
    for (let j = 0; j < A.length; j++) {
      if (j < i) {
        values[i] -= (A[i][j].value / A[i][i].value) * curX[j];
      }
      if (j > i) {
        values[i] -= (A[i][j].value / A[i][i].value) * curX[j];
      }
    }
    curX[i] = values[i];
  }

  return { prevX, values };
};
