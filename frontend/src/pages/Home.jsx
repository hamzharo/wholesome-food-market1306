import React from "react";
import Hero from "../components/sections/Hero.jsx";
import Highlights from "../components/sections/Highlights.jsx";
import FeaturedProducts from "../components/sections/FeaturedProducts.jsx";
import LocationCTA from "../components/sections/LocationCTA.jsx";

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Wholesome Market — Fresh & Local</h1>
        <p>Seasonal produce, pantry staples, and everyday essentials delivered with care.</p>
      </section>

      {/* WHY SHOP HERE */}
      <h2 className="sectionTitle">Why people shop here</h2>
      <p className="sectionSub">
        Fresh essentials, great value, and a neighborhood feel—built for busy days.
      </p>

      {/* 6 CARDS */}
      <section className="cards">
        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">🥬</div>
            <span className="chip">Produce</span>
          </div>
          <h3>Fresh Produce Daily</h3>
          <p>Seasonal fruits &amp; vegetables picked for quality and price.</p>
        </div>

        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">🌍</div>
            <span className="chip">Global</span>
          </div>
          <h3>Halal &amp; International</h3>
          <p>Everyday staples plus African/Caribbean/Middle Eastern essentials.</p>
        </div>

        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">🥖</div>
            <span className="chip">Fresh</span>
          </div>
          <h3>Bakery &amp; Snacks</h3>
          <p>Bread, pastries, and grab-and-go favorites for the family.</p>
        </div>

        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">🥩</div>
            <span className="chip">Protein</span>
          </div>
          <h3>Meat &amp; Seafood</h3>
          <p>Great options for weekly cooking, BBQ, and special meals.</p>
        </div>

        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">🧂</div>
            <span className="chip">Pantry</span>
          </div>
          <h3>Pantry Essentials</h3>
          <p>Rice, flour, oils, spices, canned goods—everything in one stop.</p>
        </div>

        <div className="feature">
          <div className="featureTop">
            <div className="iconBubble">⚡</div>
            <span className="chip">Service</span>
          </div>
          <h3>Quick Checkout</h3>
          <p>Friendly staff and smooth checkout to save your time.</p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <h2 className="sectionTitle">Featured products</h2>
      <p className="sectionSub">Product grid placeholder — implement product list here.</p>
      <div className="panel" style={{ marginTop: 12 }}>
        Product grid placeholder — implement product list here.
      </div>

      {/* VISIT STORE */}
      <div className="panel" style={{ marginTop: 14, marginBottom: 20 }}>
        <div className="panelTitle">Visit our store</div>
        <p className="panelText">1306 Atlantic Ave, Brooklyn, NY — Open daily</p>
      </div>
    </div>
  );
}
