import { Card, Button } from "react-bootstrap";

const Producto = ({ id, img, nombre, precio, style, actions }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={img} style={style.img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <ul>
          <li>Precio: ${precio}</li>
        </ul>

        {actions.map((action, index) => (
          <Button key={`action-${index}`} onClick={action.onClick}>
            {action.content}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Producto;
