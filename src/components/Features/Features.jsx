import { features } from "../../data/features";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Features() {
  return (
    <Section>
      <Container>
        <Eyebrow>Why shop with us</Eyebrow>
        <Heading>Built for confident buying</Heading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="mb-2 font-display text-[1.15rem]">{feature.title}</h3>
              <p className="text-sm leading-normal text-muted">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
