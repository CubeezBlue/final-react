import { useEffect, useState } from "react";
import { obtenerProductosPorTipoDesdeFirebase } from "../services/firebase";
import { Container, Row, Col } from "react-bootstrap";
import ProductosContainer from "../components/containers/ItemListContainer";
import ConfiguracionCarrito from "../components/containers/ConfiguracionCarrito";
import { carritoServices } from "../services/compras";
import { useParams } from "react-router-dom";

const Type = () => {
  const { type } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductosPorTipo = async () => {
      const productosPorTipo = await obtenerProductosPorTipoDesdeFirebase(type);
      setProductos(productosPorTipo);
    };

    obtenerProductosPorTipo();
  }, [type]);

  useEffect(() => {
    carritoServices.getCompra().then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <h1>{type}</h1>

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

export default Type;
