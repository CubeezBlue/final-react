import Producto from "./Producto";
import { Col, Row } from "react-bootstrap";

const ProductoGrid = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col md={4} key={`item-${item.id}`}>
          <Producto
            id={item.id}
            precio={item.precio}
            nombre={item.nombre}
            img={item.img}
            style={item.style}
            actions={item.actions}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductoGrid;
