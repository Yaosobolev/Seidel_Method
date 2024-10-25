export type AMatrixItem = {
  name: string;
  value: number;
};

// export const accuracy = [
//   Math.pow(10, -2),
//   Math.pow(10, -3),
//   Math.pow(10, -4),
//   Math.pow(10, -5),
//   Math.pow(10, -6),
// ];
export const accuracy = [
  { base: 10, exponent: -2 },
  { base: 10, exponent: -3 },
  { base: 10, exponent: -4 },
  { base: 10, exponent: -5 },
  { base: 10, exponent: -6 },
];

// export const A: AMatrixItem[][] = [
//   [
//     { name: "x1", value: 2 },
//     { name: "x2", value: 0.2 },
//     { name: "x3", value: -1 },
//     { name: "x4", value: 0 },
//   ],
//   [
//     { name: "x1", value: 0.4 },
//     { name: "x2", value: -8.5 },
//     { name: "x3", value: 0.5 },
//     { name: "x4", value: 4 },
//   ],
//   [
//     { name: "x1", value: 0.3 },
//     { name: "x2", value: -1 },
//     { name: "x3", value: 5.2 },
//     { name: "x4", value: 1 },
//   ],
//   [
//     { name: "x1", value: 1 },
//     { name: "x2", value: 0.2 },
//     { name: "x3", value: -1 },
//     { name: "x4", value: 2.5 },
//   ],
// ];

// export const b = [2.7, 21.9, -3.9, 9.9];
// export const A: AMatrixItem[][] = [
//   [
//     { name: "x1", value: -8 / 8 },
//     { name: "x2", value: -11 / 8 },
//     { name: "x3", value: 1 / 8 },
//     { name: "x4", value: 0.07 / 8 },
//   ],
//   [
//     { name: "x1", value: -4.056 / 1 },
//     { name: "x2", value: -0.3 / 4.056 },
//     { name: "x3", value: 5.3 / 4.056 },
//     { name: "x4", value: -0.11 / 4.056 },
//   ],
//   [
//     { name: "x1", value: -0.2 / 1 },
//     { name: "x2", value: -5.77 / 0.2 },
//     { name: "x3", value: -2.8 / 0.2 },
//     { name: "x4", value: 15 / 0.2 },
//   ],
//   [
//     { name: "x1", value: -12 / 1 },
//     { name: "x2", value: 3.8 / 12 },
//     { name: "x3", value: -1 / 12 },
//     { name: "x4", value: -3 / 12 },
//   ],
// ];

// export const b = [-0.654 / 8, 24.016 / 4.056, -54.567 / 0.2, 64.78 / 12];
// export const A: AMatrixItem[][] = [
//   [
//     { name: "x1", value: 12 },
//     { name: "x2", value: -3.8 },
//     { name: "x3", value: 1 },
//     { name: "x4", value: 3 },
//   ],
//   [
//     { name: "x1", value: 8 },
//     { name: "x2", value: 11 },
//     { name: "x3", value: -1 },
//     { name: "x4", value: -0.07 },
//   ],
//   [
//     { name: "x1", value: 4.056 },
//     { name: "x2", value: 0.3 },
//     { name: "x3", value: -5.3 },
//     { name: "x4", value: 0.11 },
//   ],
//   [
//     { name: "x1", value: 0.2 },
//     { name: "x2", value: 5.77 },
//     { name: "x3", value: 2.8 },
//     { name: "x4", value: -15 },
//   ],
// ];

// export const b = [-64.78, 0.654, -24.016, 54.567];
export const A: AMatrixItem[][] = [
  [
    { name: "x1", value: 10 },
    { name: "x2", value: 2 },
    { name: "x3", value: 1 },
    { name: "x4", value: 4 },
  ],
  [
    { name: "x1", value: 2 },
    { name: "x2", value: 110 },
    { name: "x3", value: -2 },
    { name: "x4", value: 7 },
  ],
  [
    { name: "x1", value: 6.666 },
    { name: "x2", value: 2.3 },
    { name: "x3", value: -15.6 },
    { name: "x4", value: 1 },
  ],
  [
    { name: "x1", value: 1 },
    { name: "x2", value: 1.3 },
    { name: "x3", value: 9.9 },
    { name: "x4", value: 30 },
  ],
];

export const b = [-10.78, 11.554, -20.016, 204.751];
// export const b = [0.654, -24.016, 54.567, -64.78];
export const Aarg = A.map((row) => {
  return row.map((item) => {
    return {
      name: item.name,
      value: item.value / 100,
    };
  });
});

export const barg = b.map((item) => item / 100);
