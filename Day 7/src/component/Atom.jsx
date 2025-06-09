import { RecoilRoot, atom } from "recoil";

function Atom() {
  return (
    <RecoilRoot>
      <AtomState />
    </RecoilRoot>
  );
}

function Counter() {
    
  return (
    <>
      <CurrentCount  />
      <Increase />
      <Decrease />
    </>
  );
}

function CurrentCount() {
  return (
    <>
      {count}
    </>
  );
}

function Increase() {
     function increase(){
        setCount(c => c -1);
    }
  return (
    <>
      <button onClick={increase}></button>
    </>
  );
}


function Decrease() {
    function decrease(){
        setCount(c => c -1);
    }
  return (
    <>
      <button onClick={decrease}></button>
    </>
  );
}


export default Atom;
