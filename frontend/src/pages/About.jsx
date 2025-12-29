import React from "react";

export default function About() {
  return (
    <div className="container page">
      <h1>About Wholesome Market</h1>

      <div className="panel" style={{ marginTop: 16 }}>
        <p className="panelText">
          Wholesome Market is a neighborhood grocery store located in Brooklyn,
          committed to providing fresh produce, halal and international foods,
          and everyday essentials at fair prices.
        </p>
      </div>

      <div className="cards" style={{ marginTop: 20 }}>
        <div className="feature">
          <div className="iconBubble">🌱</div>
          <h3>Fresh & Local</h3>
          <p>We work with trusted suppliers to bring quality produce daily.</p>
        </div>

        <div className="feature">
          <div className="iconBubble">🤝</div>
          <h3>Community First</h3>
          <p>A friendly store built around the needs of our neighborhood.</p>
        </div>

        <div className="feature">
          <div className="iconBubble">🌍</div>
          <h3>Diverse Selection</h3>
          <p>International, halal, and specialty foods under one roof.</p>
        </div>
      </div>
    </div>
  );
}
