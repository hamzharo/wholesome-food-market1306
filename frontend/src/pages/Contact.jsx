import React from "react";

export default function Contact() {
  return (
    <div className="container page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Visit, call, or send us a message.</p>

      <div className="cards" style={{ marginTop: 20 }}>
        <div className="feature">
          <div className="iconBubble">📍</div>
          <h3>Location</h3>
          <p>1306 Atlantic Ave<br />Brooklyn, NY 11216</p>
        </div>

        <div className="feature">
          <div className="iconBubble">⏰</div>
          <h3>Hours</h3>
          <p>Open Daily<br />6:00 AM – 3:00 AM</p>
        </div>

        <div className="feature">
          <div className="iconBubble">📞</div>
          <h3>Phone</h3>
          <p>(718) 872-6299</p>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 20 }}>
        <h3 className="panelTitle">Send us a message</h3>
        <p className="panelText">
          Contact form placeholder — connect this to the backend later.
        </p>
      </div>
    </div>
  );
}