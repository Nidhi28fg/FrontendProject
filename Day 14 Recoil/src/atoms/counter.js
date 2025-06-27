// ../atoms/counter.js
import { atom, selector } from "recoil";


export const counterAtom = atom({
  key: "counterAtom",
  default: 0,
});

// export const evenSelector = selector({
//   key: "evenSelector",
//   get: ({ get }) => {
//     const count = get(counterAtom);
//     const result2 = (count % 2 === 0);
//     // const result = count % 2 === 0 ? "even" : "odd";
//     return result2;
//   },
// });
