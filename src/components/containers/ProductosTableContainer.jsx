import ProductoRows from "../common/ProductoRows";

const ProductosTableContainer = ({ items }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th></th>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <ProductoRows items={items} />
      </tbody>
    </table>
  );
};

export default ProductosTableContainer;
