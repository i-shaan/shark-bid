import React from 'react';
import { Mail } from 'lucide-react';

const Faq = () => {
  const faqData = [
    {
      question: "What is the price of Ardor (ARDR)?",
      answer: "The current price of Ardor (ARDR) in USD is $0.1133."
    },
    {
      question: "What is the current ARDR market cap?",
      answer: "The current market capitalization of Ardor (ARDR) is $118,503,347.13 USD. This value represents the total market value of all coins in circulation, calculated by multiplying the current price of ARDR by the number of coins in circulation."
    },
    {
      question: "What is the current supply of Ardor (ARDR)?",
      answer: "The current supply of Ardor (ARDR) is 998466231.26 ARDR. This figure represents the total number of coins that have been mined and are currently in circulation."
    },
    {
      question: "What is the 24 trading volume of Ardor (ARDR)?",
      answer: "The 24-hour trading volume of Ardor (ARDR) in USD is $649,653,619.93. This figure represents the total value of all ARDR transactions across various exchanges within the last 24 hours."
    },
    {
      question: "How to Buy Ardor (ARDR) in India?",
      answer: "To buy Ardor (ARDR) via Mudrex, simply sign up and create an account on their platform. Proceed by completing the KYC process to verify your identity. Once verified, deposit funds into your account using the available methods. With your account funded, you're all set to start investing in ARDR."
    },
    {
      question: "Can I buy Ardor (ARDR) with UPI?",
      answer: "Yes, you can buy Ardor (ARDR) with UPI on Mudrex, which accepts payments through popular UPI apps like Paytm, PhonePe, and Google Pay, offering a convenient and quick way to invest."
    },
    {
      question: "How to Convert Ardor (ARDR) to Indian Rupee (INR)?",
      answer: "To convert Ardor (ARDR) to Indian Rupee (INR), you can use ARDR/INR conversion rates in real time."
    }
  ];

  return (
    <div className=" text-gray-300 m">
      <div className="w-full">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Have a question not answered?
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-400">You can contact us at</span>
            <a 
              href="mailto:help@sharkbid.com" 
              className="text-white hover:text-blue-400 transition-colors inline-flex items-center space-x-1"
            >
              <Mail className="w-4 h-4" />
              <span>help@sharkbid.com</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-12">
          {faqData.map((faq, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="lg:pr-8">
                <h3 className="text-xl font-medium text-white leading-relaxed">
                  {faq.question}
                </h3>
              </div>
              <div className="lg:pl-8">
                <p className="text-gray-300 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;