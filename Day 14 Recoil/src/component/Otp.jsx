import { useRef, useState } from "react";

export default function Otp({number}) {
    //array(number).fill use for creating an array of length number and fill it with 0
    //fill use for filling the array with 0 like
    const ref = useRef(Array(number).fill(0));
    // const [disabled, setDisabled] = useState(Array(number).fill(""))
    return ( <div>
        
        {Array(number).fill(1).map((x, index) => <SubOtpBox reference={e => ref.current[index] = e} key={index} 
        onDone={() => {
            if(index + 1 >= number){
                return;
            } 
            ref.current[index + 1].focus();
         }}
         onBack={() => {
            if(index == 0){
                return;
            } ref.current[index - 1].focus();
         }} 
        />)}
    </div>
    )}



// export default function Otp1() {
//     const ref1 = useRef();
//     const ref2 = useRef();
//     const ref3 = useRef();
//     return (
//     <div>
//     <SubOtpBox reference={ref1} onDone={()=>{
//         ref2.current.focus(); 
//     }} />
//      <SubOtpBox reference={ref2} onDone={() => {
//         ref3.current.focus();
//     }} onBack={() => {
//         ref1.current.focus();
//     }}/>
//      <SubOtpBox reference={ref3} onBack={() => {
//         ref2.current.focus();
//     }}/>
//     </div>
//     )}

function SubOtpBox ({reference, onDone, onBack}) {
    const [value, setValue] = useState("");
    return ( <div>
    <input ref={reference} type="number"
        onKeyUp={(e) => {
            if(e.key === "Backspace" || e.key === "Delete" || value.length === 0){
                onBack()
            } else if(e.key === "Enter" || value.length === 1){
                onDone()
            }
        }} 
    onChange={(e) => { 
        setValue(e.target.value);
        // if(e.target.value){
        //     onDone() 
        // }
        }} />     
    </div>
)}