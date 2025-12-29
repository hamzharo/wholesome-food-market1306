import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <h2 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      {subtitle ? (
        <p style={{ margin: "6px 0 0", opacity: 0.8, maxWidth: 720 }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
