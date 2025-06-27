// ../atoms/counter.js
import { atom, selector } from "recoil";
// selector is used to derive the state from the atom. 
// get a function that takes the atom as an argument and returns a value. and it is a pure function
// atom use to store the state. key is the name of the atom. default is the initial value of the state.
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
