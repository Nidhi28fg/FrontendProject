import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../atoms/counter";
import { memo } from "react";

function Memo() {
  return (
    <>
      <RecoilRoot>
        <AtomState />
      </RecoilRoot>
    </>
  );
}

function AtomState() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval (()=>{
  //     setCount(c => c + 1)
  //   }, 10000)
  // },[])

  return <div>
      <CurrentCount count={count}/>
      <Increase setCount={setCount}/>
      <Decrease setCount={setCount}/>
    </div>
}

// const MemoizedCurrentCout = memo(CurrentCount);

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return (
//     <div>
//       <h3 className="text-blue-100">Current Count: {count}</h3>
//     </div>
//   );
// }


const CurrentCount = memo(function ({count}) {
  return <div>
      <h3> current count: {count} </h3>
    </div>
});

const Increase = memo(function ({setCount}) {
  function increase() {
    setCount((c) => c + 1);
  }
  function increaseBy5() {
    setCount((c) => c + 5);
  }
  return <div>
      <button onClick={increase}>Increase Count</button>
      <button onClick={increaseBy5}>Increase by 5</button>
    </div>
});

const Decrease = memo(function ({setCount}) {
  function decrease() {
    setCount((c) => c - 1);
  }
  return <div>
      <button onClick={decrease}>Decrease Count</button>
    </div>
})

export default Memo;
