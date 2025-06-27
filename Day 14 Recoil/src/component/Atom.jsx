import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../atoms/counter";

function Atom() {
  return (
    <>
      <RecoilRoot>
        <AtomState />
      </RecoilRoot>
    </>
  );
}

function AtomState() {
  return (
    <>
      <CurrentCount />
      <Increase />
      <Decrease />
    </>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h3 className="text-blue-100">Current Count: {count}</h3>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 1);
  }

  function increaseBy5() {
    setCount((c) => c + 5);
  }
  return (


    <>
      <button onClick={increase}>Increase Count</button>
      <button onClick={increaseBy5}>Increase by 5</button>
    </>
    
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <button onClick={decrease}>Decrease Count</button>
    </>
  );
}

export default Atom;
