import React from "react";
import Classes from "./Collections.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Products from "./../../products.json";

function Collections() {
  return (
    <div className={`container-fluid  ${Classes.main}`}>
      <div className={`container ${Classes.flex__box}`}>
        {Products.map((p) => {
          return (
            <Card key={p.id} style={{ width: "18rem", padding: "0.5rem" }}>
              <Card.Img
                variant="top"
                src={p.image}
                style={{
                  width: "12rem",
                  height: "14rem",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>{p.category}</Card.Title>
                <Card.Text style={{ height: "5rem", overflow: "scroll" }}>
                  {p.description}
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
