"use client";
import { useState } from "react";
import faqData from "../../../data/faqs.json";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return answer.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <a key={index} href={part.href} className="text-pink-700 font-bold">
            {part.text}
          </a>
        )
      );
    }
    return answer; 
  };

  return (
    <div className="border border-pink-700">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left p-4 text-lg font-medium"
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {isOpen && (
        <p className="p-4 bg-white border-t border-pink-700 text-gray-800">
          {renderAnswer(answer)}
        </p>
      )}
    </div>
  );
};

const FAQSection = ({ heading, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="bg-pink-50 border border-pink-700">
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
      <section className="top-4 p-8 text-gray-900 max-w-5xl">
        <h1 className="text-2xl font-bold pb-2 pt-4">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-lg mb-12">
          Curious to know more about Lau's Paws? Whether you're wondering about our vaccination requirements or want to find out about pricing, here are the answers to some of the questions we're asked most often:
        </p>
        <section className="mx-auto max-w-4xl">
          {faqData.sections.map((section) => (
            <FAQSection
              key={section.heading}
              heading={section.heading}
              items={section.items}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
