import { faqItems } from "../../data/faq";
import { cn } from "../../lib/cn";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function FAQ({ openFaq, setOpenFaq }) {
  function setFaqOpenValue(index) {
    const copyOpenFaq = openFaq.slice();
    copyOpenFaq[index] = !copyOpenFaq[index];
    setOpenFaq(copyOpenFaq);
  }

  return (
    <Section id="faq">
      <Container className="max-w-[720px]">
        <Eyebrow>Support</Eyebrow>
        <Heading>Common questions</Heading>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const openStatus = openFaq[index];
            return (
              <Card key={item.question} padding={false} className="overflow-hidden">
                <button
                  type="button"
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-5 text-left font-body text-base font-semibold text-text transition-colors hover:text-accent-dark",
                    openStatus && "text-accent-dark"
                  )}
                  aria-expanded={openStatus}
                  onClick={() => setFaqOpenValue(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 text-xl font-normal text-muted"
                    aria-hidden="true"
                  >
                    {openStatus ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    openStatus ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    {openStatus && (
                      <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
