import React from "react";

const demoProducts = [
  { id: 1, name: "Fresh Tomatoes", category: "Produce", price: "$2.99 / lb" },
  { id: 2, name: "Basmati Rice", category: "Pantry", price: "$12.49 / bag" },
  { id: 3, name: "Halal Chicken", category: "Meat", price: "$5.99 / lb" },
  { id: 4, name: "Olive Oil", category: "Pantry", price: "$9.99" },
  { id: 5, name: "Bakery Bread", category: "Bakery", price: "$3.49" },
  { id: 6, name: "Frozen Fish", category: "Seafood", price: "$8.99 / lb" },
];

export default function Products() {
  return (
    <div className="container page">
      <h1>Products</h1>
      <p>Explore some of our most popular everyday items.</p>

      <div className="cards" style={{ marginTop: 20 }}>
        {demoProducts.map((p) => (
          <div key={p.id} className="feature">
            <div className="featureTop">
              <div className="iconBubble">🛒</div>
              <span className="chip">{p.category}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
