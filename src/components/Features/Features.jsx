import { features } from "../../data/features";
import "./Features.css";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Why shop with us</p>
        <h2 className="heading-sm">Built for confident buying</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card feature-card">
              <h3>{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
