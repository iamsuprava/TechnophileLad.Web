import React from "react";
import { Faq } from "../container";
import { useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "What is Loan Against Securities (LAS)?",
    answer:
      "Loan Against Securities (LAS) is a service that allows borrowers to use their stocks held in a demat account as collateral to secure a loan. This service is similar to a loan against gold or property, where the borrower uses a valuable asset as collateral for a loan. With LAS, the borrower can pledge their stocks to obtain a loan.",
  },
  {
    id: 2,
    question: "What is Loan Against Securities (LAMF)?",
    answer:
      "Loan Against Mutual Funds (LAMF) is a service that allows borrowers to use their mutual funds held in a demat account as collateral to secure a loan. This service is similar to a loan against securities (LAS) or a loan against gold or property, where the borrower uses a valuable asset as collateral for a loan. With LAMF, the borrower can pledge their mutual funds to obtain a loan.",
  },
  {
    id: 3,
    question: "What are the features of LAS & LAMF?",
    answer:
      "The loan application process is fully digital.The minimum loan amount is ₹20,000 ",
      // "*The maximum loan amount is ₹10 lakhs.",
      // "The loan tenure ranges from 1 month to 12 months, with the option for auto-renewal after one year.",
      // "Only the outstanding monthly interest is due each month, and the principal can be repaid at any time within the loan period. The principal is due with the last month’s interest payment.",
      // "The loan amount will be credited to the borrower's bank account within two working days.",
      // "Get a flat annualized interest rate of 12% per year for all clients.",
      // "Single stock lending is available, and there is a large list of approved stocks.",
      // "The lender has among the lowest processing fees in the industry and there are no hidden charges.",
      // "There is a dashboard for easy loan management and the process for obtaining a top-up loan is easy.",
      // "A haircut of 55% is applied to avoid constant notifications.",
  },
  {
    id: 4,
    question: "Whom should I pledge the securities to?",
    answer:
      "To avail loan against the securities, the securities must be pledged to Fifty Fintech Pvt Ltd.",
  },
  {
    id: 5,
    question: "What is the process of availing the loan?",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Faq data={questions} />
    </div>
  );
};

export default FaqPage;
