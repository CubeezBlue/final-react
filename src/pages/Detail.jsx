import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productos } from "../data/productos";

const Detail = () => {
  const { nombre, type } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((i) => i.nombre === nombre && i.type === type);

  return (
    <Container>
      <h1>{nombre}</h1>

      <Card>
        <Card.Img variant="top" src={`../${producto.img}`}/>
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
