import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping usually takes 3-5 business days. Expedited shipping is available at checkout for 1-2 day delivery."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! International shipping rates and times vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you will receive a confirmation email with a tracking number and a link to track your package."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
