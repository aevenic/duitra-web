import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/8">
      <button
        className="w-full py-3.5 flex justify-between items-center text-left hover:text-blue-400 transition-colors group"
        onClick={onClick}
      >
        <span className="md:text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
