import { faqItems } from "../../data/faq";
import "./FAQ.css";

export default function FAQ({ openIndex, setOpenIndex }) {
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <p className="eyebrow">Support</p>
        <h2 className="heading-sm">Common questions</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`card faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="faq-answer text-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
