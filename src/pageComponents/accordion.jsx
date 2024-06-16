import { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border-b border-gray-300">
        <button
          className="w-full flex justify-between p-4 focus:outline-none"
          onClick={toggleAccordion}
        >
          <h2 className="text-sm font-bold ">{question}</h2>
          <svg
            className={`w-6 h-8 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 6.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-l border-r border-b border-gray-300">
          <p className="text-gray-700 p-4">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
