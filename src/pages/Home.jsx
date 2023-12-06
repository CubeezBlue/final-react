import ProductosContainer from "../components/containers/ItemListContainer";
import {productos} from "../data/productos";
import { Col, Container, Row } from "react-bootstrap";
import ConfiguracionCarrito from "../components/containers/ConfiguracionCarrito";
import { useEffect } from "react";
import { carritoServices } from "../services/compras";

const Home = () => {
  useEffect(() => {
    carritoServices.getCompra().then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <h1>Home</h1>

      <Row>
        <Col md={8}>
          <ProductosContainer items={productos} />
        </Col>
        <Col md={4}>
          <ConfiguracionCarrito />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
