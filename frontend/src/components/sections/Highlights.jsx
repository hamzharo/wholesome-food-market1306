import React from "react";
import Container from "../common/Container.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import Card from "../common/Card.jsx";
import Badge from "../common/Badge.jsx";

const highlights = [
  {
    title: "Fresh Produce Daily",
    desc: "Seasonal fruits & vegetables picked for quality and price.",
    badge: "Produce",
    icon: "🥬",
  },
  {
    title: "Halal & International",
    desc: "Everyday staples plus African/Caribbean/Middle Eastern essentials.",
    badge: "Global",
    icon: "🌍",
  },
  {
    title: "Bakery & Snacks",
    desc: "Bread, pastries, and grab-and-go favorites for the family.",
    badge: "Fresh",
    icon: "🥖",
  },
  {
    title: "Meat & Seafood",
    desc: "Great options for weekly cooking, BBQ, and special meals.",
    badge: "Protein",
    icon: "🥩",
  },
  {
    title: "Pantry Essentials",
    desc: "Rice, flour, oils, spices, canned goods—everything in one stop.",
    badge: "Pantry",
    icon: "🧂",
  },
  {
    title: "Quick Checkout",
    desc: "Friendly staff and smooth checkout to save your time.",
    badge: "Service",
    icon: "⚡",
  },
];

export default function Highlights() {
  return (
    <section style={{ padding: "28px 0" }}>
      <Container>
        <SectionHeader
          title="Why people shop here"
          subtitle="Fresh essentials, great value, and a neighborhood feel—built for busy days."
        />

        <div className="grid grid--highlights">
          {highlights.map((h) => (
            <Card key={h.title} className="highlightCard">
              <div className="highlightCard__top">
                <div className="highlightCard__icon" aria-hidden>
                  {h.icon}
                </div>
                <Badge>{h.badge}</Badge>
              </div>

              <h3 className="highlightCard__title">{h.title}</h3>
              <p className="highlightCard__desc">{h.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
