import { useEffect, useState } from "react";
import { obtenerProductosDesdeFirebase } from "../services/firebase";
import { Container, Row, Col } from "react-bootstrap";
import ProductosContainer from "../components/containers/ItemListContainer";
import ConfiguracionCarrito from "../components/containers/ConfiguracionCarrito";
import { carritoServices } from "../services/compras";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosDesdeFirebase = await obtenerProductosDesdeFirebase();
      setProductos(productosDesdeFirebase);
    };

    obtenerProductos();
  }, []);

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
