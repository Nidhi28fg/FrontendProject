import { selector} from "recoil";
import { counterAtom } from "./counter";


export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
      const count = get(counterAtom);
      const result = (count % 2 === 0);
      return result;
    }
  })