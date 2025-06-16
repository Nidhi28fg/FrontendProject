import { useState, useEffect } from "react";

function FaqQue({ faq, index }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className="rounded-4xl w-6/12 max-md:w-full pr-2">
        <div  className={`flex items-start gap-[13px] my-5 p-[21px] rounded-[20px] border-2 border-solid  ${
            isShow ? 'bg-[#e6f0ff] shadow-[18px_20px_20px_0px_#cecee0] border-[#b4e2f9]' : 'border-[#d8d6d6] '
          }`} onClick={handleClick}>

        <div className={`text-[#101061] font-semibold text-lg px-[15px] py-2.5 rounded-[50%] border-2 border-solid border-[#edeef0] 
        ${ isShow ? 'bg-white' : 'bg-[#edeef0]'}`}>
          {faq.id}
        </div>
        <div>
          <div className="text-[26px] font-medium max-md:text-[15px]">
            {faq.question}
            
          </div>{isShow && <div className="mt-2 pr-5">{faq.answer}</div>}
        </div>
      </div>
    </div>
  );
}

export default FaqQue;
