import { counterAtom } from "../atoms/counter";
import { evenSelector } from "../atoms/selector";
import { RecoilRoot, useSetRecoilState, useRecoilValue} from "recoil";




function Selector() {
    return <RecoilRoot>
            <Button/>
            <Counter/>
            <IsEven/>
            </RecoilRoot>
};


function Button() {
    const setCount = useSetRecoilState(counterAtom);
    
    const increase = () => {
        setCount(c => c + 2)
    }

    const decrease = () => {
        setCount(c => c - 1)
    }
    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Increase</button>
    </div>
};

function Counter() {
    const count = useRecoilValue(counterAtom);
    return <div>
        <h3>Counter: {count}</h3>
    </div>
};


function IsEven() {
    const isEven = useRecoilValue(evenSelector);
    return <div>
        <h3> Is Even: {isEven ? "Even" : "Odd"}</h3>
    </div>
};

export default Selector;