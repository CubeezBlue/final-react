import Producto from "./Producto";

const ProductoRows = ({ items }) => {
  return items.map((item) => {
    return (
      <Producto
        id={item.id}
        age={item.precio}
        name={item.nombre}
        onClick={item.onClick}
        thumbnail={item.img}
      />
    );
  });
};

export default ProductoRows;
