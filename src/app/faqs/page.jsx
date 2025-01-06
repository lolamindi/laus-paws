"use client";
import { useState } from "react";
import faqData from "../../../data/faqs.json";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-400">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left p-4 text-lg font-medium"
    >
      {question}
      <span className={`transform transition-transform ${isOpen ? "rotate-45" : ""}`}>
        +
      </span>
    </button>
    {isOpen && <p className="p-4 bg-white text-gray-700">{answer}</p>}
  </div>
);

const FAQSection = ({ heading, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="bg-[#f9f5f3] shadow-lg rounded-lg">
        {items.map((item, index) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function FAQs() {
  return (
    <main className="relative flex justify-center min-h-screen bg-[#edd4cd]">
      <section className="top-4 p-6 text-gray-800 max-w-5xl">
        <h1 className="text-2xl font-bold pb-2">Frequently Asked Questions</h1>
        <p className=" text-lg mb-12">
          Curious to know more about Lau's Paws? Whether you're wondering about pricing or want to
          know all about our vaccination requirements, here are the answers to some of the questions we get
          asked most often:
        </p>

        {faqData.sections.map((section) => (
          <FAQSection key={section.heading} heading={section.heading} items={section.items} />
        ))}
      </section>
    </main>
  );
}
