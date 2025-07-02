import { useRef } from "react";
export default function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    return (
    <div>
    <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
    }}/>
     <SubOtpBox reference={ref2} onDone={() => {
        ref3.current.focus();
    }}/>
     <SubOtpBox reference={ref3}/>
    </div>
    )}

function SubOtpBox ({reference, onDone}) {
    return (<input ref={reference} type="text" 
    onChange={(e) => { onDone() }}/>)
}