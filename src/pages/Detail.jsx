import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDetallesProductoDesdeFirebase } from "../services/firebase";

const Detail = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const obtenerDetallesProducto = async () => {
      const detallesProducto = await obtenerDetallesProductoDesdeFirebase(nombre);
      setProducto(detallesProducto);
    };

    obtenerDetallesProducto();
  }, [nombre]);

  if (!producto || Object.keys(producto).length === 0) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <Container>
      <h1>{nombre}</h1>

      <Card>
        <Card.Img variant="top" src={`../${producto.img}`} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <ul>
              <li>Descripción: {producto.descripcion}</li>
              <li>Precio: ${producto.precio}</li>
            </ul>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;