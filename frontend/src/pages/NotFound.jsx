import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const err = useRouteError();
  return (
    <div className="container page">
      <h1>Page not found</h1>
      <p style={{ opacity: 0.8 }}>
        {err?.statusText || err?.message || "The page you requested does not exist."}
      </p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
