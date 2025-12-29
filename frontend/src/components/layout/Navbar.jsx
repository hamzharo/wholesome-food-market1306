import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = Array.isArray(navLinks) ? navLinks : [];

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand__logo">W</div>
          <div>
            <div className="brand__name">Wholesome Market</div>
            <div className="brand__tag">1306 Atlantic Ave • Brooklyn</div>
          </div>
        </NavLink>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav__menuBtn"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mobileMenu">
          <div className="mobileMenu__panel">
            <div className="mobileMenu__top">
              <div style={{ fontWeight: 900 }}>Menu</div>
              <button className="nav__menuBtn" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            <div className="mobileMenu__links">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "link active" : "link")}
                  style={{ display: "block" }}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="mobileMenu__backdrop" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
