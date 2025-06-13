import FaqQue from "./FaqQue";

function Faq() {
  const faqdata = [
    {
      id: "01",
      question: "How do I create an account on the Internship platform?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, department title, or preferred technology. You can also use the advanced search filters to narrow down results by industry, Task type (full-time, part-time, Task based), and difficulty level.",
    },
    {
      id: "02",
      question: "How do I apply for a Internship through the platform?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, department title, or preferred technology. You can also use the advanced search filters to narrow down results by industry, Task type (full-time, part-time, Task based), and difficulty level.",
    },
    {
      id: "03",
      question: "How can I track the status of my Internship progress?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, department title, or preferred technology. You can also use the advanced search filters to narrow down results by industry, Task type (full-time, part-time, Task based), and difficulty level.",
    },
    {
      id: "04",
      question: "How do I create an account on the internship platform?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, department title, or preferred technology. You can also use the advanced search filters to narrow down results by industry, Task type (full-time, part-time, Task based), and difficulty level.",
    },
    {
      id: "05",
      question:
        "Is there a cost to use the internship program, and what features are paid?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, department title, or preferred technology. You can also use the advanced search filters to narrow down results by industry, Task type (full-time, part-time, Task based), and difficulty level.",
    },
  ];

  return (
    <div className="m-[75px] p-[81px] rounded-[71px] border-4 border-solid border-[gray] max-md:m-[22px] max-md:p-10">
      <h2 className="text-[59px] font-semibold text-[#1d1616] max-md:text-[28px] max-md:text-center ">
        Frequently asked Questions
      </h2>
    <div className="flex flex-wrap p-4 max-md:p-0 max-md:h-full">
      {faqdata.map((faq, index) => {
        return (
          <FaqQue faq={faq} index={index}/>
        );
      })}
</div>

    </div>
  );
}

export default Faq;
