import { useState, useEffect } from "react";

function Faq( {id="faq"}) {
    const [isShow, setIsShow] = useState(false);
    const [index1, setIndex1] = useState(0);

    useEffect(() =>{
        if(id === "faq"){
            setIsShow(true);
        }
    },[])

    const handleClick = () => {
        setIsShow((isShow) => !isShow);
    }

  return (
    <div className="m-[75px] p-[81px] rounded-[71px] border-4 border-solid border-[gray] max-md:m-[22px] max-md:p-10">
      <h2 className="text-[59px] font-semibold text-[#1d1616] max-md:text-[28px]">
        Frequently asked Questions
      </h2>

      <div className="rounded-4xl">
    
        <div id="faq" onClick={handleClick}>
          {" "}
          <div >Question</div>
          {isShow && <div>Answer</div>}
        </div>
      </div>
    </div>
  );
}

export default Faq;
