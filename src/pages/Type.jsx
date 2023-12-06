import ProductosContainer from "../components/containers/ItemListContainer";
import {productos} from "../data/productos";
import { Col, Container, Row } from "react-bootstrap";
import ConfiguracionCarrito from "../components/containers/ConfiguracionCarrito";
import { useEffect } from "react";
import { carritoServices } from "../services/compras";
import { useParams } from "react-router-dom";


const Type = () => {
    const {  type } = useParams();
    useEffect(() => {
        carritoServices.getCompra().then((data) => console.log(data));
    }, []);
    const producto = productos.filter((i) => i.type === type);

    return (
        <Container>
        <h1>{type}</h1>

        <Row>
            <Col md={8}>
                <ProductosContainer items={producto} />
            </Col>
            <Col md={4}>
            <ConfiguracionCarrito />
            </Col>
        </Row>
        </Container>
    );
};

export default Type;
